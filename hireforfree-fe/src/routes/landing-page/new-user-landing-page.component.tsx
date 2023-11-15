import React, { useState } from 'react';
import CardComponent from '../../components/card/user-type-card.component';
import JobSeekerDashboard from '../../components/dashboard/jobseeker/jobseeker-dashboard/jobseeker-dashboard.component';
import EmployerDashboard from '../../components/dashboard/employer/employer-dashboard/employer-dashboard.component'
import './new-user-landing-page.styles.scss';

const NewUserLandingPage: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const handleCardClick = (userType: string) => {
    setSelectedUser(userType);
  };

  return (
    <div className="">
      {!selectedUser && (
        <div className="card-container">
          <CardComponent title="Job Seeker" onClick={() => handleCardClick('Job Seeker')} />
          <CardComponent title="Employer" onClick={() => handleCardClick('Employer')} />
        </div>
      )}
      {selectedUser === `Job Seeker` && <JobSeekerDashboard/>}
      {selectedUser === `Employer` && <EmployerDashboard/>}
    </div>
  );
};

export default NewUserLandingPage;
