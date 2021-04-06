import React from 'react';


function PopupWithForm(props) {

  return (
    <section className={`popup ${props.name}-popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <button className="button popup__button-close" type="button" onClick={props.onClose}></button>
        <form className={`popup__form ${props.name}-popup__form`} name={props.name} noValidate>
          {props.children}
        </form>
      </div>
    </section>
  )
}

export default PopupWithForm;
