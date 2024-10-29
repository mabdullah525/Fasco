// NAVBAR TOGGLE
var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);

// END NAVBAR

// SCROLL BEHAVIOUR

// Get the button
const scrollButton = document.getElementById('scrollUp');

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollButton.classList.remove('hidden');
  } else {
    scrollButton.classList.add('hidden');
  }
};

// When the user clicks on the button, scroll to the top of the document
scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// SWIPER

var swiper = new Swiper(".mySwiper", {
  slidesPerView: '2.5',
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// TABS
document.addEventListener('DOMContentLoaded', function () {
  let tabs = document.querySelectorAll('.tab');
  let contents = document.querySelectorAll('.tab-content');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function (e) {
      let targetId = tab.id.replace('Tab', 'Content');

      // Hide all content divs
      contents.forEach(function (content) {
        content.classList.add('hidden');
      });

      // Remove active class from all tabs
      tabs.forEach(function (tab) {
        tab.classList.remove('text-white', 'font-bold', 'bg-black', 'shadow-tab');
        tab.classList.add('bg-tabs-bg', 'text-tabs', 'font-semibold');
      });

      // Show the target content
      document.getElementById(targetId).classList.remove('hidden');

      // Add active class to the clicked tab
      tab.classList.add('text-white', 'font-bold', 'bg-black', 'shadow-tab');
      tab.classList.remove('bg-tabs-bg', 'text-tabs', 'font-semibold');
    });
  });
});


// TESTIMONIALS
var swiper = new Swiper(".secondSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});