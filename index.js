document.addEventListener("DOMContentLoaded", () => {
  const radioButtons = document.querySelectorAll(
    'input[type="radio"][name="product-radio"]'
  );
  const containers = document.querySelectorAll(".product-container");

  const expandContent = (index) => {
    containers.forEach((container, i) => {
      if (i === index) {
        container.classList.add("expanded");
      } else {
        container.classList.remove("expanded");
      }
    });
  };
  radioButtons.forEach((radio, index) => {
    radio.addEventListener("click", () => {
      expandContent(index);
    });
  });
});
