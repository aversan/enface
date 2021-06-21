import React from "react"
import PropTypes from "prop-types"

const IconVkontakte = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    className={className}
  >
    <path
      fill="#4489C8"
      d="M13.2 0H2.8A2.8 2.8 0 000 2.8v10.4A2.8 2.8 0 002.8 16h10.4a2.8 2.8 0 002.8-2.8V2.8A2.8 2.8 0 0013.2 0z"
    />
    <path
      fill="#fff"
      d="M2.405 4.942h1.92a.198.198 0 01.185.128c.212.547 1.095 2.69 1.902 2.865.6 0 .388-2.85-.375-2.85-.2 0 .355-.355.393-.37a4.095 4.095 0 012.165 0c.382.16.447.607.457.987.01.38-.425 2 .148 2.176.75.23 1.715-2.123 1.94-2.7a.197.197 0 01.185-.125h2.138a.2.2 0 01.185.277 18.688 18.688 0 01-1.578 2.88.398.398 0 00.04.5c.64.685 2.39 2.625 1.39 2.625h-2.158a.392.392 0 01-.295-.133c-.335-.37-1.31-1.4-1.75-1.317-.365.068-.4.688-.382 1.092a.4.4 0 01-.37.42c-.383.023-.905.033-.953.03-1.525-.097-2.427-1.114-3.29-2.25a14.083 14.083 0 01-2.087-3.97.202.202 0 01.19-.264z"
    />
  </svg>
)

IconVkontakte.propTypes = {
  className: PropTypes.string,
};

IconVkontakte.defaultProps = {
  className: '',
};

export default IconVkontakte
