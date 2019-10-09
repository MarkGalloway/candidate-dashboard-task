import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './Table.css';

const ApplicationsTableRow = ({ application }) => {
  return (
    <>
      <div className="ApplicantTable-cell">
        <div>{application.candidate.name}</div>
        <div>{application.candidate.email}</div>
      </div>
      <div className="ApplicantTable-cell">{application.status}</div>
      <div className="ApplicantTable-cell">
        {new Date(application.role.start_date).toLocaleDateString('en-US')}
      </div>
      <div className="ApplicantTable-cell">No Action</div>
      <div className="ApplicantTable-cell">
        {application.candidate.profile.address_city}
      </div>
      <div className="ApplicantTable-cell centered">
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </>
  );
};

export default ApplicationsTableRow;
