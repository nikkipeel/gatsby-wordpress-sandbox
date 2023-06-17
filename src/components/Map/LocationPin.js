import React from "react"

const LocationPin = ({ text }) => (
  <div className="pin">
    <svg
      className="pin-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <path d="M192 512s192-208 192-320C384 86 298 0 192 0S0 86 0 192C0 304 192 512 192 512zm0-256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
    </svg>
    <p className="pin-text">{text}</p>
  </div>
)

export default LocationPin
