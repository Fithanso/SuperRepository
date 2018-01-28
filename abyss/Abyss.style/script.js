  function slowScroll(id) {
    var offset = 10;/*отступ прокрутки от конечного элемента сверху*/
    $('html, body').animate ({
      scrollTop: $(id).offset ().top - offset
    }, 500);
    return false;
  }