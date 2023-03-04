var r = document.querySelector(':root');

function get_root_var() {
  var rs = getComputedStyle(r);
}

function toDarkMode() {
  r.style.setProperty('--main-color', 'white');
  r.style.setProperty('--medium-color', '#a1a1aa');
  r.style.setProperty('--bg-color', '#18181b');
  r.style.setProperty('--bg-bar', '#27272a');
  r.style.setProperty('--shadow-color', '#a1a1a733');
  r.style.setProperty('--mode', 'dark');
  //alert("The value of --mode is: " + rs.getPropertyValue('--mode'))
}

function toLightMode() {
  r.style.setProperty('--main-color', '#18181b');
  r.style.setProperty('--medium-color', '#71717a');
  r.style.setProperty('--bg-color', 'white');
  r.style.setProperty('--bg-bar', '#f4f4f5');
  r.style.setProperty('--shadow-color', '#18181b33');
  r.style.setProperty('--mode', 'light');
}

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {

  var rs = getComputedStyle(r);
  var mode = rs.getPropertyValue('--mode');
  if (mode == "light") {
    toDarkMode();
  }
  else {
    toLightMode();

  }
});

function toggleMood(x) {
  x.classList.toggle("fa fa-sun");
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("topnav").style.top = "0";
  } else {
    document.getElementsByClassName("topnav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


const callback = (entries) => {
  entries.forEach(({ target, isIntersecting }) => {
    console.log(target);
    if (!isIntersecting) {
      return target.classList.remove('in-sight');
    }

    target.classList.add('in-sight');
  })
};

const observer = new IntersectionObserver(callback, {
  root: document.querySelector("#skills"),
  threshold: 1.0
});

document.querySelectorAll(".observable").forEach(el => observer.observe(el));

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}