const tabSlide = () => {
  const btn = document.querySelectorAll('.partners__carousel .item');
  const tabCont = document.querySelectorAll('.partners__data .item');
  for (const el of btn) {
    el.addEventListener('click', (e) => {
      const slideItem = e.target.dataset.index;
      if (slideItem) {
        for (const tag of tabCont) {
          const dataSet = tag.dataset.index;

          slideItem === dataSet
            ? tag.classList.add('active')
            : tag.classList.remove('active');
        }
      }
    });
  }
}

export default tabSlide;
