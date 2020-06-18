var toggles = document.querySelectorAll(".toggle");
var promoImgs = document.querySelectorAll(".promo__img");
var promoTitles = document.querySelectorAll(".promo__title");
var pageIndex = document.querySelector(".index");

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!toggles[i].classList.contains("toggle--active")) {
    for (let i = 0; i < toggles.length; i++) {
      toggles[i].classList.remove("toggle--active");
    };
    toggles[i].classList.add("toggle--active");
    for (let i = 0; i < promoImgs.length; i++) {
      promoImgs[i].classList.remove("promo__img--active");
    };
    for (let i = 0; i < promoTitles.length; i++) {
      promoTitles[i].classList.remove("promo__title--active");
    };
    promoImgs[i].classList.add("promo__img--active");
    promoTitles[i].classList.add("promo__title--active");
    pageIndex.classList.remove("light-1", "light-2", "light-3");
    pageIndex.classList.add("light-" + (i + 1));
  };
});
};
