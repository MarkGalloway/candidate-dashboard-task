import React from 'react';

import './Table.css';

const ApplicationsTableHeader = () => {
  return (
    <>
      <span className="ApplicantTable-Header-cell">APPLICANT</span>
      <span className="ApplicantTable-Header-cell">STATUS</span>
      <span className="ApplicantTable-Header-cell">APPLICATION DATE</span>
      <span className="ApplicantTable-Header-cell">LAST ACTION</span>
      <span className="ApplicantTable-Header-cell">LOCATION</span>
      <span className="ApplicantTable-Header-cell">GO TO PROFILE</span>
    </>
  );
};

export default ApplicationsTableHeader;
