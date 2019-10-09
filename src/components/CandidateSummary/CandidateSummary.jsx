import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarHollow } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';

import './CandidateSummary.css';
import '../Applicant.css';

export const CandidateSummary = ({ candidate }) => {
  return (
    <div className="CandidateSummary">
      <div className="CandidateSummary-header">
        <div>{candidate.name}</div>
        <div className="text-right">{candidate.profile.address_city}</div>
        <div className="Applicant-email">{candidate.email}</div>
        <div className="CandidateSummary-phone">
          <span>Work:</span>
          <span>{candidate.profile.phone_work}</span>
        </div>
        <div>
          {[1, 2, 3, 4, 5].map(i =>
            i > candidate.profile.rating ? (
              <FontAwesomeIcon icon={faStarHollow} size="lg" />
            ) : (
              <FontAwesomeIcon icon={faStarSolid} size="lg" />
            ),
          )}
        </div>
        <div className="CandidateSummary-phone">
          <span>Cell:</span>
          <span>{candidate.profile.phone_cell}</span>
        </div>
      </div>
      <div className="CandidateSummary-list-heading">Experiences</div>
      {candidate.experiences.map(experience => {
        return (
          <>
            <div>{experience.title}</div>
            <div>{experience.organization.name}</div>
            <div>{experience.organization.location}</div>
            <div>
              <span>
                {new Date(experience.start_date).toLocaleDateString('en-US')}
              </span>
              {' - '}
              <span>
                {new Date(experience.end_date).toLocaleDateString('en-US')}
              </span>
            </div>
          </>
        );
      })}
      <div className="CandidateSummary-list-heading">Applications</div>
    </div>
  );
};
