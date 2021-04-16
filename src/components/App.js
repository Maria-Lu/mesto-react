import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import {
  editAvatarFormElements,
  editProfileFormElements,
  addPlaceFormElements,
  confirmFormElements,
} from './PopupFormElements';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = useState(false);
  const [popupFormElements, setPopupFormElements] = useState(<></>);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupFormName, setPopupFormName] = useState('');
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setPopupFormElements(editAvatarFormElements);
    setPopupTitle('Обновить аватар');
    setPopupFormName('edit-avatar');
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setPopupFormElements(editProfileFormElements);
    setPopupTitle('Редактировать профиль');
    setPopupFormName('edit-profile');
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setPopupFormElements(addPlaceFormElements);
    setPopupTitle('Новое место');
    setPopupFormName('add-place');
    setAddPlacePopupOpen(true);
  }

  function handleCardImageClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  function handleDeleteCardClick() {
    setPopupFormElements(confirmFormElements);
    setPopupTitle('Вы уверены?');
    setPopupFormName('confirm');
    setConfirmPopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setImagePopupOpen(false);
    setAddPlacePopupOpen(false);
    setConfirmPopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardImageClick}
        onCardDelete={handleDeleteCardClick}
      />
      <Footer />
      <PopupWithForm
        name={popupFormName}
        title={popupTitle}
        isOpen={
          isEditProfilePopupOpen ||
          isAddPlacePopupOpen ||
          isEditAvatarPopupOpen ||
          isConfirmPopupOpen
        }
        onClose={closeAllPopups}
      >
        {popupFormElements}
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
