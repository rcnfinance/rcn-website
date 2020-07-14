const slick = () => {
  $('.news__carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
        },
      },
    ]
  })
  $('.partners__carousel').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          arrows: false,
          autoplay: true,
        }
      }
    ]
  })
}

export default slick
