var toggles = document.querySelectorAll(".toggle");
var promoImgs = document.querySelectorAll(".promo__img");
var promoTitles = document.querySelectorAll(".promo__title");
var pageIndex = document.querySelector(".index");
var contactsBtn = document.querySelector(".contacts__btn");
var popup = document.querySelector(".popup");
var overlay = document.querySelector(".overlay");
var closeBtn = popup.querySelector(".popup__close-btn");
var popupForm = popup.querySelector(".popup__form");
var surname = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var request = popup.querySelector("[name=customer-request]");

var isStorageSupport = true;
var storageSurname = "";
var storageEmail = "";

var calcWidth = function() {
  var screenWidth = document.body.clientWidth;
  document.documentElement.style.setProperty('--screenWidth', `${screenWidth}px`);
};

calcWidth();

window.addEventListener("resize", () => {
  calcWidth();
});

toggles.forEach((item, i) => {
  toggles[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!toggles[i].classList.contains("toggle--active")) {
      document.querySelector(".toggle--active").classList.remove("toggle--active");
      document.querySelector(".promo__img--active").classList.remove("promo__img--active");
      document.querySelector(".promo__title--active").classList.remove("promo__title--active");
      toggles[i].classList.add("toggle--active");
      promoImgs[i].classList.add("promo__img--active");
      promoTitles[i].classList.add("promo__title--active");
      pageIndex.classList.remove("light-1", "light-2", "light-3");
      pageIndex.classList.add("light-" + (i + 1));
    };
  });
});

try {
  storageSurname = localStorage.getItem("surname");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
};

var closePopup = function() {
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("modal-show");
};

contactsBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("modal-show");
  if (storageSurname && storageEmail) {
    surname.value = storageSurname;
    email.value = storageEmail;
    request.focus();
  } else {
    if (storageSurname) {
      surname.value = storageSurname;
      email.focus();
    } else {
      email.value = storageEmail;
      surname.focus();
    }
  }
});

closeBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  closePopup();
});

overlay.addEventListener("click", function (evt) {
  closePopup();
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      closePopup();
    }
  }
});

popupForm.addEventListener("submit", function (evt) {
  if (!email.value || !request.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    document.body.clientWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("surname", surname.value);
      localStorage.setItem("email", email.value);
    }
  }
});
