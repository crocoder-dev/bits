import React from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';

const Column = ({ children, margin }) => {
  let style = {};
  if (margin) {
    style.margin = `${margin}px`;
  }
  return (
    <div className={styles.column} style={style}>
      {children}
    </div>
  );
};

Column.propTypes = {
  children: PropTypes.node,
  margin: PropTypes.string,
};

export default Column;
