import React from "react"
import PropTypes from "prop-types"

const IconUpload = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M9.381 1.881a.875.875 0 011.238 0l4.166 4.167a.875.875 0 11-1.237 1.237l-2.673-2.673V12.5a.875.875 0 01-1.75 0V4.612L6.452 7.285a.875.875 0 01-1.237-1.237L9.38 1.881zM2.5 11.625c.483 0 .875.392.875.875v3.333a.792.792 0 00.792.792h11.666a.791.791 0 00.792-.792V12.5a.875.875 0 011.75 0v3.333a2.542 2.542 0 01-2.542 2.542H4.167a2.542 2.542 0 01-2.542-2.542V12.5c0-.483.392-.875.875-.875z"
      clipRule="evenodd"
    />
  </svg>
)

IconUpload.propTypes = {
  className: PropTypes.string,
};

IconUpload.defaultProps = {
  className: '',
};

export default IconUpload
