import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { editAvatarPopupContent, editProfilePopupContent, addPlacePopupContent,
        confirmPopupContent } from '../utils/popupContents'


function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = React.useState(false);
  const [popupContent, setPopupContent] = React.useState(<></>);
  const [popupTitle, setPopupTitle] = React.useState('');
  const [popupName, setPopupName] = React.useState('');
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setPopupContent(editAvatarPopupContent);
    setPopupTitle('Обновить аватар');
    setPopupName('edit-avatar');
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setPopupContent(editProfilePopupContent);
    setPopupTitle('Редактировать профиль');
    setPopupName('edit-profile');
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setPopupContent(addPlacePopupContent);
    setPopupTitle('Новое место');
    setPopupName('add-place');
    setAddPlacePopupOpen(true);
  }

  function handleCardImageClick(card){
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  function handleDeleteCardClick() {
    setPopupContent(confirmPopupContent);
    setPopupTitle('Вы уверены?');
    setPopupName('confirm-popup');
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
      <Header/>
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardImageClick}
        onCardDelete={handleDeleteCardClick}
      />
      <Footer/>
      <PopupWithForm
        name={popupName}
        title={popupTitle}
        isOpen={isEditProfilePopupOpen || isAddPlacePopupOpen || isEditAvatarPopupOpen || isConfirmPopupOpen}
        children={popupContent}
        onClose={closeAllPopups}
      />
      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
  </div>
  );
}

export default App;
