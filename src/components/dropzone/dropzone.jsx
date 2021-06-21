import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import DropzoneImage from './dropzone-image';
import styles from './dropzone.module.scss';

const Dropzone = ({ className }) => {
  const componentClasses = classNames(styles.container, className);

  return (
    <div className={componentClasses}>
      <div className={styles.area}>
        <div className={styles.text}>Find public people by photo</div>
        <DropzoneImage className={styles.image} />
        <div className={styles.title}>drag & drop</div>
        <div className={styles.subtitle}>your photos here</div>
      </div>
    </div>
  );

};

export default Dropzone;

Dropzone.propTypes = {
  className: PropTypes.string,
};

Dropzone.defaultProps = {
  className: '',
};
