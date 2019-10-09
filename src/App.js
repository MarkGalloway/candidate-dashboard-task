import React, { useState } from 'react';
import './App.css';

import { ApplicationsTable } from './components/ApplicationsTable';
import data from './data';

/**
 * Candidates can have multiple nested applications.
 * Flatten the applications into top-level structures with the candidate as a child.
 */
function parseApplications(candidates) {
  return candidates.flatMap(candidate =>
    candidate.applications.flatMap(application => ({
      ...application,
      candidate,
    })),
  );
}

function App() {
  const [applications] = useState(parseApplications(data));

  return (
    <div className="App">
      <ApplicationsTable applications={applications} />
    </div>
  );
}

export default App;
