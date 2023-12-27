/**
 * Changes the container's background to a random color and displays the new
 * rgb value.
 *
 * @format
 * @param {Event} e - The event parameter.
 */

function changeColor(e) {
  e.preventDefault();

  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const container = document.querySelector(".container");
  container.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

  const btn = document.querySelector(".btn");
  btn.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

  const header = document.querySelector(".header");
  header.innerHTML = `Color: rgb(${r},${g},${b})`;
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", changeColor);
});
