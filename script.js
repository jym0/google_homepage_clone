import { allApps } from "./all-apps.js";

const containers = document.querySelectorAll('.shortcut_apps');
var timeoutId;

function showDot(container) {
  clearTimeout(timeoutId);
  containers.forEach(function(container) {
    const dot = container.querySelector('.more_menu');
    if (dot) {
      dot.style.visibility = 'hidden';
    }
  });
  const dot = container.querySelector('.more_menu');
  if (dot) {
    timeoutId = setTimeout(function() {
      dot.style.visibility = 'visible';
    }, 500);
  }
}

function hideDot(container) {
  clearTimeout(timeoutId);
  const dot = container.querySelector('.more_menu');
  if (dot) {
    dot.style.visibility = 'hidden';
  }
}

containers.forEach(function(container) {
  hideDot(container);
});



//-------------------------------------------------//
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("allapps_container");
  const button = document.getElementById("candymenu");

  function isHidden(element) {
    return window.getComputedStyle(element).display === "none";
  }

  function toggleContainer() {
    if (isHidden(container)) {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  }

  function hideContainer() {
    if (!isHidden(container)) {
      container.style.display = "none";
    }
  }

  button.addEventListener("click", toggleContainer);
  document.addEventListener("click", function (event) {
    if (event.target !== container && event.target !== button) {
      hideContainer();
    }
  });
});

//-         - - - - -- -    - - - -- -     - -//
let allAppsHTML = '';

allApps.forEach((apps) => {
  allAppsHTML += ` 
                <div class="apps_container">
                    <img src="${apps.image}" alt="" >
                    <p>${apps.name}</p>
                </div>`;
})

document.querySelector('.rightside').innerHTML = allAppsHTML;