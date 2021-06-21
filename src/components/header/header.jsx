import React, { useState } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { nanoid } from 'nanoid';
import Logo from 'components/logo/logo';
import Icon from 'components/icon/icon';
import Button from 'components/button/button';
import { Desktop, TabletOrMobile } from 'components/mq'
import styles from './header.module.scss';

const Header = ({ className, ...props }) => {
  const [open, setOpen] = useState(false);

  const containerClasses = classNames(styles.container, {
    [styles['is-open']]: open,
  }, className)

  const items = [
    {
      id: nanoid(),
      text: 'Platform',
      link: '',
    },
    {
      id: nanoid(),
      text: 'About',
      link: '',
    },
    {
      id: nanoid(),
      text: 'Contacts',
      link: '',
    }
  ]

  return (
    <header className={containerClasses} {...props}>
      <div className={styles.wrapper}>
        <Logo className={styles.logo} />
        <TabletOrMobile>
          <Link className={classNames(styles['lang-link'])}
            to="#"
          >
            <Icon name="uk" variant="flag" className={styles['lang-icon']} />
            En
          </Link>
          <Link className={classNames(styles['hamburger-link'])} onClick={() => setOpen(true)}>
            <Icon name="hamburger" className={styles.hamburger} />
          </Link>
          <Link className={classNames(styles['close-link'])} onClick={() => setOpen(false)}>
            <Icon name="close" className={styles.close} />
          </Link>
        </TabletOrMobile>
        <div className={styles['navigation-wrapper']}>
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
          <TabletOrMobile>
            <Button className={classNames(styles.button)} color="outline-secondary" text="Log In" />
          </TabletOrMobile>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default Header;
