import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import './button.styles.scss'



interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    shape?: 'default' | 'curved';
    buttonType?: 'primary' | 'inverted-primary';
    children: ReactNode;
  }

const Button: React.FC<ButtonProps> = ({shape='default', buttonType='primary',children, ...otherProps}) => {
    const buttonClassName = `button ${buttonType} ${shape}`
    return(
        <button className={buttonClassName} {...otherProps}>
            {children}
        </button>
    )
}

export default Button;