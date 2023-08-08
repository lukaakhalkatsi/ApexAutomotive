const nav = document.querySelector(".main-nav");
const navItems = document.querySelectorAll(".nav__link");
const logo = document.querySelector(".logo");
const shMain = document.querySelector(".sh-main");
const imgs = document.querySelectorAll(".step-img");
const navBtn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const yearEL = document.querySelector(".year");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const learnBtn = document.querySelector(".btn--outline");
const navCta = document.querySelector(".nav-cta");
const codeDiv = document.querySelector(".code");
const code = document.querySelector(".code-text");
const password = document.querySelector(".password-text");
const closeCircle = document.querySelector(".circle-close");
const cookies = document.querySelector(".cookies-box");
const nameInput = document.querySelector(".name-input");
const codeInput = document.querySelector(".code-input");
const passwordInput = document.querySelector(".password-input");
const formName = document.querySelector(".porsche-id");
const logInBtn = document.querySelector(".login-btn");
const formInputs = document.querySelectorAll(".form-box input");
const btnModal = document.querySelector(".btn--modal");
const form = document.querySelector(".modal__form");
const btnShow = document.querySelector(".choose-show");
const brand = document.querySelector(".brand");
const color = document.querySelector(".color");
const year = document.querySelector(".select-year");
const selectedPorsche = document.querySelector(".selected-porsche");
const porscheImages = document.querySelector(".porsche-images");
const porscheImg = document.querySelector(".porsche-img");
const tableWrapper = document.querySelector(".table-wrapper");
const dealerBtn = document.querySelector(".dealer-btn");
const sectionHow = document.querySelector(".section-how");
const section = document.querySelector(".section");
const head = document.querySelector(".first-heading");
const hiwText = document.querySelector(".hiw-text");
const notSure = document.querySelector(".not-sure");
const secondHeading = document.querySelector(".second-heading");
const sectionPricing = document.querySelector(".section-pricing");
const halfOpacity = document.querySelector(".half-opacity-text");
const halfOpacityHeading = document.querySelector(".half-opacity-heading");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");
const allLinks = document.querySelectorAll("a:link");
const browseBtn = document.querySelector(".browse-btn");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

browseBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "browse.html";
});

nav.addEventListener("mouseover", function (event) {
  if (event.target.classList.contains("nav__link")) {
    navItems.forEach(function (link) {
      if (link !== event.target) {
        link.classList.add("op");
      }
    });
    logo.classList.add("op");
  }
  0;
});

nav.addEventListener("mouseout", function () {
  navItems.forEach(function (link) {
    link.classList.remove("op");
  });
  logo.classList.remove("op");
});

shMain.addEventListener("mouseover", function (event) {
  if (event.target.classList.contains("step-img")) {
    imgs.forEach(function (img) {
      if (img === event.target) {
        img.style.transition = "0.3s";
        img.style.width = "95%";
      }
    });
  }
});

shMain.addEventListener("mouseout", function () {
  imgs.forEach(function (img) {
    img.style.width = "90%";
  });
});

navBtn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile nav
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});

// Sticky navigation
function handleIntersection(entries, target, classToAdd, classToRemove) {
  const ent = entries[0];
  if (!ent.isIntersecting) {
    document.body.classList.add(classToAdd);
  } else {
    document.body.classList.remove(classToAdd);
  }
}

// IntersectionObserver
// Helper function to handle transform style when an element intersects the viewport
function handleIntersectionTransform(entries, target, transformValue) {
  const ent = entries[0];
  if (ent.isIntersecting) {
    target.style.transform = transformValue;
  }
}

// Helper function to handle opacity style when an element intersects the viewport
function handleIntersectionOpacity(entries, target, opacityValue) {
  const ent = entries[0];
  if (ent.isIntersecting) {
    target.style.opacity = opacityValue;
  }
}

// Helper function to observe intersection and call the appropriate handler
function observeIntersection(selector, callback, options) {
  const element = document.querySelector(selector);
  const observer = new IntersectionObserver(callback, options);
  observer.observe(element);
}

// Observing intersections and applying transformations
observeIntersection(".section-hero", (entries) =>
  handleIntersection(entries, document.body, "sticky")
);

