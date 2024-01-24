import React from 'react';
import './jobcard.styles.scss';
import LocationIcon from '../../assets/svg-icons/location-icon';

interface JobCardProps {
    companyName: string;
    position: string;
    companyImage?: string;
    description?: string;
    location: string;
    noOfOpenings?: number;
    postedDaysAgo: number;
}

const JobCard: React.FC<JobCardProps> = ({ companyName, position, companyImage, description, location, noOfOpenings, postedDaysAgo }) => {
    let fbImage = require('../../assets/images/fb2.png')
    return (
        <div className='job-card'>
            <div className='header'>
                <div className="company-logo">
                    <img src={fbImage} alt={`${companyName} Logo`} />
                </div>
                <div className="position-details">
                    <h3>{position}</h3>
                    <p>{companyName}</p>
                </div>
            </div>
            <div className='body'>
                <p className="description">{description}</p>
            </div>
            <div className='footer'>
                <div className="details">
                    <div className='item'>
                    <LocationIcon/>
                    <p>{location}</p>
                    </div>
                    <div className='item'>
                    <LocationIcon/>
                    <p>{`Openings: ${noOfOpenings}`}</p>
                    </div>
                     <div className='item'>
                    <LocationIcon/>
                    <p>{`Posted: ${postedDaysAgo} days ago`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard