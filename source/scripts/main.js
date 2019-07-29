// Constants
let heightMenu = 50;
let heightSection = 300;
let heightSectionSm = 200;
let screenHeight = window.innerHeight;
let heightHeader = screenHeight;
let heightAbout = screenHeight;
let heightProject = screenHeight;
let heightContact = 400;
let heightResume = screenHeight;

var screenWidth = window.innerWidth;
if (screenWidth < 1025) {
  heightAbout = 400;
  heightProject = 1500;
}

console.log(window.innerHeight, window.innerWidth, document.documentElement.scrollTop);


// Default webpage
resizeMenuBar();
highlightMenu(0);
let slidesIndex = 1;
showSlides(slidesIndex);

let carouselPage = document.getElementById("carousel-page");

let prev = document.getElementById('prev');
prev.addEventListener("click", function() {slidesAt(-1)});

let next = document.getElementById('next');
next.addEventListener("click", function() {slidesAt(1)});

function slidesAt(index) {
  showSlides(slidesIndex += index);
}

function showSlides(index) {
  let i;
  let text = document.getElementsByClassName("carousel-text");
  if (index > text.length) {
    slidesIndex = 1;
  }
  if (index < 1) {
    slidesIndex = text.length;
  }
  for (i = 0; i < text.length; i++) {
    text[i].style.display = "none";
  }
  text[slidesIndex - 1].style.display = "block";
}


window.onscroll = function() {
  resizeMenuBar();
  highlightMenuScroll();
};

function resizeMenuBar() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementsByClassName("menu")[0].style.height = "60px";
    document.getElementsByClassName("menu")[0].style.fontSize = "18px";
  } else {
    document.getElementsByClassName("menu")[0].style.height = "100px";
    document.getElementsByClassName("menu")[0].style.fontSize = "20px";
  }
}

function highlightMenu(index) {
  var i;
  for (i = 0; i < document.getElementsByClassName("menu-options").length; i++) {
    if (i == index) {
      document.getElementsByClassName("menu-options")[i].style.borderStyle = "solid";
    } else {
      document.getElementsByClassName("menu-options")[i].style.borderStyle = "hidden";
    }
  }
}

function highlightMenuScroll() {
  if (document.body.scrollTop < heightHeader || document.documentElement.scrollTop < heightHeader) {
    highlightMenu(0);
  }
  if ((document.body.scrollTop > heightHeader && document.body.scrollTop < heightHeader + heightAbout)
  || (document.documentElement.scrollTop > heightHeader && document.body.scrollTop < heightHeader + heightAbout)) {
    highlightMenu(1);
  }

  if ((document.body.scrollTop > heightHeader + heightAbout && document.body.scrollTop < heightHeader + heightAbout + heightProject)
  || (document.documentElement.scrollTop > heightHeader + heightAbout && document.body.scrollTop < heightHeader + heightAbout + heightProject)) {
    highlightMenu(2);
  }
  if ((document.body.scrollTop > heightHeader + heightAbout + heightProject && document.body.scrollTop < heightHeader + heightAbout + heightProject + heightResume)
  || (document.documentElement.scrollTop > heightHeader + heightAbout + heightProject && document.documentElement.scrollTop < heightHeader + heightAbout + heightProject + heightResume)) {
    highlightMenu(3);
  }
  if (document.body.scrollTop >= heightHeader + heightAbout + heightProject + heightResume
  || document.documentElement.scrollTop >= heightHeader + heightAbout + heightProject + heightResume) {
    highlightMenu(4);
  }
}

let modal = document.getElementById("modalId");
let modalButton = document.getElementsByClassName("project-title");
let span = document.getElementsByClassName("close")[0];

modalButton[0].addEventListener("click", function () {
  modal.style.display = "block";
  document.getElementById("movie-database-header").style.display = "block";
  document.getElementById("carry-header").style.display = "none";
  document.getElementById("ncaa-header").style.display = "none";
  document.getElementsByClassName("modal-text")[0].style.display = "block";
  document.getElementsByClassName("modal-text")[1].style.display = "none";
  document.getElementsByClassName("modal-text")[2].style.display = "none";
  document.getElementById("link-project").style.display = "none";
});

modalButton[1].addEventListener("click", function () {
  modal.style.display = "block";
  document.getElementById("carry-header").style.display = "block";
  document.getElementById("movie-database-header").style.display = "none";
  document.getElementById("ncaa-header").style.display = "none";
  document.getElementsByClassName("modal-text")[0].style.display = "none";
  document.getElementsByClassName("modal-text")[1].style.display = "block";
  document.getElementsByClassName("modal-text")[2].style.display = "none";
  document.getElementById("link-project").style.display = "none";
});

modalButton[2].addEventListener("click", function () {
  modal.style.display = "block";
  document.getElementById("movie-database-header").style.display = "none";
  document.getElementById("carry-header").style.display = "none";
  document.getElementById("ncaa-header").style.display = "block";
  document.getElementsByClassName("modal-text")[0].style.display = "none";
  document.getElementsByClassName("modal-text")[1].style.display = "none";
  document.getElementsByClassName("modal-text")[2].style.display = "block";
  document.getElementById("link-project").style.display = "block";
});

span.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function () {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
