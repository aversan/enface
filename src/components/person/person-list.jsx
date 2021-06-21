import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './person-list.module.scss';

const PersonList = ({ children, className }) => {
  const componentClasses = classNames(styles.container, className);

  return (
    <div className={componentClasses}>
      { children }
    </div>
  );
};

export default PersonList;

PersonList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
};

PersonList.defaultProps = {
  className: '',
}
