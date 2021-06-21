import React from 'react';
import PropTypes from "prop-types";

const DropzoneImage = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="160"
    height="107"
    fill="none"
    viewBox="0 0 160 107"
    className={className}
  >
    <path
      fill="#3900DD"
      d="M128.998 40.451C124.331 17.381 104.332 0 80 0 60.667 0 44 11.033 35.665 27.076 15.665 29.082 0 46.134 0 66.875 0 88.941 17.997 107 40 107h86.666C144.998 107 160 91.951 160 73.562a33.086 33.086 0 00-8.926-22.75 32.885 32.885 0 00-22.076-10.36zm-38.335 19.72v25.413H69.33V60.17H46.663L79.997 26.75l33.333 33.438-22.667-.017z"
    />
    <path
      fill="url(#dropzone-image-paint0_linear)"
      d="M128.998 40.451C124.331 17.381 104.332 0 80 0 60.667 0 44 11.033 35.665 27.076 15.665 29.082 0 46.134 0 66.875 0 88.941 17.997 107 40 107h86.666C144.998 107 160 91.951 160 73.562a33.086 33.086 0 00-8.926-22.75 32.885 32.885 0 00-22.076-10.36zm-38.335 19.72v25.413H69.33V60.17H46.663L79.997 26.75l33.333 33.438-22.667-.017z"
    />
    <defs>
      <linearGradient
        id="dropzone-image-paint0_linear"
        x1="160"
        x2="-16.01"
        y1="0"
        y2="46.843"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#43E2E0"/>
        <stop offset="1" stopColor="#43E2E0" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);

export default DropzoneImage;

DropzoneImage.propTypes = {
  className: PropTypes.string,
};

DropzoneImage.defaultProps = {
  className: '',
};
