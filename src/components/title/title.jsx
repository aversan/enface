import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './title.module.scss';

const Title = ({ text, className }) => {
  const componentClasses = classNames(styles.title, className)

  return (
    <h1 className={componentClasses}>{text}</h1>
  );
};

Title.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired
};

Title.defaultProps = {
  className: ''
}

export default Title;
