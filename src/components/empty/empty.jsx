import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import EmptyImage from './empty-image';
import styles from './empty.module.scss';

const Empty = ({ className, text }) => {
  const componentClasses = classNames(styles.container, className);

  return (
    <div className={componentClasses}>
      <EmptyImage className={styles.image} />
      {
        text && (
          <div className={styles.text}>{ text }</div>
        )
      }
    </div>
  );

};

export default Empty;

Empty.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

Empty.defaultProps = {
  text: '',
  className: '',
};
