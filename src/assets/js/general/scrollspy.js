const scrollspy = () => {
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      const sections = document.querySelectorAll(".ancla");
      const menuLinks = document.querySelectorAll(".scrollspy__nav-item a");
      const makeActive = (link) => menuLinks[link].classList.add("--active");
      const node = document.createElement("span");
      const nameSection = document.getElementById("name-section");

      const removeActive = (link) =>
        menuLinks[link].classList.remove("--active");
      const removeAllActive = () =>
        [...Array(sections.length).keys()].forEach((link) =>
          removeActive(link)
        );
      const sectionMargin = 400;
      let currentActive = 0;
      window.addEventListener("scroll", (e) => {
        const current =
          sections.length -
          [...sections].reverse().findIndex((section) => {
            let actualPos = window.scrollY >= section.offsetTop - sectionMargin;
            if (actualPos) {
              let attr = section.getAttribute("data-name");
              console.log(attr);
              node.innerHTML = `${attr}`;
              nameSection.appendChild(node);
              return actualPos;
            }
          }) -
          1;
        if (current !== currentActive) {
          removeAllActive();
          currentActive = current;
          makeActive(current);
        }
      });
    },
    false
  );
};

export default scrollspy;
