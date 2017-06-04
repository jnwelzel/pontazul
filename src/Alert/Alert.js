import React from 'react';
import cx from 'classnames';

import './Alert.css';

const getContent = contentArray => (
  contentArray.map((message, index) => (
    <li key={index}>{message}</li>
  ))
)

const Alert = (props) => (
  <div {...props} className={cx("Alert-wrapper", props.className)}>
    <div className="Alert-title">{props.alertTitle}</div>
    <div>
      <ul className="Alert-list">
        {getContent(props.contentArray)}
      </ul>
    </div>
  </div>
);

export default Alert;
