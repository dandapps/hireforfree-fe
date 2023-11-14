import React, { useState, ChangeEvent, FormEvent } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';
import { Link } from 'react-router-dom';

interface FormFields {
  email: string;
  password: string;
}

const defaultFormFields: FormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      alert(`Login Sucessfull !!`)
    } catch (error : any) {
      if(error.code === `auth/invalid-login-credentials`){
        alert(`Login Failed: Username or Password Wrong`);
      }
      console.log('user sign in failed', error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button buttonType='google' type='button' onClick={signInWithGoogle}>
            Sign In With Google
          </Button>
        </div>
        <div className="buttons-container">
        <Button buttonType='google' type='button'>
          <Link to="/password-reset">Forgot Password?</Link>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;