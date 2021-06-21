import React from "react"
import PropTypes from "prop-types"

const IconClose = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M18 6L6 18M6 6l12 12"
    />
  </svg>
)

IconClose.propTypes = {
  className: PropTypes.string,
};

IconClose.defaultProps = {
  className: '',
};

export default IconClose
