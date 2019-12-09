let closeButtons = document.querySelectorAll(".close-button");
let openButtons = document.querySelectorAll(".important-info");
let popups = document.querySelectorAll(".popup-info");

// Вешаем анимацию на элемент, чтобы он красиво появился. После того, как анимация проигралась - удаляем класс с анимацией
function animationEntrance(element, callback) {
  element.style.display = "block";
  element.classList.add('animated', "fadeInDown")
  console.log("Анимация пошла!");

  function handleAnimationEnd() {
    element.classList.remove('animated', "fadeInDown")
    element.removeEventListener('animationend', handleAnimationEnd)
    console.log("Анимация кончилась!");

    if (typeof callback === 'function') callback()
  }

  element.addEventListener('animationend', handleAnimationEnd)
}

// Открываем окно в той зоне, где кликнули на "Важная информация"
function opening(i) {
  animationEntrance(popups[i]);
  openButtons[i].onclick = function () {
    closing(popups[i], i);
  }
}

// Закрываем, если повторно нажата "Важная информация", либо нажат крестик
function closing(element, i) {
  element.style.display = "none";
  openButtons[i].onclick = function () {
    opening(i);
  }
}

// На все элементы "важная информация" вешаем событие
for (let i = 0; i < openButtons.length; ++i) {
  openButtons[i].onclick = function () {
    opening(i);
  }
}

// И на все крестики вешаем событие закрытия информации
for (let j = 0; j < closeButtons.length; ++j) {
  if (popups[j].style.display != "none") {
    popups[j].onclick = function () {
      closing(popups[j], j);
    }
  }
}