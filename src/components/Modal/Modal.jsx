import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import './Modal.css';

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="Modal-backdrop">
        <div className="Modal-wrapper">
          <div className="Modal-closeButton" onClick={onClose}>
            <FontAwesomeIcon icon={faTimesCircle} size="lg" />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};
