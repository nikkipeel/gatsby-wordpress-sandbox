import React from "react"
import PropTypes from "prop-types"
import "./cards.css"

const Card = ({
  classes,
  key,
  url,
  label,
  title,
  imageSrc,
  content,
  ...props
}) => {
  const bgImage = imageSrc
    ? imageSrc
    : "https://source.unsplash.com/random/?camping"
  return (
    <>
      {classes.includes("card--basic") && <div className="card-shadow"></div>}

      <a className={classes} key={key} href={url} aria-label={label} {...props}>
        {classes.includes("card--flip") ? (
          <>
            <div className="front">
              <div className="card-title">
                <h2>{title}</h2>
                <span></span>
              </div>
              <img src={bgImage} alt={title} />
              <div className="overlay"></div>
              {/* style={{ backgroundImage: `url(${bgImage})` }} */}
            </div>
            <div className="back">
              <div
                className="card-info"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              <strong>Read More...</strong>
            </div>
          </>
        ) : (
          <>
            <div className="card-inner">
              <h2>{title}</h2>
              <div
                className="card-info"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              <strong>Read More...</strong>
            </div>
          </>
        )}
      </a>
    </>
  )
}

export default Card

Card.propTypes = {
  // image: PropTypes.node.isRequired,
  classes: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}
