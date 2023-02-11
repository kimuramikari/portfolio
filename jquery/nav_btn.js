const menuBtnContainer = document.querySelector('.menu_btn_container')
const sampleSpmenu = document.querySelector('.sample_sp_menu');
const menuClose = document.querySelector('.menu_close');
const menuOpne = document.querySelector('.menu_open');


menuBtnContainer.addEventListener('click', () => {
    // alert('クリックされました。');
    sampleSpmenu.classList.toggle('active');
    menuClose.classList.toggle('active');
    menuOpne.classList.toggle('active');
});