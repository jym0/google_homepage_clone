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
document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("allapps_container");
    var button = document.getElementById("candymenu");

    function toggleContainer() {
      if (container.style.display === "none") {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      }
    }

    button.addEventListener("click", toggleContainer);
    document.addEventListener("click", function(event) {
      if (event.target !== container && event.target !== button) {
        container.style.display = "none";
      }
    });
  });
