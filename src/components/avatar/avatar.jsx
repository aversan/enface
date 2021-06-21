import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './avatar.module.scss';

export const shapes = {
  CIRCLE: 'circle',
  SQUARE: 'square',
}

export const sizes = {
  MEDIUM: 'medium',
}

const Avatar = ({ src, shape, size, loading, className }) => {
  const componentClasses = classNames(styles.avatar, {
    [styles['avatar-circle']]: shape === shapes.CIRCLE,
    [styles['avatar-square']]: shape === shapes.SQUARE,
    [styles['avatar-medium']]: size === sizes.MEDIUM,
  }, className)

  return (
    <img className={componentClasses} src={src} alt="" loading={loading} />
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  shape: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  loading: PropTypes.string,
  className: PropTypes.string,
};

Avatar.defaultProps = {
  src: '',
  shape: shapes.CIRCLE,
  size: sizes.MEDIUM,
  loading: 'lazy',
  className: '',
};

export default Avatar;
