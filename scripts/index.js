// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу



//Получаем шаблон карточки
const cardTmpItem = document.querySelector('#card-template');
//Получаем блок карточек
const cardList = document.querySelector('.places__list');
// Получаем popup добавления карточки
const popupAdd = document.querySelector('.popup_type_new-card');
// Получаем попап для открытия изображения
const popupImg = document.querySelector('.popup_type_image');

// кнопки октрытия закрытия попапа формы добавления карточки
const popupAddOpenButton = document.querySelector('.profile__add-button');
const popupAddCloseButton = popupAdd.querySelector('.popup__close');
// Получаем  кнопку закрытия изображения из попапа
const popupImgСlose =  popupImg.querySelector('.popup__close');

// Находим форму добавления карточки
const formAdd = popupAdd.querySelector('.popup__form');

//поля для ввода данных карточки
const cardInputPlace = popupAdd.querySelector('.popup__input_type_card-name');
const cardInputImg = popupAdd.querySelector('.popup__input_type_url');

// Получаем конейнер изображения из попапа отктытия картинки
const popupImgImg =  popupImg.querySelector('.popup__image');
// Получаем конейнер для подписи изображения в попапе  отктытия картинки
const popupImgTitle =  popupImg.querySelector('.popup__caption');


// ----------- test

//Функции открытия и закрытия попапа
const openPopup = function(popup) {
  popup.classList.toggle('popup_opened');
}


//  обработчик для кнопок карточки-------------
popupAddOpenButton.addEventListener('click', function(){openPopup(popupAdd)});
popupAddCloseButton.addEventListener('click', function(){openPopup(popupAdd)});

// Функция отправки формы добавления карточки
function formAddSubmitHandler(evt) {
  evt.preventDefault();
  // создание новой карточки
  const card = createCard({name: cardInputPlace.value, link: cardInputImg.value});
  // добавление новой карточки
  cardList.prepend(card);
  formAdd.reset();
  openPopup(popupAdd);
}

// Прикрепляем обработчик добавления карточки к форме:  событием “submit” «отправка»
formAdd.addEventListener('submit', formAddSubmitHandler);



//Функция создания карточек

function createCard(item){
  const newItem = cardTmpItem.content.cloneNode(true);

  const cardLikeButton = newItem.querySelector('.cards__like-button');
  const cardDeleteButton = newItem.querySelector('.cards__delete-button');

  const cardImg = newItem.querySelector('.cards__img');
  cardImg.setAttribute('src', item.link);
  cardImg.setAttribute('alt', item.name);

  const cardRegion = newItem.querySelector('.cards__region');
  cardRegion.textContent = item.name;

  cardDeleteButton.addEventListener('click', deleteCard);
  cardLikeButton.addEventListener('click', likeCard);
  cardImg.addEventListener('click', openCard);

  return newItem;
}

initialCards.forEach(function(item) {
  cardList.append(createCard(item));
})

// --------- удаление карточки-------------

function deleteCard(evt){
  const targetButton = evt.target;
  const targetCard = targetButton.closest('.cards__item');
  targetCard.remove();
}
// --------- открытие карточки-------------

// Вешаем обработчик для закрытия изображения из попапа
popupImgСlose.addEventListener('click', function(){openPopup(popupImg)});




function openCard(evt){
  const targetImg = evt.target;
// Получаем карточку целевого изображения
  const itemParent = targetImg.closest('.cards__item');
// Получаем  изображение из карточки
  const itemImg =  itemParent.querySelector('.cards__img');
// Получаем атрибуты изображения из карточки
  const itemImgSrc = itemImg.getAttribute('src');
  const itemImgAlt = itemImg.getAttribute('alt');

  openPopup(popupImg);
// Добавляем атрибуты изображения из карточки в попап
  popupImgImg.setAttribute('src', itemImgSrc);
  popupImgImg.setAttribute('alt', itemImgAlt);
// Подписи изображения в попапе из подписи карточки
  popupImgTitle.textContent =  itemParent.querySelector('.cards__region').textContent;
}
