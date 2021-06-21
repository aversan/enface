import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TopPanel from 'components/top-panel/top-panel';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import styles from './layout.module.scss';

const Layout = ({ className, contentClassName, header, isHeader, children, ...props }) => {
  const layoutClasses = classNames(styles.container, 'select-none', className)
  const contentClasses = classNames(styles.content, contentClassName);
  const HeaderComponent = header;

  return (
    <div className={layoutClasses} {...props}>
      <main className={styles.main} role="main">
        <TopPanel />
        {isHeader && (header && <HeaderComponent /> || <Header />)}
        <div className={contentClasses}>
          <div className={styles.wrapper}>
            {children}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

Layout.propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  isHeader: PropTypes.bool
};

Layout.defaultProps = {
  header: null,
  className: '',
  contentClassName: '',
  isHeader: true
};

export default Layout;
