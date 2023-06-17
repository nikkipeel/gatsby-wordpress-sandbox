import React from "react"
import "./links.css"
/**
 * Primary UI component for user interaction
 */
export const LinkIcon = () => {
  return (
    <a href="#" className="link link--with-icon">
      This is a link with an icon
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20.414"
        height="16.828"
        viewBox="0 0 20.414 16.828"
      >
        <path
          id="arrow-right"
          d="M14,5l7,7m0,0-7,7m7-7H3"
          transform="translate(-2 -3.586)"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>
    </a>
  )
}
