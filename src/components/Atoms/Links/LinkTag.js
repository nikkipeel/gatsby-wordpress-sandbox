import React from "react"
import PropTypes from "prop-types"
import "./links.css"

export const LinkTag = ({ link, label, ...props }) => {
  return (
    <a href={link} className="link link--tag" {...props}>
      {label}
    </a>
  )
}

LinkTag.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}
