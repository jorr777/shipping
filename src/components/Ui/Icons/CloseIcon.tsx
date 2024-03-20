import React from "react";

const CloseIcon = ({ onClick }: any) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="NavMenuIcon"
      onClick={onClick}
    >
      <path
        d="M19 31.7279L31.7279 19"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M31.728 31.7279L19.0001 19"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
