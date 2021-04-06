import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
     .then(([userData, initialCards]) => {
       setUserName(userData.name);
       setUserDescription(userData.about);
       setUserAvatar(userData.avatar);
       setCards(initialCards);
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
          <img className="profile__image" src={userAvatar}
            alt="Аватар пользователя"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__about">{userDescription}</p>
          <button className="button profile__button-edit" type="button" onClick={props.onEditProfile}></button>
        </div>
        <button className="button profile__button-add" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card
            card={card}
            key={card._id}
            onCardClick={props.onCardClick}
            onCardDelete={props.onCardDelete}
          />
        ))
        }
      </section>
    </main>
  )
}

export default Main;
