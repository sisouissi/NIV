import React from 'react';
import { Modal } from './Modal.tsx';
import { references, Reference } from '../data/references.ts';
import { ExternalLink } from './icons/index.ts';

interface ReferencesModalProps {
  onClose: () => void;
}

const ReferenceItem: React.FC<{ reference: Reference }> = ({ reference }) => (
  <div className="py-4 border-b border-slate-200 last:border-b-0">
    <h3 className="font-semibold text-slate-800">{reference.title}</h3>
    <p className="text-sm text-slate-600 mt-1">{reference.authors}</p>
    <div className="flex justify-between items-end mt-2">
      <p className="text-sm text-slate-500 italic pr-4">
        {reference.journal}
        {reference.volume && `; ${reference.volume}`}
        {reference.pages && `:${reference.pages}`}
      </p>
      <div className="flex flex-col items-end space-y-1 flex-shrink-0">
        {reference.urls.map((url, index) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-blue-600 hover:text-blue-800 hover:underline"
            aria-label={`Lire l'article: ${reference.title} (lien ${index + 1})`}
          >
            Voir la publication {reference.urls.length > 1 ? index + 1 : ''}
            <ExternalLink className="w-4 h-4 ml-1.5" />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export const ReferencesModal: React.FC<ReferencesModalProps> = ({ onClose }) => {
  const groupedReferences = references.reduce<Record<number, Reference[]>>((acc, ref) => {
    const year = ref.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(ref);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedReferences).map(Number).sort((a, b) => b - a);

  return (
    <Modal isOpen={true} onClose={onClose} title="Références Scientifiques Clés">
      <div>
        {sortedYears.map(year => (
          <section key={year} aria-labelledby={`year-${year}`}>
            <h2 
              id={`year-${year}`}
              className="text-2xl font-bold text-slate-800 pt-4 pb-2 mb-2 border-b-2 border-slate-300 sticky top-[-24px] bg-white z-10 -mx-6 px-6"
            >
              {year}
            </h2>
            <div>
              {groupedReferences[year].map((ref) => (
                <ReferenceItem key={ref.id} reference={ref} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </Modal>
  );
};