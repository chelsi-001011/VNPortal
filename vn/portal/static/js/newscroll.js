const elementsToShow = document.querySelectorAll(".show-on-scroll");
const alogo = document.querySelector(".logo.show-on-scroll");
var elementOfMenu = document.querySelectorAll('.menu-show-on-scroll');
var links = document.querySelectorAll('.link')
var header = document.querySelector('.container-fluid');

const option1 = { threshold: 0.05 };
const option2 = { threshold: 0.5 };
//console.log(elementsToShow);
console.log(alogo);

const observer1 = new IntersectionObserver((entries, observer1) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (!entry.isIntersecting) {
      //             entry.target.classList.add('slide-out');
      elementsToShow.forEach(element =>{
        element.classList.remove("is-visible");
//         element.classList.add('hide');
      });
//      entry.target.classList.remove("is-visible");
      ////             console.log(entry.target.classList);
      return;
    } else {
        elementsToShow.forEach(element =>{
        element.classList.add("is-visible");
//        element.classList.remove('hide');
      });
//      entry.target.classList.add("is-visible");
      //            entry.target.classList.remove('is-visible');
      //            // console.log(entry);
    }
  });
}, option1);


observer1.observe(header);

const observer2 = new IntersectionObserver((entries, observer2) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (!entry.isIntersecting) {
      //             entry.target.classList.add('slide-out');
      elementOfMenu.forEach(element =>{
        element.classList.remove("is-visible");
      });
//      entry.target.classList.remove("is-visible");
      ////             console.log(entry.target.classList);
      return;
    } else {
        elementOfMenu.forEach(element =>{
//        element.classList.add('hide');
//        element.classList.remove('hide');
        element.classList.add("is-visible");
      });
//      entry.target.classList.add("is-visible");
      //            entry.target.classList.remove('is-visible');
      //            // console.log(entry);
    }
  });
}, option2);
//observer2.observe(links);
//observer.observe(alogo);
//alogo.forEach(element => {
////    console.log(element);
////    element.classList.add('new-class');
//    observer.observe(element);
//});
//
links.forEach((element) => {
  //    console.log(element);
//      element.classList.add('new-class');
  observer2.observe(element);
});
