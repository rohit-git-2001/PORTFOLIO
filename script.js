//section 02 ka js
const items = document.querySelectorAll(".item");
// console.log(items);
items.forEach((item) => {
  // const title = item.querySelector(".item-logo");

  title.addEventListener("click", () => {
    for (let i = 0; i < items.length; i++) {
      if (items[i] != item) {
        items[i].classList.remove("active");
      } else {
        item.classList.toggle("active");
      }
    }
  });
});

//section 03 ka js
const taskDiv = document.querySelector(".tasks");

const button = document.querySelector(".tskBtn");

button.addEventListener("click", function () {
  if ((taskDiv.style.display === "none" || taskDiv.style.display === "")) {
    taskDiv.style.display = "block";
  } else {
    taskDiv.style.display = "none";
  }
});
