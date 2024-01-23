import React from 'react';
import LeftAuth from '../../components/authentication-releated/left-auth/left-auth.component';
import SignInForm from '../../components/authentication-releated/sign-in-form/sign-in-form.component';
import './signin-page.styles.scss';

const SignInPage:React.FC = () => {
    return(
        <div className='sign-in-page'>
            <LeftAuth/>
            <SignInForm/>
        </div>
    )
}

export default SignInPage
