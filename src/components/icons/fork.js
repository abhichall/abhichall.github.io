import React from 'react';

const IconA = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-A">
    <title>Git Fork</title>
    {/* Vertical part of A */}
    <line x1="12" y1="20" x2="12" y2="4"></line>
    {/* Left diagonal part of A */}
    <line x1="4" y1="20" x2="12" y2="4"></line>
    {/* Right diagonal part of A */}
    <line x1="12" y1="4" x2="20" y2="20"></line>
    {/* Horizontal bar of A */}
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
);

export default IconA;
