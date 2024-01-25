import React from 'react';
import './searchbar.styles.scss';
import Button from '../button/button.component';
import SearchIcon from '../../assets/svg-icons/search-icon';
const SearchBar: React.FC = () => {
    return(
        <div className='search-bar'>
            <input type="text" placeholder='Serach Job' className='job-input'/>
            <span className='divider'></span>
            <input type="location" placeholder='Location' className='location-input'/>
            <div className='search-button'>
            <Button shape='curved' buttonType='primary' style={{padding:'10px 0px 10px 0px'}}>
                <SearchIcon/>
            </Button>
            </div>
        </div>
    )
}

export default SearchBar