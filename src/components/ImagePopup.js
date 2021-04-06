import React from 'react'

function ImagePopup(props) {

  return (
    <section className={`popup preview-popup ${props.isOpen ? 'popup_opened': ''}`}>
      <div className="preview-popup__container">
        <button className="button popup__button-close" type="button" onClick={props.onClose}></button>
        <figure className="preview-popup__figure">
          <img className="preview-popup__image"
            src={props.card.link}
            alt={props.card.name}
          />
          <figcaption className="preview-popup__caption">{props.card.name}</figcaption>
        </figure>
      </div>
    </section>

  )
}

export default ImagePopup;
