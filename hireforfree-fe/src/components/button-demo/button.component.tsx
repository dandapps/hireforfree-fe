import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import "./button.styles.scss";

export const BUTTON_TYPE_CLASSES: Record<string, string> = {
  google: "google-sign-in",
  inverted: "inverted",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: string;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, buttonType, ...otherProps }) => {
  let buttonClassName: string = buttonType === undefined ? `` : BUTTON_TYPE_CLASSES[buttonType];
  return (
    <button
      className={`button-container ${buttonClassName}}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
