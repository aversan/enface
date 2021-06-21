import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from 'components/icon/icon';
import styles from  './button.module.scss';

const Button = ({ className, text, iconName, iconClassName, iconVariant, size, onlyIcon, color, full, ...props }) => {
  const hasIcon = !!iconName;
  const hasText = !!text;
  const validOnlyIcon = hasIcon && (onlyIcon || !hasText);
  const validWithIcon = hasIcon && hasText && !onlyIcon;

  const buttonClasses = classNames(styles.button, {
    'with-icon': validWithIcon,
    [styles['button-primary']]: color === 'primary',
    [styles['button-outline-secondary']]: color === 'outline-secondary',
    [styles['button-only-icon']]: validOnlyIcon,
    [styles['button-md']]: size === 'md',
    [styles['button-full']]: full,
  }, className)

  const iconWrapperClasses = classNames(styles['icon-wrapper'])

  const iconClasses = classNames('icon', iconClassName)

  const textClasses = classNames(styles.text, 'text-truncate', {
    'sr-only': validOnlyIcon,
  })

  return (
    <button type="button" className={buttonClasses} {...props}>
      {hasIcon && (
        <span className={iconWrapperClasses}>
          <Icon className={iconClasses} name={iconName} variant={iconVariant} />
        </span>
      )}
      {hasText && (
        <span className={textClasses}>{text}</span>
      )}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  iconName: PropTypes.string,
  iconClassName: PropTypes.string,
  iconVariant: PropTypes.string,
  size: PropTypes.string,
  onlyIcon: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  full: PropTypes.bool,
};

Button.defaultProps = {
  text: '',
  iconName: '',
  iconClassName: '',
  iconVariant: 'default',
  size: 'md',
  onlyIcon: false,
  className: '',
  color: 'primary',
  full: false,
};

export default Button;
