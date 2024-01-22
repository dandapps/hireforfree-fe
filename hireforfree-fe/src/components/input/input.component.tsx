import React, { InputHTMLAttributes, useState } from 'react';
import './input.styles.scss';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMail } from 'react-icons/ai';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    labelText?: string;
    leadingIcon?: React.ReactElement;
    trailingIcon?: React.ReactElement;
}

const Input: React.FC<InputProps> = ({ labelText, leadingIcon, trailingIcon, ...otherPorps }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const isPasswordType = otherPorps.type === 'password'
    function togglePasswordVisibilty() {
        setIsPasswordVisible((prev) => !prev)
    }
    return (
        <div className="input-container">
            <div className="input-wrapper">
                <input className="input-field" {...otherPorps} 
                type= {isPasswordType ? (isPasswordVisible ? 'text' : 'password'): otherPorps.type}/>
                {leadingIcon && <div className='leading-icon'>{leadingIcon}</div>}
                <label className="placeholder">{labelText}</label>
                {trailingIcon && <div className='trailing-icon' onClick={togglePasswordVisibilty}>
                {isPasswordVisible ? <AiOutlineEye />  : <AiOutlineEyeInvisible />}
            </div>}
            </div>
        </div>
    )
}
export default Input
