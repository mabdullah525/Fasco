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


// SHOP NAVBAR
var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');
console.log('test ', toggleClose, toggleOpen, collapseMenu)

function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);


// // NAVBAR DROP DOWN MENU
// function toggleDropdown() {
//   const dropdown = document.getElementById('dropdownMenu');
//   dropdown.classList.toggle('hidden');
// }

// // Close dropdown if clicked outside
// window.addEventListener('click', function (event) {
//   const dropdown = document.getElementById('dropdownMenu');
//   if (!event.target.closest('button')) {
//     dropdown.classList.add('hidden');
//   }
// });








