const editButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup')
const closePopupButton = document.querySelector('.popup__close')


const titleElement = document.querySelector('.profile__title')
const nameFiledElement = document.querySelector('.popup__input_type_name')

const subTitleElement = document.querySelector('.profile__subtitle')
const professionFiledElement = document.querySelector('.popup__input_type_profession')

const formElement = document.querySelector('.popup__form')

/*
console.log(editButton)
console.log(popup)

console.log(closePopupButton)*/

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
   // console.log(event)
   // debugger;
    event.preventDefault()
    titleElement.textContent = nameFiledElement.value;
    subTitleElement.textContent = professionFiledElement.value;
    closePopup(popup)
})