import React from 'react';
import './sign-in-form.styles.scss';
import Input from '../../input/input.component';
import { AiOutlineMail, AiOutlineEye } from 'react-icons/ai';
import Button from '../../button/button.component';
import Line from '../../line/line.component'

const SignInForm: React.FC = () => {
  const FacebookIcon = require('../../../assets/fb2.png');
  const GoogleIcon = require('../../../assets/GCC.png');
  return (
    <div className="sign-in-form">
      <div className="content">
        <h1 className='header'>Signin</h1>
        <Input labelText='Email' leadingIcon={<AiOutlineMail />} type='email' name='email' />
        <Input labelText='Password' leadingIcon={<AiOutlineMail />} trailingIcon={<AiOutlineEye />} type="password" name='password' />
        <span className='link-text text-position'>Forgot Password?</span>
        <Line text='OR' />
        <div className="external-login">
          <img src={GoogleIcon} alt="Google" className="external-login-icon" />
          <img src={FacebookIcon} alt="Facebook" className="external-login-icon" />
        </div>
        <Button buttonType='primary' type='submit'>Sign In</Button>
        <p className='paragraph-text'>Don't have an account?&nbsp;<span className='link-text'>Register Now</span></p>
      </div>
    </div>
  )
}

export default SignInForm