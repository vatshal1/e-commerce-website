const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const cross = document.getElementById("close");

bar.addEventListener("click", () => {
  nav.classList.add("active");
});

cross.addEventListener("click", () => {
  nav.classList.remove("active");
});
