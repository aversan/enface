import React from "react"
import PropTypes from "prop-types"

const IconFlagUk = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    className={className}
  >
    <g clipPath="url(#clip0)">
      <path
        fill="#41479B"
        d="M12.5 16h-9A3.5 3.5 0 010 12.5v-9A3.5 3.5 0 013.5 0h9A3.5 3.5 0 0116 3.5v9a3.5 3.5 0 01-3.5 3.5z"
      />
      <path
        fill="#F5F5F5"
        d="M16 12.5v-.769l-2.482-1.626H16v-.842H9.263V16h.842v-5.11l5.342 3.5c.19-.295.335-.62.43-.966M.235 13.764c.086.22.192.43.318.625l5.342-3.5V16h.842V9.263H0v.842h2.482L0 11.731v.769c0 .135.008.267.023.398M0 3.619v.65l2.482 1.626H0v.842h6.737V0h-.842v5.11L.553 1.61a3.48 3.48 0 00-.456 1.068M15.76 2.224a3.488 3.488 0 00-.313-.613l-5.342 3.5V0h-.842v6.737H16v-.842h-2.482L16 4.269V3.5c0-.14-.008-.277-.024-.412"
      />
      <path
        fill="#FF4B55"
        d="M9.263 0H6.737v6.737H0v2.526h6.737V16h2.526V9.263H16V6.737H9.263V0z"
      />
      <path
        fill="#FF4B55"
        d="M4.325 10.105L.023 12.898c.034.302.106.592.212.866l5.636-3.659H4.325zM10.764 10.105l5.113 3.318c.08-.294.123-.604.123-.923l-3.689-2.395h-1.546zM5.053 5.894L.097 2.678A3.507 3.507 0 000 3.5v.119l3.506 2.275h1.547zM11.652 5.895l4.324-2.807a3.476 3.476 0 00-.216-.864l-5.655 3.67h1.547z"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
)

IconFlagUk.propTypes = {
  className: PropTypes.string,
};

IconFlagUk.defaultProps = {
  className: '',
};

export default IconFlagUk
