// App.tsx
import React from 'react';
import JobCard from '../../components/jobcard/jobcard.component';
import './home.styles.scss';


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
    <div className='job-postings'>
      <JobCard {...jobData} />
      <JobCard {...jobData} />
      <JobCard {...jobData} />
      <JobCard {...jobData} />
      <JobCard {...jobData} />
      <JobCard {...jobData} />
      <JobCard {...jobData} />
      <JobCard {...jobData} />
      <JobCard {...jobData} />
    </div>
  );
};

export default Home;
