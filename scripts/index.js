//Получаем блок карточек
const placesList = document.querySelector(".places__list");

// @todo: Темплейт карточки искать лучше глобально, а клонировать его нужно внутри функции создания карточки
const cardTmpItem = document.querySelector("#card-template").content.querySelector(".places__item");

// Получаем popup добавления карточки
const popupAdd = document.querySelector(".popup_type_new-card");

// @todo: Функция создания карточки
function createCard(item, deleteCard) {
  const newItem = cardTmpItem.cloneNode(true);
  const cardImg = newItem.querySelector(".card__image");
  const cardRegion = newItem.querySelector(".card__title");
  cardImg.setAttribute("src", item.link);
  cardImg.setAttribute("alt", item.name);
  cardRegion.textContent = item.name;
  const cardDeleteButton = newItem.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", function() {
    deleteCard(newItem);
  });      
  return newItem;
}

// @todo: Функция удаления карточки
function deleteCard(evt) {
  evt.remove();
}

// @todo: Выводим массив карточек
initialCards.forEach(function (item) {
  placesList.append(createCard(item, deleteCard));
});
