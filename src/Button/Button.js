import React from 'react';
import cx from 'classnames';

import './Button.css';

const Button = (props) => (
  <button {...props} className={cx('Button', props.className)}>{props.children}</button>
);

export default Button;
