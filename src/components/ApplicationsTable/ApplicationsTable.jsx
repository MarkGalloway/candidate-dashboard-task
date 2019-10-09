import React from 'react';

import ApplicationsTableHeader from './ApplicationsTableHeader';
import ApplicationsTableRow from './ApplicationsTableRow';
import './Table.css';

export const ApplicationsTable = ({ applications }) => (
  <div className="ApplicantTable">
    <ApplicationsTableHeader />
    {applications.map(application => (
      <ApplicationsTableRow application={application} />
    ))}
  </div>
);
