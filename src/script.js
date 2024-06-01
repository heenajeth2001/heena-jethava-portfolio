const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  });
}



/**
 * search toggle
 */

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    searchBox.classList.toggle("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


//  // Function to open the modal
// function openModal() {
//   modal.style.display = 'block';
// }

// // Function to close the modal
// function closeModal() {
//   modal.style.display = 'none';
// }


// Function to open the modal with dynamic content
function openModal(projectType) {
  const modal = document.getElementById('modal');
  modal.style.display = 'block';

  const projectTitle = document.getElementById('projectTitle');
  const projectDuration = document.getElementById('projectDuration');
  const projectTechStack = document.getElementById('projectTechStack');
  const projectDescription = document.getElementById('projectDescription');

  if (projectType === 'ats') {
      projectTitle.textContent = 'Application Tracking System';
      projectDuration.textContent = 'Project Duration: June 2022 to July 2023';
      projectTechStack.textContent = 'Project Tech Stack: Django MySQL';
      projectDescription.textContent = 'Project Description: This is a project description for ATS.';
  } else if (projectType === 'marcoom') {
      projectTitle.textContent = 'Marcom Landing Page';
      projectDuration.textContent = 'Project Duration: July 2023 to July 2023';
      projectTechStack.textContent = 'Project Tech Stack: Html, Css, Js';
      projectDescription.textContent = 'Project Description: This is a project description for Marcom.';
  }
  else if (projectType === 'leave') {
    projectTitle.textContent = 'Leave Application';
    projectDuration.textContent = 'Project Duration: July 2023 to July 2023';
    projectTechStack.textContent = 'Project Tech Stack: Html, TailwindCSS, Alpine JS';
    projectDescription.textContent = 'Project Description: This is a project description for Project Leave.';
}
  else if (projectType === 'fastapi') {
    projectTitle.textContent = 'Leave Application';
    projectDuration.textContent = 'Project Duration: July 2023 to July 2023';
    projectTechStack.textContent = 'Project Tech Stack: Html, TailwindCSS, Alpine JS, FastAPI, PostgreSQL';
    projectDescription.textContent = 'Project Description: This is a project description for Project Leave.';
}
  else if (projectType === 'quickproof') {
    projectTitle.textContent = 'Leave Application';
    projectDuration.textContent = 'Project Duration: July 2023 to July 2023';
    projectTechStack.textContent = 'Project Tech Stack: Html, TailwindCSS, Alpine JS, FastAPI, PostgreSQL';
    projectDescription.textContent = 'Project Description: This is a project description for Project Leave.';
}
  else if (projectType === 'fastapi') {
    projectTitle.textContent = 'Leave Application';
    projectDuration.textContent = 'Project Duration: July 2023 to July 2023';
    projectTechStack.textContent = 'Project Tech Stack: Html, TailwindCSS, Alpine JS, FastAPI, PostgreSQL';
    projectDescription.textContent = 'Project Description: This is a project description for Project Leave.';
}
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}