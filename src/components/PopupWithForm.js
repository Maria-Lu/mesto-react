import React from 'react';

function PopupWithForm({ name, title, isOpen, onClose, children }) {
  return (
    <section className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <button
          className="button popup__button-close"
          type="button"
          onClick={onClose}
        ></button>
        <form
          className="popup__form"
          name={name}
          noValidate
        >
          {children}
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
