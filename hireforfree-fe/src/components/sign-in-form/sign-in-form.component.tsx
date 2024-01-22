import React, { useState, ChangeEvent, FormEvent } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import Input from '../input/input.component'
import { useNavigate } from 'react-router-dom';
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';
import { Link } from 'react-router-dom';
import { AiOutlineMail, AiOutlineEye } from 'react-icons/ai'; 

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
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    navigate('/home');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      alert(`Login Sucessfull !!`)
      navigate('/home');
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
      <span style={{marginBottom:'15px'}}>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Input labelText='Email' leadingIcon={<AiOutlineMail/>} type='email' onChange={handleChange} name='email' value={email}/>
        <Input labelText='Password' leadingIcon={<AiOutlineMail/>} trailingIcon={<AiOutlineEye/>} type="password" onChange={handleChange} name='password' value={password}/>
        {/* <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        /> */}
        <div className='buttons-container'>
          <Button buttonType='primary' type='submit'>Sign In</Button>
          <Button buttonType='inverted-primary' type='button' onClick={signInWithGoogle}>
            Sign In With Google
          </Button>
        </div>
        <div className="buttons-container">
        <Button buttonType='primary' type='button'>
          <Link to="/password-reset">Forgot Password</Link>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;