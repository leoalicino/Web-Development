document.addEventListener('DOMContentLoaded', function () {
  var menuToggle = document.getElementById('menu-toggle');
  var sidebar = document.getElementById('sidebar');
  var closeSidebar = document.getElementById('close-sidebar');

  menuToggle.addEventListener('click', function () {
    sidebar.classList.toggle('open');
  });

  closeSidebar.addEventListener('click', function () {
    sidebar.classList.remove('open');
  });
});



