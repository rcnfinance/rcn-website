const tabs = () => {
  const btn = document.querySelectorAll('.network__tab--nav button');
  const tabContent = document.querySelectorAll(
    '.network__tab--content .tabcontent'
  );

  for (const el of btn) {
    el.addEventListener('click', (e) => {
      const selectBtn = e.target.dataset.tabname;
      if (selectBtn) {
        for (const tag of tabContent) {
          selectBtn === tag.id ? tag.classList.add('--show') : tag.classList.remove('--show');
        }
      }
    })
  }
}
export default tabs
