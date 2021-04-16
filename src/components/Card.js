import React from 'react';

function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <article className="element" key={props.card._id}>
      <button
        className="button element__button-trash"
        type="reset"
        onClick={handleDeleteClick}
      ></button>
      <div className="element__image-container">
        <img
          className="element__image"
          src={props.card.link}
          alt={props.card.name}
          onClick={handleCardClick}
        />
      </div>
      <h2 className="element__title">{props.card.name}</h2>
      <div className="element__like-container">
        <button className="button element__button-like" type="button"></button>
        <span className="element__like-counter">{props.card.likes.length}</span>
      </div>
    </article>
  );
}

export default Card;
