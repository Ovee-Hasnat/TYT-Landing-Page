// refresh
console.log("refreshed!");

// current time
setInterval(() => {
  const time = new Date().toLocaleTimeString();
  document.querySelector(".time").innerHTML = time;
}, 1000);

// current date
document.querySelector(".date").innerHTML = new Date().toDateString();

//menu
const menu = document.querySelector(".menubox4");
let MenuOpen = false;

menu.addEventListener("click", () => {
  MenuOpen = !MenuOpen;
  console.log(MenuOpen);
  if (MenuOpen) {
    document.querySelector("#menuArrow").className = "fa-solid fa-chevron-down";
    document.querySelector(".showMenu").innerHTML = "Hide Menu";
    showMenu();
  } else {
    document.querySelector("#menuArrow").className = "fa-solid fa-chevron-up";
    document.querySelector(".showMenu").innerHTML = "Show Menu";
    closeMenu();
  }
});

function showMenu() {
  document.querySelector(".footerMenuContainer").style.transform =
    "translateY(-200px)";
}

function closeMenu() {
  document.querySelector(".footerMenuContainer").style.transform =
    "translateY(0px)";
}

window.onscroll = function () {
  var totalPageHeight = document.body.scrollHeight;
  var scrollPoint = window.scrollY + window.innerHeight;

  if (scrollPoint >= totalPageHeight + 150) {
    document.querySelector(".footerFixed").style.display = "none";
  } else {
    document.querySelector(".footerFixed").style.display = "";
  }
};
