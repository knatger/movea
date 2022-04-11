const modalWindow = document.querySelector(".modal");
const buttonsModal = document.querySelectorAll(".button-play");
const video = document.querySelector(".video");

buttonsModal.forEach((item, i) => {
  item.addEventListener("click", () => {
    modalWindow.classList.add("active");
  });
});

modalWindow.addEventListener("click", () => {
  modalWindow.classList.remove("active");
});