observeIntersection(".section-how", (entries) =>
  handleIntersectionTransform(entries, head, "translateX(0px)")
);

observeIntersection(".section-how", (entries) =>
  handleIntersectionTransform(entries, hiwText, "translateX(0px)")
);

observeIntersection(".section", (entries) =>
  handleIntersectionTransform(entries, notSure, "translateX(0px)")
);

observeIntersection(".section", (entries) =>
  handleIntersectionTransform(entries, secondHeading, "translateX(0px)")
);

observeIntersection(".section-pricing", (entries) =>
  handleIntersectionOpacity(entries, halfOpacity, 1)
);

observeIntersection(".section-pricing", (entries) =>
  handleIntersectionOpacity(entries, halfOpacityHeading, 1)
);

formName.addEventListener("blur", function (e) {
  e.preventDefault();
  let fValue = formName.value;
  let splitedValue = fValue.split(" ");
  splitedValue = splitedValue.map(function (item) {
    return item[0].toUpperCase() + item.slice(1);
  });
  const updatedName = splitedValue.join(" ");
  formName.value = updatedName;
});

document.addEventListener("DOMContentLoaded", function () {
  if (!sessionStorage.getItem("cookiesShown")) {
    cookies.classList.remove("hidden");
  }
});

function setCookiesShown() {
  sessionStorage.setItem("cookiesShown", true);
}

closeCircle.addEventListener("click", function (e) {
  e.preventDefault();
  cookies.classList.add("hidden");
  setCookiesShown();
});

// Slider

