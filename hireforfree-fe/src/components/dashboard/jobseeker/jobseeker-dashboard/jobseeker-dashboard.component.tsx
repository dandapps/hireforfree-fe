// EmployerDashboard.tsx
import React, { useContext, useState } from 'react';
import JobSeekerProfileTab from '../jobseeker-profile/jobseeker-profile-tab.component';
import JobSeekerAppliedJobsTab from '../jobseeker-appliedjobs/jobseeker-appliedjobs-tab.component';
import './jobseeker-dashboard.styles.scss'

enum Tab {
  Profile = 'profile',
  AppliedJobs = 'appliedJobs',
}

const EmployerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Profile);

  
  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="profile-section">
          <h3>Employer Dashboard</h3>
          {/* Add profile options here */}
        </div>
        <div className="tab-options">
          <button
            className={activeTab === Tab.Profile ? 'active' : ''}
            onClick={() => handleTabChange(Tab.Profile)}
          >
            Profile
          </button>
          <button
            className={activeTab === Tab.AppliedJobs ? 'active' : ''}
            onClick={() => handleTabChange(Tab.AppliedJobs)}
          >
            Applied Jobs
          </button>
          {/* Add additional tab options here */}
        </div>
      </div>

      {/* Content */}
      <div className="content-container">
        <div className="tabs">
          <button
            className={activeTab === Tab.Profile ? 'active' : ''}
            onClick={() => handleTabChange(Tab.Profile)}
          >
            Profile
          </button>
          <button
            className={activeTab === Tab.AppliedJobs ? 'active' : ''}
            onClick={() => handleTabChange(Tab.AppliedJobs)}
          >
            Applied Jobs
          </button>
        </div>

        <div className="tab-content-container">
          {activeTab === Tab.Profile && <JobSeekerProfileTab />}
          {activeTab === Tab.AppliedJobs && <JobSeekerAppliedJobsTab />}
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
