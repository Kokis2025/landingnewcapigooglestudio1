
import React from 'react';

export const EnchantedForestIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    preserveAspectRatio="xMidYMid slice"
    {...props}
  >
    <g fill="#000" fillOpacity="0.15">
      {/* Tree 1 - More natural shape */}
      <path d="M45 155 v-10 h-20 l25 -50 l25 50 h-20 v10 z" />
      {/* Tree 2 - More natural shape, smaller */}
      <path d="M150 80 v-8 h-16 l20 -40 l20 40 h-16 v8 z" />
      
      {/* Footprints */}
      <path d="M80 85 a5 5 0 1 1 -10 0 a5 5 0 0 1 10 0 M72 75 a2 2 0 1 1 -4 0 a2 2 0 0 1 4 0 M78 75 a2 2 0 1 1 -4 0 a2 2 0 0 1 4 0" transform="rotate(15 75 80)" />
      <path d="M120 165 a5 5 0 1 1 -10 0 a5 5 0 0 1 10 0 M112 155 a2 2 0 1 1 -4 0 a2 2 0 0 1 4 0 M118 155 a2 2 0 1 1 -4 0 a2 2 0 0 1 4 0" transform="rotate(-25 115 160)" />
      <path d="M30 45 a5 5 0 1 1 -10 0 a5 5 0 0 1 10 0 M22 35 a2 2 0 1 1 -4 0 a2 2 0 0 1 4 0 M28 35 a2 2 0 1 1 -4 0 a2 2 0 0 1 4 0" transform="rotate(45 25 40)" />
    </g>
  </svg>
);
