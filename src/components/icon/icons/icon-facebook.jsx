import React from "react"
import PropTypes from "prop-types"

const IconFacebook = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="#1B80E4"
      d="M20.753.298H3.247A2.925 2.925 0 00.329 3.223v17.554a2.925 2.925 0 002.918 2.925h17.506a2.925 2.925 0 002.918-2.925V3.223A2.925 2.925 0 0020.753.298z"
    />
    <path
      fill="#FCFCFC"
      d="M20.024 12h-3.647V9.074c0-.807.653-.73 1.458-.73h1.46V4.685h-2.918A4.382 4.382 0 0012 9.074V12H9.083v3.657H12v8.046h4.377v-8.046h2.188L20.024 12z"
    />
  </svg>
)

IconFacebook.propTypes = {
  className: PropTypes.string,
};

IconFacebook.defaultProps = {
  className: '',
};

export default IconFacebook
