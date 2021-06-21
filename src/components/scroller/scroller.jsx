import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Scrollbar,
  Mousewheel
} from 'swiper';
import 'swiper/swiper.scss';
import "swiper/components/scrollbar/scrollbar.scss"
import styles from './scroller.module.scss';

export const directions = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
}

SwiperCore.use([Scrollbar,Mousewheel]);

const Scroller = ({ direction, children, className }) => {
  const componentClasses = classNames(styles.container, {
    [styles.horizontal]: direction === directions.HORIZONTAL,
    [styles.vertical]: direction === directions.VERTICAL,
  }, className)

  // const wrapperClasses = classNames(styles.wrapper, wrapperClassName)

  return (
    <Swiper
      direction={direction}
      slidesPerView="auto"
      freeMode
      scrollbar={{
        draggable: true,
      }}
      mousewheel
      // wrapperClasses={wrapperClasses}
      className={componentClasses}
    >
      <SwiperSlide className={styles['swiper-slide']}>{ children }</SwiperSlide>
    </Swiper>
  );
};

Scroller.propTypes = {
  direction: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
  // wrapperClassName: PropTypes.string,
};

Scroller.defaultProps = {
  direction: directions.VERTICAL,
  className: '',
  // wrapperClassName: '',
};

export default Scroller;
