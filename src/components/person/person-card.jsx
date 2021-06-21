import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Avatar from 'components/avatar/avatar';
import Icon from 'components/icon/icon';
import styles from './person-card.module.scss';

const PersonCard = ({ className, avatar, quest, name, link, socials }) => {
  const componentClasses = classNames(styles.container, className);

  return (
    <div className={componentClasses}>
      <div className={styles['avatar-wrapper']}>
        { avatar && <Avatar src={avatar} /> }
        { quest && <Icon className={styles['avatar-quest']} name="quest" /> }
      </div>
      <div className={styles.content}>
        {
          name && (
            <div className={classNames(styles.name, 'claim-line-1')}>
              {name}
            </div>
          )
        }
        {
          socials && (
            <div className={styles.social}>
              {
                socials.map((social) => (
                  <Link to={social.link} id={social.id}>
                    <Icon className={styles['social-icon']} name={social.name} variant="social" />
                  </Link>
                ))
              }
            </div>
          )
        }
      </div>
    </div>
  )
};

export default PersonCard;

PersonCard.propTypes = {
  className: PropTypes.string,
  avatar: PropTypes.string,
  quest: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
};

PersonCard.defaultProps = {
  className: '',
  avatar: '',
  quest: '',
  name: '',
  link: '',
  socials: [],
};
