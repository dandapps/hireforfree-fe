import React from 'react';
import JobCard from '../../components/jobcard/jobcard.component';
import './home.styles.scss';
import SearchBar from '../../components/searchbar/searchbar.component';

const Home: React.FC = () => {
  const jobData = {
    companyName: 'FaceBook',
    position: 'Software Engineer',
    companyImage: '../../assets/images/fb2.png',
    description: 'This is a sample job description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    location: 'India',
    noOfOpenings: 3,
    postedDaysAgo: 5,
  };
  const jobData1 = {
    companyName: 'FaceBook',
    position: 'Software Engineer',
    companyImage: '../../assets/images/fb2.png',
    description: 'This is a sample job description. Lorem ipsum dolor sit amet, consectetur This is a sample job description. Lorem ipsum dolor sit amet, consectetur adipiscing elitThis is a sample job description. Lorem ipsum dolor sit amet, consectetur adipiscing elitThis is a sample job description. Lorem ipsum dolor sit amet, consectetur adipiscing elit elit.',
    location: 'India',
    noOfOpenings: 3,
    postedDaysAgo: 5,
  };
  return (
    <div>
      <div className='search-area'>
      <div className='tag-line'>
          <p>Collaborate, Elevate, Experience</p>
        </div>
        <div className='tag-line-description'>
          <p>Your Path to Valuable Experience</p>
          </div>
        <div className='search-component'>
          <SearchBar />
        </div>
      </div>
      <div className='job-postings'>
        <div className='job-container'><JobCard {...jobData} /></div>
        <div className='job-container'><JobCard {...jobData} /></div>
        <div className='job-container'><JobCard {...jobData} /></div>
        <div className='job-container'><JobCard {...jobData} /></div>
        <div className='job-container'><JobCard {...jobData} /></div>
        <div className='job-container'><JobCard {...jobData} /></div>
        <div className='job-container'><JobCard {...jobData} /></div>
        <div className='job-container'><JobCard {...jobData} /></div>
        <div className='job-container'><JobCard {...jobData} /></div>
      </div>
    </div>
  );
};

export default Home;
