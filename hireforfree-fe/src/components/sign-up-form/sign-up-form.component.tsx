import React, { FormEvent, ChangeEvent, useState, useEffect } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom';
import VerificationPage from '../verification/verification.component';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  sendEmailVerification,
  auth
} from '../../utils/firebase/firebase.utils';

import './sign-up-form.styles.scss';

interface SignUpFormState {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const defaultFormFields: SignUpFormState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm: React.FC = () => {
  const [formFields, setFormFields] = useState<SignUpFormState>(
    defaultFormFields
  );
  const [isVerifying, setIsVerifying] = useState(false);
  const { displayName, email, password, confirmPassword } = formFields;

  const navigate = useNavigate();

  useEffect(() => {
    const checkEmailVerification = async () => {
      const user = auth.currentUser;
      if (user && !user.emailVerified) {
        setIsVerifying(true);
      }
    };

    checkEmailVerification();
  }, []);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const result = await createAuthUserWithEmailAndPassword(email, password);
      if (result) {
        const { user } = result;
        await sendEmailVerification(user);
        setIsVerifying(true);
        await createUserDocumentFromAuth(user, { displayName });
        resetFormFields();
      } else {
        // Handle the case where result is undefined
        console.error('Authentication result is undefined');
      }
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('User creation encountered an error', error);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
   <div>
    {
      isVerifying ? (<VerificationPage/>) : (
        <div className='sign-up-container'>
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label='Display Name'
            type='text'
            required
            onChange={handleChange}
            name='displayName'
            value={displayName}
          />
  
          <FormInput
            label='Email'
            type='email'
            required
            onChange={handleChange}
            name='email'
            value={email}
          />
  
          <FormInput
            label='Password'
            type='password'
            required
            onChange={handleChange}
            name='password'
            value={password}
          />
  
          <FormInput
            label='Confirm Password'
            type='password'
            required
            onChange={handleChange}
            name='confirmPassword'
            value={confirmPassword}
          />
          <Button type='submit'>Sign Up</Button>
        </form>
      </div>
      ) 
    }
   </div>
  );
};

export default SignUpForm;
