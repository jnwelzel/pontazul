import React from 'react';
import cx from 'classnames';

import './Button.css';

const Button = ({ children, className }) => (
  <button className={cx('Button', className)}>{children}</button>
);

export default Button;
