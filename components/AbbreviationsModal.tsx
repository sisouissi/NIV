

import React from 'react';
import { Modal } from './Modal';
import { abbreviations } from '../data/abbreviations';

interface AbbreviationsModalProps {
  onClose: () => void;
}

export const AbbreviationsModal: React.FC<AbbreviationsModalProps> = ({ onClose }) => {
    const sortedAbbreviations = [...abbreviations].sort((a, b) => a.abbr.localeCompare(b.abbr));
  
  return (
    <Modal isOpen={true} onClose={onClose} title="Liste des Abréviations">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
        {sortedAbbreviations.map((item, index) => (
          <div key={index} className="flex text-sm py-1">
            <span className="font-bold text-slate-800 w-24 flex-shrink-0">{item.abbr}</span>
            <span className="text-slate-600">{item.full}</span>
          </div>
        ))}
      </div>
    </Modal>
  );
};