const editButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup')
const closePopupButton = document.querySelector('.popup__close')

const titleElement = document.querySelector('.profile__title')
const nameFiledElement = document.querySelector('.popup__input_type_name')

const subTitleElement = document.querySelector('.profile__subtitle')
const professionFiledElement = document.querySelector('.popup__input_type_profession')

const formElement = document.querySelector('.popup__form')


function openPopup(popupElement) {
    popupElement.classList.add('popup__isOpen')
}

function closePopup(popupElement) {
    popupElement.classList.remove('popup__isOpen')
}

editButton.addEventListener('click', function() {
    openPopup(popup)
   nameFiledElement.value = titleElement.textContent;
   openPopup(popup)
    professionFiledElement.value = subTitleElement.textContent;
})

closePopupButton.addEventListener('click', function() {
    closePopup(popup)
})

formElement.addEventListener('submit', function(event) {

    event.preventDefault()
    
    titleElement.textContent = nameFiledElement.value;
    subTitleElement.textContent = professionFiledElement.value;
    closePopup(popup)
}) 



const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  
  
const addButton = document.querySelector('.profile__add-button');
const popupPlace = document.querySelector('.popupPlace');
const closePopupPlaceButton = document.querySelector('.popupPlace__close');


/* добавляем кнопке обработчик по клику */
addButton.addEventListener('click', function() {
  openPopup(popupPlace)
});
/* обработчик закрытия попапа по клику на крестик*/
closePopupPlaceButton.addEventListener('click', function() {
  closePopup(popupPlace)
});


const listElement = document.querySelector('.elements');
const formElementPlace = document.querySelector('.popupPlace__form');
const inputElementPlaceName = formElementPlace.querySelector('.popupPlace__input_type_name');
const inputElementPlaceLink = formElementPlace.querySelector('.popupPlace__input_type_link');


/* функция отправки данных */
function handleSubmit(e) {
  e.preventDefault()

  initialCards.name = inputElementPlaceName.value;
  initialCards.link= inputElementPlaceLink.value;
  addinitialCards(initialCards);
}

 const popupImage = document.querySelector('.popupImage');
 const popupBigImage = document.querySelector('.popupImage__big-image');
 const popupImageClose = document.querySelector('.popupImage__close');
 const popupBigImageTitle = document.querySelector('.popupImage__title');

/*  функция добавления попапа с картинкой  */
 function openImage(e) {
    const cardImage = e.target.closest('.element__image');
    console.log(cardImage)
    const imageSrc = cardImage.getAttribute('src');
    popupBigImage.setAttribute('src', imageSrc);
    const imageAlt = cardImage.getAttribute('alt');
    popupBigImage.setAttribute('alt', imageAlt);
    popupBigImageTitle.textContent = imageAlt;
    openPopup(popupImage);
};


/* обработчик закрытия попапа картинки по клику на крестик*/
popupImageClose.addEventListener('click', function() {
  closePopup(popupImage)
});


/* функция добавления карточек */
function addinitialCards(initialCards) {
  const templateElement = document.querySelector('.template').content; 
  const newElement = templateElement.querySelector('.element').cloneNode(true);
  newElement.querySelector('.element__title').textContent = initialCards.name;
  newElement.querySelector('.element__image').src = initialCards.link;
  newElement.querySelector('.element__image').alt = initialCards.name;
  
  newElement.querySelector('.element__image').addEventListener('click', openImage);
  
/*   создаем обработчик клика на лайк, присваиваем класс*/
  newElement.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_liked')
  });
  /* удаление карточки */
  newElement.querySelector('.element__trash').addEventListener('click', (e) => {
    const itemElement = e.target.closest('.element');
    itemElement.remove();
  })

  listElement.prepend(newElement);
}

/* вызов функции добавления карточек */
initialCards.forEach(addinitialCards);

/* обработчик отправки данных*/
formElementPlace.addEventListener('submit', handleSubmit); 

/* добавил обработчик по клику на кнопку создать, чтобы при отправке данных попап закрывался*/
const closePopupPlaceButtonCreate = document.querySelector('.popupPlace__save');

closePopupPlaceButtonCreate.addEventListener('click', function() {
  closePopup(popupPlace)
});



