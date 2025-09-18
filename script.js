const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("show");

    const img = accordion.querySelector(".icon");

    if (accordion.classList.contains("show")) {
      img.src = "assets/images/icon-minus.svg";
    } else {
      img.src = "assets/images/icon-plus.svg";
    }
  });
});
