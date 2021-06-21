import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './person-image.module.scss';

const PersonImage = ({ src, className, loading }) => {
  const componentClasses = classNames(styles.image, className)

  return (
    <div className={styles['image-container']}>
      <img className={componentClasses} src={src} alt="" loading={loading} />
    </div>
  );
};

PersonImage.propTypes = {
  src: PropTypes.string,
  loading: PropTypes.string,
  className: PropTypes.string,
};

PersonImage.defaultProps = {
  src: '',
  loading: 'lazy',
  className: '',
};

export default PersonImage;
