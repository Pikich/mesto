const profilePopup = document.querySelector('.popup-profile');
const cardPopup = document.querySelector('.popup-card');
const imagePopup = document.querySelector('.popup-image');
const editButton = document.querySelector('.profile__edit-button');
const popupProfileClose = document.querySelector('.popup__profile-close');
const titleProfileElement = document.querySelector('.profile__title-profile');
const nameProfileElement = document.querySelector('.popup__input_type_name-profile');
const subTitleProfileElement = document.querySelector('.profile__subtitle-profile');
const professionProfileElement = document.querySelector('.popup__input_type_profession-profile');
const profileForm = document.querySelector('.popup__profile-form');
const buttonAdd = document.querySelector('.profile__add-button');
const popupCardClose = document.querySelector('.popup__card-close');
const listElement = document.querySelector('.elements');
const cardForm = document.querySelector('.popup__card-form');
const inputElementCardName = cardForm.querySelector('.popup__input_type_name-card');
const inputElementCardLink = cardForm.querySelector('.popup__input_type_link-card');
const bigImagePopup = document.querySelector('.popup__big-image');
const imageClosePopup = document.querySelector('.popup__image-close');
const bigImageTitlePopup = document.querySelector('.popup__title-image');
const templateElement = document.querySelector('.template').content;

function openPopup(popupElement) {
    popupElement.classList.add('popup__isOpen')
    document.addEventListener('keydown', closePopupEsc);
    popupElement.addEventListener('mousedown', closePopupOverlay);
};

function closePopup(popupElement) {
    popupElement.classList.remove('popup__isOpen')
    document.removeEventListener('keydown', closePopupEsc);
    popupElement.removeEventListener('mousedown', closePopupOverlay);
};

function closePopupOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    const popupIsOpen = document.querySelector('.popup__isOpen');
    closePopup(popupIsOpen);
  }
}

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popupIsOpen = document.querySelector('.popup__isOpen');
    closePopup(popupIsOpen);
  }
}

/* функция отправки данных */
function handleSubmitCard(e) {
  e.preventDefault()
  initialCards.name = inputElementCardName.value;
  initialCards.link = inputElementCardLink.value;
  inputElementCardName.value = '';
  inputElementCardLink.value = '';
  const cardElement = createCard(initialCards);
  listElement.prepend(cardElement);
  closePopup(cardPopup);
};

function handleDelete (e) {
  const itemElement = e.target.closest('.element');
  itemElement.remove();
};

  function handleLike (e) {
    e.target.classList.toggle('element__like_liked')
  };

/*  функция добавления попапа с картинкой  */
function openImage(e) {
  const cardImage = e.target.closest('.element__image');
  const imageSrc = cardImage.getAttribute('src');
  bigImagePopup.setAttribute('src', imageSrc);
  const imageAlt = cardImage.getAttribute('alt');
  bigImagePopup.setAttribute('alt', imageAlt);
  bigImageTitlePopup.textContent = imageAlt;
  openPopup(imagePopup);
};

/*  функция добавления слушателей */
function addListeners(element) {
  element
  .querySelector('.element__image')
  .addEventListener('click', openImage);

  element
  .querySelector('.element__like')
  .addEventListener('click', handleLike);

  element
  .querySelector('.element__trash')
  .addEventListener('click', handleDelete);
};

/* функция создания карточек */
function createCard(initialCards) {
  const newElement = templateElement.querySelector('.element').cloneNode(true);
  newElement.querySelector('.element__title').textContent = initialCards.name;
  const newElementSearch = newElement.querySelector('.element__image');
  newElementSearch.src = initialCards.link;
  newElementSearch.alt = initialCards.name;
  addListeners(newElement);
  return newElement;
};

editButton.addEventListener('click', function() {
    openPopup(profilePopup)
    nameProfileElement.value = titleProfileElement.textContent;
    professionProfileElement.value = subTitleProfileElement.textContent;
});

popupProfileClose.addEventListener('click', function() {
    closePopup(profilePopup)
});

profileForm.addEventListener('submit', function(event) {
    event.preventDefault()
    titleProfileElement.textContent = nameProfileElement.value;
    subTitleProfileElement.textContent = professionProfileElement.value;
    closePopup(profilePopup)
});
/* добавляем кнопке обработчик по клику */
buttonAdd.addEventListener('click', function() {
  openPopup(cardPopup)
});
/* обработчик закрытия попапа по клику на крестик*/
popupCardClose.addEventListener('click', function() {
  closePopup(cardPopup)
});
/* обработчик закрытия попапа картинки по клику на крестик*/
imageClosePopup.addEventListener('click', function() {
  closePopup(imagePopup)
});
/* вызов функции добавления карточек */
initialCards.forEach(initialCard => {
  const cardElement = createCard(initialCard);
  listElement.prepend(cardElement);
});
/* обработчик отправки данных*/
cardForm.addEventListener('submit', handleSubmitCard);