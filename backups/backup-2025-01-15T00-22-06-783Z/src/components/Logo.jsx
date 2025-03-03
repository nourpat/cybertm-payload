import React from 'react';

export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center group ${className}`}>
      <svg
        className="w-8 h-8 text-blue-600 transition-colors duration-200 group-hover:text-green-600"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 8V16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 12H16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="ml-2 text-xl font-bold text-gray-900">
        Cyber<span className="text-blue-600 transition-colors duration-200 group-hover:text-green-600">Telemarketing</span>
      </span>
    </div>
  );
}