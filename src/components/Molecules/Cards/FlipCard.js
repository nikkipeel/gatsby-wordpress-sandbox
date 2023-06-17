import React from "react"
import PropTypes from "prop-types"
import GatsbyAstronaut from "../../../images/gatsby-astronaut.png"
import "./cards.css"

const FlipCard = ({
  classes,
  key,
  url,
  label,
  title,
  imageSrc,
  content,
  ...props
}) => {
  const bgImage = imageSrc ? imageSrc : GatsbyAstronaut
  return (
    <a className={classes} key={key} href={url} aria-label={label} {...props}>
      <div className="front" style={{ backgroundImage: `url(${bgImage})` }}>
        <h2>{title}</h2>
      </div>
      <div className="back">
        <div
          className="card-info"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <strong>Read More...</strong>
      </div>
    </a>
  )
}

export default FlipCard

FlipCard.propTypes = {
  // image: PropTypes.node.isRequired,
  classes: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}
