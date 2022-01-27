const button = document
  .getElementById("my-btn")
  .addEventListener("click", handleClick);

function handleClick() {
  document.getElementById("my-btn").style.backgroundColor = "blue";
  document.getElementById("my-btn").textContent = "You have changed the color!";
}
