import React, { useState } from 'react';

import ApplicationsTableHeader from './ApplicationsTableHeader';
import ApplicationsTableRow from './ApplicationsTableRow';
import { CandidateSummary } from '../CandidateSummary';
import { Modal } from '../Modal';
import './Table.css';

export const ApplicationsTable = ({ applications }) => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onRowClick = candidate => {
    setSelectedCandidate(candidate);
    setIsModalOpen(true);
  };

  const onModalClose = () => {
    setSelectedCandidate(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <CandidateSummary candidate={selectedCandidate} />
      </Modal>
      <div className="ApplicantTable">
        <ApplicationsTableHeader />
        {applications.map(application => (
          <ApplicationsTableRow
            application={application}
            onClick={() => onRowClick(application.candidate)}
          />
        ))}
      </div>
    </>
  );
};
