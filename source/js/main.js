(function () {

  //Бургер

  document.addEventListener('click', burgerInit)

  function burgerInit(e) {
    const burgerIcon = e.target.closest('.burger-icon');
    const burgerNavLink = e.target.closest('.header__link');

    if (!burgerIcon && !burgerNavLink) return;
    if (document.documentElement.clientWidth > 900) return;
    console.log('hy');
    if (!document.body.classList.contains('body--oppened-menu')) {
      document.body.classList.add('body--oppened-menu');
    }
    else { document.body.classList.remove('body--oppened-menu'); }

  }
})()