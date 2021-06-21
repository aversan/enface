import React from "react"
import PropTypes from "prop-types"

const IconQuest = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    className={className}
  >
    <circle cx="12" cy="12" r="10" fill="#2c2c3b" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm11.258-3.976a2 2 0 00-2.225 1.308 1 1 0 11-1.886-.664 4 4 0 017.773 1.333c0 1.53-1.135 2.54-1.945 3.081a8.044 8.044 0 01-1.686.848l-.035.013-.011.004h-.004l-.002.001L11.92 13l.316.949a1 1 0 01-.634-1.897h.001l.016-.006.074-.027a6.06 6.06 0 001.172-.6c.69-.46 1.055-.95 1.055-1.419v-.001a2 2 0 00-1.662-1.975zm-.655 4.028zM11 17a1 1 0 011-1h.01a1 1 0 110 2H12a1 1 0 01-1-1z"
      clipRule="evenodd"
    />
  </svg>
)

IconQuest.propTypes = {
  className: PropTypes.string,
};

IconQuest.defaultProps = {
  className: '',
};

export default IconQuest
