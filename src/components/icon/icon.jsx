import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './icon.module.scss';
import {
  IconInstagram,
  IconFacebook,
  IconVkontakte,
  IconTwitter,
  IconTiktok,
  IconWiki,
  IconKinopoisk,
  IconFlagUk,
  IconUpload,
  IconQuest,
  IconClose,
  IconVipPerson,
  IconPeoples,
  IconHamburger
} from './icons/index';

const icons = {
  upload: IconUpload,
  quest: IconQuest,
  close: IconClose,
  hamburger: IconHamburger,
};

const socialIcons = {
  instagram: IconInstagram,
  facebook: IconFacebook,
  vkontakte: IconVkontakte,
  twitter: IconTwitter,
  tiktok: IconTiktok,
  wiki: IconWiki,
  kinopoisk: IconKinopoisk,
  vipperson: IconVipPerson,
  peoples: IconPeoples,
};

const flagIcons = {
  uk: IconFlagUk,
};

export const variants = {
  DEFAULT: 'default',
  FLAG: 'flag',
  SOCIAL: 'social',
}

const Icon = ({ name, variant, className, ...props }) => {
  const nameClassName = !!name && `--${name}`;

  let   IconSVG;
  switch (variant) {
    case variants.SOCIAL:
      IconSVG = socialIcons[name];
      break;
    case variants.FLAG:
      IconSVG = flagIcons[name];
      break;
    default:
      IconSVG = icons[name];
  }

  const iconClasses = classNames(styles.icon, nameClassName, className)

  return (
    <>
      {IconSVG && <IconSVG className={iconClasses} {...props} />}
    </>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  variant: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
  variant: variants.DEFAULT,
};

export default Icon;
