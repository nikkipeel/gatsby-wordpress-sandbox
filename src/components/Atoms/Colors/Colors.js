import React from "react"
import "./colors.css"

/**
 * Primary UI component for user interaction
 */
export const Colors = () => {
  return (
    <div className="colors-wrapper">
      <ul className="colors-group">
        <li className="colors--primary">
          <h4>Primary</h4>
          <p>#0C2F6F</p>
        </li>
        <li className="colors--secondary">
          <h4>Secondary</h4>
          <p>#091F49</p>
        </li>
        <li className="colors--highlight">
          <h4>Highlight</h4>
          <p>#07152F</p>
        </li>
        <li className="colors--accent">
          <h4>Accent</h4>
          <p>#07152F</p>
        </li>
      </ul>
      <ul className="colors-group">
        <li className="colors--dark">
          <h4>Dark</h4>
          <p>#0C2F6F</p>
        </li>
        <li className="colors--light">
          <h4>Light</h4>
          <p>#091F49</p>
        </li>
      </ul>
    </div>
  )
}
