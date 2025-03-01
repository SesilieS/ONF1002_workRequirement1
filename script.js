const saturnImage = document.querySelector("img");
const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");

saturnImage.onmouseover = () => {
  modal.showModal();
};

closeBtn.onclick = () => {
  modal.close();
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.close();
  }
};

