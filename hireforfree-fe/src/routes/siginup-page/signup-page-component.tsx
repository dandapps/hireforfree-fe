import React from 'react';
import LeftAuth from '../../components/authentication-releated/left-auth/left-auth.component';
import SignUpForm from '../../components/authentication-releated/sign-up-form/sign-up-form.component';
import './signup-page.styles.scss';

const SignUpPage:React.FC = () => {
    return(
        <div className='sign-in-page'>
            <LeftAuth/>
            <SignUpForm/>
        </div>
    )
}

export default SignUpPage
