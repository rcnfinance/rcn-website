const tabSlide = () => {
  const btn = document.querySelectorAll(".partners__carousel .item");
  const tabCont = document.querySelectorAll(".partners__data .item");

  for (let el of btn) {
    el.addEventListener("click", (e) => {
      let slideItem = e.target.dataset.index;
      if (slideItem) {
        for (let tag of tabCont) {
          let dataSet = tag.dataset.index;

          slideItem === dataSet
            ? tag.classList.add("active")
            : tag.classList.remove("active");
        }
      }
    });
  }

};

export default tabSlide;
