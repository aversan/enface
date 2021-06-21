import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import { Desktop } from 'components/mq'
import Icon from 'components/icon/icon';
import styles from './top-panel.module.scss';

const TopPanel = ({ className, ...props }) => {
  const containerClasses = classNames(styles.container, className)

  return (
    <Desktop>
      <div className={containerClasses} {...props}>
        <div className={styles.wrapper}>
          <div className={styles.navigation}>
            <button
              type="button"
              className={styles['navigation-link']}
            >
              <Icon name="uk" variant="flag" className={styles.icon} />
              En
            </button>
            <Link
              to="/login"
              className={styles['navigation-link']}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </Desktop>
  );
};

TopPanel.propTypes = {
  className: PropTypes.string,
};

TopPanel.defaultProps = {
  className: '',
};

export default TopPanel;
