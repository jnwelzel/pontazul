import React from 'react';
import cx from 'classnames';

import './Input.css'

const Input = (props) => (
  <input {...props} className={cx("Input", props.className)} />
);

export default Input;
