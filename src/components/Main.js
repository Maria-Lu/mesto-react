import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserData(), api.getCards()])
      .then(([userData, cards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cards);

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content section page__section">
      <section className="profile">
        <div className="profile__avatar">
          <div className="profile__overlay" onClick={props.onEditAvatar}></div>
          <img
            className="profile__image"
            src={userAvatar}
            alt="Аватар пользователя"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__about">{userDescription}</p>
          <button
            className="button profile__button-edit"
            type="button"
            onClick={props.onEditProfile}
          ></button>
        </div>
        <button
          className="button profile__button-add"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card
            card={card}
            key={card._id}
            onCardClick={props.onCardClick}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
