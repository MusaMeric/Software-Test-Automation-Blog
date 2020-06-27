/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-70px";
  }
  prevScrollPos = currentScrollPos;

  /* Scroll to top button function*/
  scrollFunction();
  /* /Scroll to top button function*/
};

/* Top navbar active element */
var a = document.getElementsByClassName("nav-items");

for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

/* Off-Canvas Menu */

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.1)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
  document.body.style.backgroundColor = "white";
}

/* Scroll To Top Button */

//Get the button:
var scrollButton = document.getElementById("scrollToTop");

// When the user scrolls down 20px from the top of the document, show the button

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = "0"; //for safari
  document.documentElement.scrollTop = "0"; //for chrome, firefox, IE and opera
}
/* /Scroll To Top Button */

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function clickableDropdown() {
  document.getElementById("clickable-content").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it

window.onclick = function (event) {
  if(!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    for(var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[0];
      if(openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


