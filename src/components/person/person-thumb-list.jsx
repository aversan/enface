import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './person-thumb-list.module.scss';

const PersonThumbList = ({ children, className }) => {
  const componentClasses = classNames(styles.container, className);

  return (
    <div className={componentClasses}>
      { children }
    </div>
  );
};

export default PersonThumbList;

PersonThumbList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
};

PersonThumbList.defaultProps = {
  className: '',
}
