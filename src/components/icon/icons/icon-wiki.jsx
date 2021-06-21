import React from "react"
import PropTypes from "prop-types"

const IconWiki = ({ className }) => (
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
        fill="#fff"
        d="M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2z"
      />
      <path
        fill="#282828"
        d="M14.241 3.651h-2.584l-.185.032v.249c0 .029.088.053.113.071.023.02.086.03.112.03l.234.012c.266.013.347.07.45.168.102.1.118.271.04.511l-2.285 5.963-.087-.026L8.6 7.397c.02-.049.033-.076.033-.076L9.82 4.879c.138-.257.272-.487.34-.595.124-.195.184-.232.522-.25.07 0 .096-.033.096-.102v-.247l-.018-.026s-1.42-.005-2.066 0v.272c0 .03-.016.055.007.073.024.02.034.03.06.03l.097.012c.265.012.383.088.419.136.063.085.092.176-.06.543l-.915 2.003-.827-1.858c-.27-.593-.338-.777.071-.812l.11-.025c.078 0 .066-.031.066-.09v-.26l-.008-.021H5.509l-.009.026v.26c0 .059.058.074.165.09.382.055.375.099.754.923l.223.496.862 1.86.25.61-1.252 2.744-.071-.02S4.487 6.148 3.926 4.64A1.075 1.075 0 013.84 4.3c0-.153.125-.236.376-.247l.382-.014c.079 0 .207-.033.207-.1V3.69l-.116-.025s-2.38-.003-2.861 0l-.079.025v.26c0 .047.062.076.17.088.296.018.495.07.588.156.093.087.193.308.324.651.706 1.865 2.208 5.192 2.94 7.087.21.517.475.598.796-.016.33-.674.997-2.168 1.483-3.271.455 1.1 1.074 2.59 1.373 3.264.238.54.509.593.784.016.72-1.758 2.822-7.047 2.822-7.047.091-.26.218-.46.382-.605.162-.143.403-.224.742-.24.069 0 .096-.035.096-.102v-.248l-.009-.032z"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0H16V16H0z"/>
      </clipPath>
    </defs>
  </svg>
)

IconWiki.propTypes = {
  className: PropTypes.string,
};

IconWiki.defaultProps = {
  className: '',
};

export default IconWiki
