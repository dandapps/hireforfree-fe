import React from 'react';
import './sign-up-form.styles.scss';
import Input from '../../input/input.component';
import { AiOutlineMail, AiOutlineEye } from 'react-icons/ai';
import Button from '../../button/button.component';
import ToggleSwitch from '../../toggle-switch/toggle-switch.component';

const SignUpForm: React.FC = () => {
  const handleToggle = (selectedOption: string) => {
    console.log(`Selected option: ${selectedOption}`);
    // You can perform additional actions based on the selected option
  };

  
  return (
    <div className="sign-in-form">
      <div className="content">
        <h1 className='header'>Register as</h1>
        <ToggleSwitch firstLabel='JOB SEEKER' secondLabel='EMPLOYER' onToggle={handleToggle}/>
        <Input labelText='Name' leadingIcon={<AiOutlineMail />} type='text' name='name' />
        <Input labelText='Email' leadingIcon={<AiOutlineMail />} type='email' name='email' />
        <Input labelText='Password' leadingIcon={<AiOutlineMail />} trailingIcon={<AiOutlineEye />} type="password" name='password' />
        <Input labelText='Confirm Password' leadingIcon={<AiOutlineMail />} trailingIcon={<AiOutlineEye />} type="password" name='confirmpassword' />
        <Button buttonType='primary' type='submit'>Create Account</Button>
        <p className='paragraph-text'>Already have an account?&nbsp;<span className='link-text'>Signin</span></p>
      </div>
    </div>
  )
}

export default SignUpForm