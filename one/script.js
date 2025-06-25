
// Select all elements to animate
const elements = document.querySelectorAll('.rawone, .rawtwo, .rawthree');

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Function to toggle 'active' class based on visibility
function handleScroll() {
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}



// Attach scroll event listener
window.addEventListener('scroll', handleScroll);

// Trigger check on page load
handleScroll();

let lastScrollY = window.scrollY; // ទទួលតម្លៃ scroll ដំបូង

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");
  if (window.scrollY > lastScrollY) {
    // បញ្ច្រាសចុះក្រោម
    nav.classList.add("hidden");
  } else {
    // បញ្ច្រាសឡើងលើ
    nav.classList.remove("hidden");
  }
  lastScrollY = window.scrollY; // Update scroll position
});



document.addEventListener("DOMContentLoaded", function () {
    // Select buttons and form containers
    const signUpButton = document.querySelector(".sig");
    const loginCo1qqntainer = document.querySelector(".login");
    const signUpContainer = document.querySelector(".signup");

    // Function to show sign-up form and hide login form
    signUpButton.addEventListener("click", function () {
        loginContainer.style.display = "none";
        signUpContainer.style.display = "flex"; // Make it visible
    });

    // Optional: Add a back button to go back to login (you need to add this button in HTML)
    const backButton = document.querySelector(".backToLogin");
    if (backButton) {
        backButton.addEventListener("click", function () {
            signUpContainer.style.display = "none";
            loginContainer.style.display = "flex";
        });
    }
});

const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');

fileInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
