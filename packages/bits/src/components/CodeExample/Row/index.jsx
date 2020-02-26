import React from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';

const Row = ({ children, margin }) => {
  let style = {};
  if (margin) {
    style.margin = `-${margin}px`;
  }
  return (
    <div className={styles.row} style={style}>
      {children}
    </div>
  );
};

Row.propTypes = {
  children: PropTypes.node,
  margin: PropTypes.string,
};

export default Row;
