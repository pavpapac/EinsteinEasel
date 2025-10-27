
import React from 'react';

interface IconProps {
  className?: string;
}

export const IconSparkles: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.93 12.55a1 1 0 0 0-1.41 1.41l1.41-1.41zM12 6l-.53-.53a.75.75 0 0 0-1.06 1.06L12 6zm2.07 6.55a1 1 0 0 0-1.41-1.41l1.41 1.41zM6 12l.53.53a.75.75 0 0 0 1.06-1.06L6 12zm2.07-5.45a1 1 0 0 0-1.41 1.41l1.41-1.41zM18 12l.53.53a.75.75 0 0 0 1.06-1.06L18 12zm-5.93 5.45a1 1 0 0 0 1.41-1.41l-1.41 1.41zM12 18l-.53.53a.75.75 0 0 0 1.06-1.06L12 18z" />
    <path d="M9.93 12.55L6 12l2.07-5.45m5.93 0L18 12l-2.07 5.45M9.93 12.55L12 18l2.07-5.45" />
    <path d="M12 6V3m6 7h3M6 10H3m18 4h-3m-6 9v-3" />
  </svg>
);

export const IconLink: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

export const IconLightbulb: React.FC<IconProps> = (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5C17.7 10.2 18 9.2 18 8A6 6 0 0 0 6 8c0 1.2.3 2.2 1.5 3.5.7.8 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
);
