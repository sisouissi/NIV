import React from 'react';
import { Modal } from './Modal';
import { ExpertChatbot } from './ExpertChatbot';

interface ExpertChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExpertChatModal: React.FC<ExpertChatModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Modal 
        isOpen={isOpen} 
        onClose={onClose} 
        title="Demandez à l'Expert !"
        contentClassName="p-0 overflow-hidden"
    >
      <ExpertChatbot />
    </Modal>
  );
};