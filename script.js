// Arrows

const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  arrow.addEventListener("click", function () {
    const movieList = movieLists[i];

    // Panel genişliği ve liste genişliğini alıyoruz
    const panelWidth = movieList.parentElement.clientWidth;
    const listWidth = movieList.scrollWidth;

    // Maksimum kaydırma değeri
    const maxTranslateX = -(listWidth - panelWidth);

    const style = getComputedStyle(movieList);
    const matrix = new DOMMatrixReadOnly(style.transform);
    const currentX = matrix.m41;

    // Sınır kontrolü: maksimum kaydırmaya ulaşıldıysa başa dön
    let newX;
    if (currentX <= maxTranslateX) {
      newX = 0;
    } else {
      newX = currentX - 300;
    }

    // Yeni pozisyonu uygula
    movieList.style.transform = `translateX(${newX}px)`;
    console.log(`Yeni X değeri: ${newX}px`);
  });
});

// Light Mode

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container, .navbar, .sidebar, .sidebar i,.toggle, .toggle-ball, .movie-list-filter select,.movie-list-title,.arrow"
);
ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
});
