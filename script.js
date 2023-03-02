const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClosedModal = document.querySelector(".close-modal");
console.log(btnClosedModal);
const btnOpenModal = document.querySelectorAll(".show-modal");
console.log(btnOpenModal);
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModal);
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnClosedModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if ((e.key = "Escape" && !modal.classList.contains("hidden"))) {
    closeModal();
  }
});
