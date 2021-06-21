import React from "react"
import PropTypes from "prop-types"

const IconHamburger = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={15}
    fill="none"
    viewBox="0 0 19 15"
    className={className}
  >
    <rect width="19" height="1.5" fill="#fff" rx="0.75" />
    <rect width="19" height="1.5" y="6.5" fill="#fff" rx="0.75" />
    <rect width="19" height="1.5" y="13" fill="#fff" rx="0.75" />
  </svg>
)

IconHamburger.propTypes = {
  className: PropTypes.string,
};

IconHamburger.defaultProps = {
  className: '',
};

export default IconHamburger
