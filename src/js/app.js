const hotPrices = document.querySelectorAll('.hot');
for (let i = 0; i < hotPrices.length; i++) {
  const hotPrice = hotPrices[i];
  hotPrice.insertAdjacentText('afterend', '🔥');
}


import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
});

const hotPrices = document.querySelectorAll('.hot');
for (let i = 0; i < hotPrices.length; i++) {
  const hotPrice = hotPrices[i];
  hotPrice.insertAdjacentText('afterend', '🔥');
}
