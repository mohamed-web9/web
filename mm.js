let navebar = document.querySelectorAll(".navebar li");
let navebarArray=Array.from(navebar);

navebar.forEach((ele)=>{

    ele.addEventListener("click",function (e) {
        
        navebarArray.forEach((ele)=>{
            ele.classlist.remove("active")
        });

        e.currentTarget.classlist.add("active")

    });

});









const images = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
let current = 0;

prevBtn.addEventListener('click', function() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }

  current = (current - 1 + images.length) % images.length;
  images[current].classList.add('active');
});

nextBtn.addEventListener('click', function() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }

  current = (current + 1) % images.length;
  images[current].classList.add('active');
});




const image = document.querySelectorAll('.slider2 img');
const prevBtn2 = document.querySelector('#prevBtn2');
const nextBtn2 = document.querySelector('#nextBtn2');
let current2 = 0;

prevBtn2.addEventListener('click', function() {
  for (let i = 0; i < image.length; i++) {
    image[i].classList.remove('active2');
  }

  current2 = (current2 - 1 + image.length) % image.length;
  image[current2].classList.add('active2');
});

nextBtn2.addEventListener('click', function() {
  for (let i = 0; i < image.length; i++) {
    image[i].classList.remove('active2');
  }

  current2 = (current2 + 1) % image.length;
  image[current2].classList.add('active2');
});





const imag = document.querySelectorAll('.slider3 img');
const prevBtn3 = document.querySelector('#prevBtn3');
const nextBtn3 = document.querySelector('#nextBtn3');
let current3 = 0;

prevBtn3.addEventListener('click', function() {
  for (let i = 0; i < imag.length; i++) {
    imag[i].classList.remove('active3');
  }

  current3 = (current3 - 1 + imag.length) % imag.length;
  imag[current3].classList.add('active3');
});

nextBtn3.addEventListener('click', function() {
  for (let i = 0; i < imag.length; i++) {
    imag[i].classList.remove('active3');
  }

  current3 = (current3 + 1) % imag.length;
  imag[current3].classList.add('active3');
});




const imag2 = document.querySelectorAll('.slider4 img');
const prevBtn4 = document.querySelector('#prevBtn4');
const nextBtn4 = document.querySelector('#nextBtn4');
let current4 = 0;

prevBtn4.addEventListener('click', function() {
  for (let i = 0; i < imag2.length; i++) {
    imag2[i].classList.remove('active4');
  }

  current4 = (current4 - 1 + imag2.length) % imag2.length;
  imag2[current4].classList.add('active4');
});

nextBtn4.addEventListener('click', function() {
  for (let i = 0; i < imag2.length; i++) {
    imag2[i].classList.remove('active4');
  }

  current4 = (current4 + 1) % imag2.length;
  imag2[current4].classList.add('active4');
});











