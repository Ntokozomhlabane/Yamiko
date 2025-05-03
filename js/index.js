// js/components/header.js

// This script handles the hamburger menu toggle functionality
// for the navigation links in the header.
// It adds an event listener to the hamburger icon that toggles
// the visibility of the navigation links when clicked.


document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });
});
