/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById("sidebar"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-sidebar");
  });
}
/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContent = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContent.forEach((tabContents) => {
      tabContents.classList.remove("skills__active");
    });

    target.classList.add("skills__active");

    tabs.forEach((tab) => {
      tab.classList.remove("skills__active");
    });

    tab.classList.add("skills__active");
  });
});
/*=============== MIXITUP FILTER PORTFOLIO ===============*/
var mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});
/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll(".work__item");

function activeWork(event) {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  event.currentTarget.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));
/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("work__button")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio__popup").classList.toggle("open");
}
document
  .querySelector(".portfolio__popup-close")
  .addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp__thumbnail img").src =
    portfolioItem.querySelector(".work__img").src;
  document.querySelector(".portfolio__popup-subtitle span").innerHTML =
    portfolioItem.querySelector(".work__title").innerHTML;
  document.querySelector(".portfolio__popup-body").innerHTML =
    portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}
/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

function showModal(modalIndex) {
  modalViews[modalIndex].classList.add("active-modal");
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    showModal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});
/*=============== SWIPER TESTIMONIAL ===============*/

let swiper = new Swiper(".testimonials__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
/*=============== < src="smtpjs ===============*/
$(document).ready(function () {
  $(".pilling").ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
  });
});
//========================
// pagepiling

// Get the share button element
const shareButton = document.getElementById("btn__share");

// Function to handle sharing
function shareContent() {
  // Check if the Web Share API is supported
  if (navigator.share) {
    navigator
      .share({
        title: "Thanee_ola Portfolio",
        text: "This is thanee_ola portfolio.",
        url: window.location.href,
      })
      .then(() => console.log("Content shared successfully"))
      .catch((error) => console.log("Error sharing content:", error));
  } else {
    // Fallback for browsers that don't support the Web Share API
    alert(
      "Web Share API is not supported in your browser. You can manually copy the URL to share."
    );
  }
}

// Add click event listener to the share button
shareButton.addEventListener("click", shareContent);
//========================

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-sidebar");
});

const navLinks = document.querySelectorAll(".nav__menu a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-sidebar");
  });
});
