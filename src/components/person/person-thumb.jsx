import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './person-thumb.module.scss';

const PersonThumb = ({ src, empty, className, loading }) => {
  const componentClasses = classNames(styles.thumb, {
    [styles['thumb-empty']]: empty,
  }, className)
  const thumb = <span className={styles['thumb-container']}><img className={componentClasses} src={src} alt="" loading={loading} /></span>
  const emptyThumb = <span className={styles['thumb-container']}><span className={componentClasses} /></span>

  return (!empty ? thumb : emptyThumb)
};

PersonThumb.propTypes = {
  src: PropTypes.string,
  loading: PropTypes.string,
  className: PropTypes.string,
  empty: PropTypes.bool,
};

PersonThumb.defaultProps = {
  src: '',
  loading: 'lazy',
  className: '',
  empty: false
};

export default PersonThumb;
