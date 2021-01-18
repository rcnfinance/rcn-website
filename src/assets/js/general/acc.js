const acc = () => {
  const acc = document.getElementsByClassName('item--nav');

  for (const el of acc) {
    el.addEventListener('click', function () {
      this.classList.toggle('active');
      const more = this.nextElementSibling;
      if (more.style.display === 'block') {
        more.style.display = 'none';
        this.style.transform = 'rotate(0deg)';
      } else {
        more.style.display = 'block';
        this.style.transform = 'rotate(180deg)';
      }
    })
  }
};

export default acc;
