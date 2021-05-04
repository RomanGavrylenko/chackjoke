import classNames from 'classnames';
import React, { ButtonHTMLAttributes, FC } from 'react';
import './index.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classNames?: string; 
}

export const Button: FC<ButtonProps> = ({ children, type = 'button', ...attrs }) => (
  <button className={classNames('button', classNames)} type={type} {...attrs}>
    {children}
  </button>
)