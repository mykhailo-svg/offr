const select = function () {
    const selects = document.querySelectorAll('.select');
  
    selects.forEach(select => {
      const selectHeader = select.querySelector('.select__header');
      const selectItems = select.querySelectorAll('.select__item');
      const currentText = select.querySelector('.select__current');
  
      selectHeader.addEventListener('click', function () {
        select.classList.toggle('is-active');
      });
  
      selectItems.forEach(item => {
        item.addEventListener('click', function () {
          currentText.innerText = item.innerText;
          select.classList.remove('is-active');
        });
      });
    });
};
  
select();


const burgerButton = document.querySelector('.hamburger');

const burgerBody = document.querySelector('.burger__body');
burgerButton.addEventListener('click', function ()  {
    if (burgerBody.classList.length<2) {
      burgerBody.classList.add('burger__show');
    }
    else{
      burgerBody.classList.toggle('burger__show');
      burgerBody.classList.toggle('burger__hide');
    }
   
});


const langList = document.querySelectorAll('.curr__lang');
const langSublists = document.querySelectorAll('.lang__sublist');

let selLangCont;
const currentLang = document.querySelectorAll('.curr__lang');
for (let i = 0; i < langList.length; i++) {
  langList[i].addEventListener('click', function ()  {
      langSublists[i].classList.toggle('lang_sub_hide');
    
  });
  langSublists[i].addEventListener('click', function ()  {
      selLangCont = langSublists[i].innerHTML;
      
      langSublists[i].innerHTML = currentLang[i].innerHTML;
      currentLang[i].innerHTML = selLangCont;
      langSublists[i].classList.toggle('lang_sub_hide');
  });
}





const drpD = document.querySelectorAll('.dropdown');

const dropConts = document.querySelectorAll('.drop__text');


for (let i = 0; i < drpD.length; i++) {
  drpD[i].addEventListener('click', function ()  {
    dropConts[i].classList.toggle('drop__show');
  });
  
}
console.log(langList);

// document.querySelectorAll('.dropdown-btn').forEach(function (el) {
//   el.addEventListener('click', function () {
//       this.parentNode.classList.toggle('active');
//   });
// });