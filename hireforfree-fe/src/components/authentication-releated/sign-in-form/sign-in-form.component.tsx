import React from 'react';
import './sign-in-form.styles.scss';
import Input from '../../input/input.component';
import { AiOutlineEye } from 'react-icons/ai';
import Button from '../../button/button.component';
import Line from '../../line/line.component';
import EmailIcon from '../../../assets/svg-icons/email-icon';
import LockIcon from '../../../assets/svg-icons/lock-icon';

const SignInForm: React.FC = () => {
  const FacebookIcon = require('../../../assets/images/fb2.png');
  const GoogleIcon = require('../../../assets/images/GCC.png');
  return (
    <div className="sign-in-form">
      <div className="content">
        <h1 className='header'>Signin</h1>
        <Input labelText='Email' leadingIcon={<EmailIcon />} type='email' name='email' />
        <Input labelText='Password' leadingIcon={<LockIcon />} trailingIcon={<AiOutlineEye />} type="password" name='password' />
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