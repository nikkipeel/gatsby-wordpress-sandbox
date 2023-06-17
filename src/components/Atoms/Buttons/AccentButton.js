import React from "react"
import PropTypes from "prop-types"
import "./buttons.css"

/**
 * Primary UI component for user interaction
 *  link, id, classes, text,
 */
export const AccentButton = ({ id, link, classes, label, ...props }) => {
  return (
    <a href={link} className={classes} {...props}>
      {label}
    </a>
  )
}

AccentButton.propTypes = {
  link: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

AccentButton.defaultProps = {
  onClick: undefined,
}
