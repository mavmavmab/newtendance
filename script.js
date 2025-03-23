// Dark mode toggle
let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () => {
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
};

const disableDarkMode = () => {
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
};

if (darkMode === 'enabled') enableDarkMode();

toggleBtn.onclick = () => {
   darkMode = localStorage.getItem('dark-mode');
   if (darkMode === 'disabled') enableDarkMode();
   else disableDarkMode();
};

// Profile and search toggles
let profile = document.querySelector('.header .flex .profile');
let search = document.querySelector('.header .flex .search-form');

document.querySelector('#user-btn').onclick = () => {
   profile.classList.toggle('active');
   search.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () => {
   search.classList.toggle('active');
   profile.classList.remove('active');
};

// Sidebar toggle
let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () => {
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
};

document.querySelector('#close-btn').onclick = () => {
   sideBar.classList.remove('active');
   body.classList.remove('active');
};

window.onscroll = () => {
   profile.classList.remove('active');
   search.classList.remove('active');
   if (window.innerWidth < 1200) {
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
};

// Ensure script runs after page loads
window.onload = function () {
   // Redirect to home if already logged in
   if (typeof UserDatabase !== "undefined" && UserDatabase.isLoggedIn()) {
      window.location.href = "home.html";
   }
};