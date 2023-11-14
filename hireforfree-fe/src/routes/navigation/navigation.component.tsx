import React, {useContext} from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

export default function Navigation() {
    const { currentUser,isEmailVerified } = useContext(UserContext)
    console.log(currentUser);
    return (
        <React.Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>HirigForFree</Link>
                <div className='nav-links-container'>
                {currentUser && isEmailVerified ? (
                        <span className='nav-link' onClick={signOutUser}>
                            {' '}
                            SIGN OUT{' '}
                        </span>
                    ) : (
                        <Link className='nav-link' to='/auth'>
                            SIGN IN
                        </Link>
                    )}
                </div>
            </div>
            <Outlet />
        </React.Fragment>
    )
}

