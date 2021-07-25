$('.gallery__inner').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: {
    enabled: true,
  },
})

$('.header__dark').click(function () {
  $(document.body).removeClass()
  $(document.body).addClass('dark')
})
$('.header__gray').click(function () {
  $(document.body).removeClass()
  $(document.body).addClass('gray')
})
$('.header__light').click(function () {
  $(document.body).removeClass()
  $(document.body).addClass('light')
})

$('#themes').change(function () {
  var value1 = $(this).val()
  switch (value1) {
    case '1':
      $(document.body).removeClass()
      $(document.body).addClass('light')
      break
    case '2':
      $(document.body).removeClass()
      $(document.body).addClass('dark')
      break
    case '3':
      $(document.body).removeClass()
      $(document.body).addClass('gray')
      break
  }
})
