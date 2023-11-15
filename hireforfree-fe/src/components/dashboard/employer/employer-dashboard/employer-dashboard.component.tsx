// EmployerDashboard.tsx
import React, { useContext, useState } from 'react';
import EmployerProfileTab from '../employer-profile/employer-profile-tab.component';
import EmployerPostedJobsTab from '../employer-postedjobs/employer-postedjobs-tab.component';
import './employer-dashboard.styles.scss';


enum Tab {
  Profile = 'profile',
  JobsPosted = 'jobsPosted',
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
            className={activeTab === Tab.JobsPosted ? 'active' : ''}
            onClick={() => handleTabChange(Tab.JobsPosted)}
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
            className={activeTab === Tab.JobsPosted ? 'active' : ''}
            onClick={() => handleTabChange(Tab.JobsPosted)}
          >
            Applied Jobs
          </button>
        </div>

        <div className="tab-content-container">
          {activeTab === Tab.Profile && <EmployerProfileTab />}
          {activeTab === Tab.JobsPosted && <EmployerPostedJobsTab />}
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
