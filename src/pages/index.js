import "./index.css";

// const cardList = document.querySelector("#elements__list");
// const buttonPrev = document.querySelector(".element__prev");
// const buttonNext = document.querySelector(".element__next");
// const popup = document.querySelector(".popup");
// const buttonOpenPopup = document.querySelector(".header__menu");
// const links = document.querySelectorAll(".popup__link");
// const link = document.querySelectorAll(".popup__link");

// const cards = Array.from(cardList.children);

// cards.forEach(function (item, index) {
//   // Скрываем все слайды, кроме первого
//   if (index !== 0) {
//     item.classList.add("hidden");
//   }

//   // Добавляем индексы
//   item.dataset.index = index;

//   // Добавляем data атрибут active для первого / активного слайда
//   cards[0].setAttribute("data-active", "");

//   // Клик по слайдам
//   item.addEventListener("click", function () {
//     showNextCard("next");
//   });
// });

// buttonNext.onclick = function () {
//   showNextCard("next");
// };

// buttonPrev.onclick = function () {
//   showNextCard("prev");
// };

// function showNextCard(direction) {
//   // Скрываем текущий слайд
//   const currentCard = cardList.querySelector("[data-active]");
//   const currentCardIndex = +currentCard.dataset.index;
//   currentCard.classList.add("hidden");
//   currentCard.removeAttribute("data-active");

//   // Расчитываем следующий индекс взависимости от направления движения

//   let nextCardIndex;
//   if (direction === "next") {
//     nextCardIndex =
//       currentCardIndex + 1 === cards.length ? 0 : currentCardIndex + 1;
//   } else if (direction === "prev") {
//     nextCardIndex =
//       currentCardIndex === 0 ? cards.length - 1 : currentCardIndex - 1;
//   }

//   // Показываем следующий слайд
//   const nextCard = cardList.querySelector(`[data-index="${nextCardIndex}"]`);
//   nextCard.classList.remove("hidden");
//   nextCard.setAttribute("data-active", "");
// }

// // Открытие и закрытие попапа

// const openPopup = function (popup) {
//   popup.classList.add("popup_opened");
//   document.addEventListener("keydown", handleKeyDown);
// };

// const closePopup = function (popup) {
//   popup.classList.remove("popup_opened");
//   document.removeEventListener("keydown", handleKeyDown);
// };

// // Закрытие попапа нажатием на Esc

// function handleKeyDown(evt) {
//   if (evt.key === "Escape") {
//     closePopup(document.querySelector(".popup_opened"));
//   }
// }

// // Закрытие попапа кликом на оверлей и на крестик

// popup.addEventListener("mousedown", (evt) => {
//   if (evt.target.classList.contains("popup_opened")) {
//     closePopup(popup);
//   }
//   if (evt.target.classList.contains("popup__button")) {
//     closePopup(popup);
//   }
// });

// // Открытие попапа при клике по кнопке меню

// buttonOpenPopup.addEventListener("click", function () {
//   openPopup(popup);
// });

// // Закрытие попапа при клике на ссылку

// links.forEach((link) => {
//   link.addEventListener("click", function () {
//     closePopup(popup);
//   });
// });
