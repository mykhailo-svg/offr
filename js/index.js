
$(document).ready(function(){
  $('.slider').slick({
      dots:true,
      arrows:false,
  });
  
});

const selects = document.querySelectorAll('.select');

const crDwn = document.querySelectorAll('.select__body');

const select = function () {
    
  
    

    





  
    const selectHeader = document.querySelectorAll('.select__header');
    const selectItems = document.querySelectorAll('.select__item');
    const currentText = document.querySelectorAll('.select__current');

  for (let i = 0; i < selects.length; i++) {
    

    selectHeader[i].addEventListener('click', function () {
      if (i==1) {
        selects[0].classList.add('is-active');
        selects[i].classList.toggle('is-active');
      }
      else if (i==0) {
        selects[1].classList.add('is-active');
        selects[i].classList.toggle('is-active');
      }
      
      
    });
   
  }
  for (let a = 0; a < selectItems.length; a++) {
    selectItems[a].addEventListener('click', function ()  {
      if (a <3) {
        selects[0].classList.add('is-active');
        currentText[0].innerHTML = this.innerHTML;
        console.log("hi");
      }
      else{
        selects[1].classList.add('is-active');
        currentText[1].innerHTML = this.innerHTML;
        console.log("hi");
      }
  });
    
  }

  
   
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