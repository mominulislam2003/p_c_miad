document.addEventListener("DOMContentLoaded", function () {
  // NAVIGATION SWITCHING
  const navLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  navLinks.forEach((link, index) => {
    link.addEventListener("click", function () {
      pages.forEach((page) => page.classList.remove("active"));
      navLinks.forEach((nav) => nav.classList.remove("active"));
      pages[index].classList.add("active");
      this.classList.add("active");
      window.scrollTo(0, 0);
    });
  });

  // SIDEBAR TOGGLE
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");
  const sidebar = document.querySelector(".sidebar");
  if (sidebarBtn && sidebar) {
    sidebarBtn.addEventListener("click", function () {
      sidebar.classList.toggle("active");
    });
  }

  // FORM VALIDATION
  const form = document.querySelector("form");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  if (form && formBtn) {
    formBtn.disabled = true;
    formInputs.forEach((input) => {
      input.addEventListener("input", function () {
        formBtn.disabled = !form.checkValidity();
      });
    });
  }
});

