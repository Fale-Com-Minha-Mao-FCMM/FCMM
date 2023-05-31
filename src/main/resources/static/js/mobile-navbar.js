document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.getElementById('menu-toggle');
  var navList = document.querySelector('#nav-header .nav-list');

  menuToggle.addEventListener('change', function() {
    navList.style.display = this.checked ? 'block' : 'none';
  });
});
