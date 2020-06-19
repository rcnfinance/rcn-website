const tabs = () => {
  const btn = document.querySelectorAll(".network__tab--nav button");
  const tabContent = document.querySelectorAll(
    ".network__tab--content .tabcontent"
  );

  for (let el of btn) {
    el.addEventListener("click", (e) => {
      let selectBtn = e.target.dataset.tabname;

      if (selectBtn) {
        for (let tag of tabContent) {
          if (selectBtn === tag.id) {
            tag.classList.add("--show");
          } else {
            tag.classList.remove("--show");
          }
        }
      }

    });
  }
};

export default tabs;
