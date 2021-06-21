import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { nanoid } from 'nanoid';
import Logo from 'components/logo/logo';
import AppStore from './app-store';
import styles from './footer.module.scss';
import { Desktop, TabletOrMobile } from '../mq';

const Footer = ({ className, ...props }) => {
  const containerClasses = classNames(styles.container, className)

  const items = [
    {
      id: nanoid(),
      text: 'Terms of service',
      link: '',
    },
    {
      id: nanoid(),
      text: 'Privacy Policy',
      link: '',
    }
  ]

  const itemsMobile = [
    {
      id: nanoid(),
      text: 'About',
      link: '',
    },
    {
      id: nanoid(),
      text: 'Platform',
      link: '',
    },
    {
      id: nanoid(),
      text: 'Contacts',
      link: '',
    }
  ]

  return (
    <footer className={containerClasses} {...props}>
      <div className={styles.wrapper}>
        <Logo className={styles.logo} />
        <Desktop>
          <nav className={styles.navigation}>
            {
              items.map(({ id, text, link }) => (
                <a
                  key={id}
                  href={link}
                  className={styles['navigation-link']}
                >
                  {text}
                </a>
              ))
            }
          </nav>
        </Desktop>
        <TabletOrMobile>
          <nav className={styles.navigation}>
            {
              itemsMobile.map(({ id, text, link }) => (
                <a
                  key={id}
                  href={link}
                  className={styles['navigation-link']}
                >
                  {text}
                </a>
              ))
            }
          </nav>
        </TabletOrMobile>
        <AppStore className={styles['app-store']} />
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;
