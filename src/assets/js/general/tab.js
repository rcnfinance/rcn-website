const tabs = () => {
  const btn = document.querySelectorAll('.network__tab--nav button');
  const tabContent = document.querySelectorAll(
    '.network__tab--content .tabcontent'
  );
  const defaultButtonActive = document.querySelectorAll('.tablinks#Ecosystem')

  defaultButtonActive[0].style.color = 'black'
  defaultButtonActive[1].style.background = '#404FFF'

  for (const el of btn) {
    el.addEventListener('click', (e) => {
      const selectBtn = e.target.dataset.tabname;
      const buttonSelected = document.querySelectorAll(`.tablinks#${selectBtn}`)
      const buttons = document.querySelectorAll('.tablinks')
      if (selectBtn) {
        for (let i = 0; i < 3; i++) {
          buttons[i].style.color = '#D1D1D1'
        }
        for (let i = 3; i < 6; i++) {
          buttons[i].style.background = '#D1D1D1'
        }
        for (const tag of tabContent) {
          selectBtn === tag.id ? tag.classList.add('--show') : tag.classList.remove('--show');
        }
        buttonSelected[0].style.color = 'black'
        buttonSelected[1].style.background = '#404FFF'
      }
    })
  }
}
export default tabs
