import React from "react"
import PropTypes from "prop-types"

const IconTwitter = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    className={className}
  >
    <path
      fill="#1DA1F2"
      d="M14 16H2a2 2 0 01-2-2V2a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2z"
    />
    <path
      fill="#fff"
      d="M6.144 12.066c3.772 0 5.836-3.129 5.836-5.837 0-.088 0-.176-.004-.264.4-.287.748-.651 1.024-1.063a4.157 4.157 0 01-1.18.324c.424-.253.748-.657.904-1.136a4.08 4.08 0 01-1.304.495 2.054 2.054 0 00-3.496 1.872 5.825 5.825 0 01-4.228-2.144 2.057 2.057 0 00.636 2.74 2.075 2.075 0 01-.928-.256v.029c0 .992.708 1.824 1.644 2.012a2 2 0 01-.54.072c-.132 0-.26-.012-.384-.037a2.051 2.051 0 001.916 1.425 4.114 4.114 0 01-3.036.851 5.834 5.834 0 003.14.917z"
    />
  </svg>
)

IconTwitter.propTypes = {
  className: PropTypes.string,
};

IconTwitter.defaultProps = {
  className: '',
};

export default IconTwitter
