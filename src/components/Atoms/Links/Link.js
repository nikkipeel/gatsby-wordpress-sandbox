import React from "react"
import PropTypes from "prop-types"
import "./links.css"
/**
 * Primary UI component for user interaction
 */
export const Link = ({ label, link, classes, ...props }) => {
  return (
    <a href={link} className={classes} {...props}>
      {label}
      {classes.includes("link--with-icon") && (
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
      )}
    </a>
  )
}

Link.propTypes = {
  link: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}
