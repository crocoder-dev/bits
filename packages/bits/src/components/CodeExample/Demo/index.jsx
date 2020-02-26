import React from 'react';
import styles from './index.module.scss';
import DemoIcon from '../../../images/icons/demo.svg';
import PropTypes from 'prop-types';

const Demo = ({ children }) => (
  <div className={styles.demo}>
    <DemoIcon className={styles.icon} />
    <div className={styles.content}>{children}</div>
  </div>
);

Demo.propTypes = {
  children: PropTypes.node,
};

export default Demo;
