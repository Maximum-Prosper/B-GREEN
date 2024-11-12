const mediaQuery = window.matchMedia("(max-width: 425px)");
let hamburger = document.getElementById("dropKey");
let container = document.getElementById("wrapper");
let listView = document.getElementById("listCan");
let headChange = document.getElementById("header");
let cancel = hamburger;

container.classList.remove("control");

function checkMediaQuery() {
  if (mediaQuery.matches) {
    dropKey();
  } 
}

function dropKey() {
  container.classList.add("control");
  listView.style.display = "block";
  listView.style.display = "flex";
  listView.classList.add("listContainer");
  headChange.classList.add("space");
  cancel.src = "Assets/images/icons8_Close_5.svg";
  cancel.classList.add("close");
}

function reverseKey() {
    listView.style.display = "none";
    cancel.classList.remove("close");
    container.classList.remove("control");
    headChange.classList.remove("space");
    cancel.src = 'Assets/images/menu-hamburger-svgrepo-com.svg'
}

cancel.addEventListener('click', () => {
  if (!container.classList.contains("control")) {
          checkMediaQuery();
      } else {
          reverseKey();
        }
      })
      mediaQuery.addEventListener;