const slider = function () {
  let currSlide = 0;
  const maxSlide = slides.length;
  /*const slider = document.querySelector('.slider');
  slider.style.transform = 'scale(0.4) translateX(-1300px)';
  slider.style.overflow = 'visible';*/

  // 0% 100% 200% 300%
  //next slide

  const createDots = function () {
    slides.forEach(function (s, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class = "dots__dot" data-slide = "${i}"></button>`
      );
    });
  };
  createDots();

  const activateDot = function (slide) {
    document.querySelectorAll(".dots__dot").forEach((dot) => {
      dot.classList.remove("dots__dot--active");
    });
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  activateDot(0);

  const goToSlide = function (slide) {
    slides.forEach(function (s, i) {
      s.style.transform = `translateX(${(i - slide) * 100}%)`;
    });
  };

  goToSlide(0);

  const nextSlide = function () {
    if (currSlide === maxSlide - 1) {
      currSlide = 0;
    } else {
      currSlide++;
    }
    goToSlide(currSlide);

    activateDot(currSlide);
  };

  btnRight.addEventListener("click", nextSlide);

  //previous slide

  const prevSlide = function () {
    if (currSlide === 0) {
      currSlide = maxSlide - 1;
    } else {
      currSlide--;
    }

    goToSlide(currSlide);
    activateDot(currSlide);
  };

  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      prevSlide();
    }
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

learnBtn.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

btnModal.addEventListener("click", function (e) {
  e.preventDefault();
  if (nameInput.value === "" || nameInput.value.length < 2) {
    nameInput.style.borderColor = "red";
    setTimeout(() => {
      nameInput.style.borderColor = "black";
    }, 1000);
  }

  if (codeInput.value === "") {
    codeInput.style.borderColor = "red";
    setTimeout(() => {
      codeInput.style.borderColor = "black";
    }, 2000);
  }

  if (passwordInput.value === "") {
    passwordInput.style.borderColor = "red";
    setTimeout(() => {
      passwordInput.style.borderColor = "black";
    }, 3000);
  }

  if (
    codeInput.value === code.textContent &&
    passwordInput.value === password.textContent &&
    nameInput.value !== ""
  ) {
    const inputValue = nameInput.value;
    const url = `discover.html?value=${encodeURIComponent(inputValue)}`;
    window.location.href = url;
  }
});

logInBtn.addEventListener("click", function (e) {
  e.preventDefault();
  formInputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("shake-effect");
      input.style.borderColor = "red";
      inputsEmpty = true;

      setTimeout(function () {
        input.classList.remove("shake-effect");
        input.style.borderColor = "";
      }, 1000);
    }
  });
});

const genereateRandomCode = function () {
  const code = Math.floor(Math.random() * 900000) + 100000;
  return code.toString();
};

const generateRandomText = function () {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let text = "";
  for (var i = 0; i < 4; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    text += characters.charAt(randomIndex);
  }
  return text;
};

window.addEventListener("load", function () {
  code.textContent = genereateRandomCode();
  password.textContent = generateRandomText();
});

navCta.addEventListener("click", function () {
  codeDiv.classList.remove("opacity-zero");
});

const htmlContent = function (year, hp, motor, lifecycle) {
  const html = `
          <table class="fl-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Horse Power</th>
              <th>Motor</th>
              <th>Lifecycle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${year}</td>
              <td>${hp}</td>
              <td>${motor}</td>
              <td>${lifecycle}</td>
          </tbody>
          <tbody></tbody>
        </table>`;
  return html;
};
//                                 Clean Version
btnShow.addEventListener("click", function () {
  const selectedBrand = brand.value;
  const selectedColor = color.value;
  const found = models.find((element) => element.model === selectedBrand);

  const matchingImage = found.images.find((img) =>
    img.includes(`/${selectedColor}`)
  );

  if (matchingImage) {
    tableWrapper.innerHTML = "";
    porscheImg.src = matchingImage;
    tableWrapper.style.display = "block";
    tableWrapper.insertAdjacentHTML(
      "afterbegin",
      htmlContent(found.year, found.hp, found.motor, found.lifecycle)
    );
  }
});

//                                Repetetive Version
// btnShow.addEventListener("click", function () {
//   const found = models.find((element) => element.model === brand.value);
//   found.images.forEach((img) => {
//     if (
//       img.substring(img.indexOf("/") + 1, img.indexOf("911")) === color.value
//     ) {
//       tableWrapper.innerHTML = "";
//       porscheImg.src = img;
//       tableWrapper.style.display = "block";
//       tableWrapper.insertAdjacentHTML(
//         "afterbegin",
//         htmlContent(found.year, found.hp, found.motor, found.lifecycle)
//       );
//     }

//     if (
//       img.substring(img.indexOf("/") + 1, img.indexOf("Cay")) === color.value
//     ) {
//       tableWrapper.innerHTML = "";
//       porscheImg.src = img;
//       tableWrapper.style.display = "block";
//       tableWrapper.insertAdjacentHTML(
//         "afterbegin",
//         htmlContent(found.year, found.hp, found.motor, found.lifecycle)
//       );
//     }

//     if (
//       img.substring(img.indexOf("/") + 1, img.indexOf("Pan")) === color.value
//     ) {
//       tableWrapper.innerHTML = "";
//       porscheImg.src = img;
//       tableWrapper.style.display = "block";
//       tableWrapper.insertAdjacentHTML(
//         "afterbegin",
//         htmlContent(found.year, found.hp, found.motor, found.lifecycle)
//       );
//     }

//     if (
//       img.substring(img.indexOf("/") + 1, img.indexOf("Mac")) === color.value
//     ) {
//       tableWrapper.innerHTML = "";
//       porscheImg.src = img;
//       tableWrapper.style.display = "block";
//       tableWrapper.insertAdjacentHTML(
//         "afterbegin",
//         htmlContent(found.year, found.hp, found.motor, found.lifecycle)
//       );
//     }

//     if (
//       img.substring(img.indexOf("/") + 1, img.indexOf("Box")) === color.value
//     ) {
//       tableWrapper.innerHTML = "";
//       porscheImg.src = img;
//       tableWrapper.style.display = "block";
//       tableWrapper.insertAdjacentHTML(
//         "afterbegin",
//         htmlContent(found.year, found.hp, found.motor, found.lifecycle)
//       );
//     }

//     if (
//       img.substring(img.indexOf("/") + 1, img.indexOf("Tay")) === color.value
//     ) {
//       tableWrapper.innerHTML = "";
//       porscheImg.src = img;
//       tableWrapper.style.display = "block";
//       tableWrapper.insertAdjacentHTML(
//         "afterbegin",
//         htmlContent(found.year, found.hp, found.motor, found.lifecycle)
//       );
//     }
//   });
// });

dealerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "exclusive.html";
});
