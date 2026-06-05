// ============================================================
// DentaLux — main.js
// Bootstrap yo‘q. Faqat oddiy JavaScript.
// - Navbar scroll effekti
// - Mobile burger menu
// - Smooth scroll
// - Active menu
// - Reveal animation
// - Contact form
// - Back to top
// ============================================================

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const burger = document.getElementById("burger");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");
    const allAnchorLinks = document.querySelectorAll('a[href^="#"]');

    const sections = document.querySelectorAll("section[id]");
    const reveals = document.querySelectorAll(".reveal");

    const form = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");
    const phoneInput = document.getElementById("phone");
    const backToTop = document.getElementById("backToTop");

    // ===============================
    // 1. Navbar scroll effekti
    // ===============================
    function handleNavbarScroll() {
      if (!navbar) return;

      if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    window.addEventListener("scroll", handleNavbarScroll, { passive: true });
    handleNavbarScroll();

    // ===============================
    // 2. Burger menu
    // ===============================
    function closeMobileMenu() {
      if (!burger || !navMenu) return;

      navMenu.classList.remove("open");
      burger.classList.remove("active");
      burger.setAttribute("aria-expanded", "false");
    }

    if (burger && navMenu) {
      burger.addEventListener("click", function () {
        const isOpen = navMenu.classList.toggle("open");

        burger.classList.toggle("active", isOpen);
        burger.setAttribute("aria-expanded", String(isOpen));
      });
    }

    // Menu tashqarisi bosilganda yopish
    document.addEventListener("click", function (event) {
      if (!navMenu || !burger) return;

      const clickedInsideMenu = navMenu.contains(event.target);
      const clickedBurger = burger.contains(event.target);

      if (!clickedInsideMenu && !clickedBurger) {
        closeMobileMenu();
      }
    });

    // ESC bosilganda menu yopilsin
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    });

    // ===============================
    // 3. Smooth scroll
    // ===============================
    allAnchorLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        const href = link.getAttribute("href");

        if (!href || href === "#") return;

        const target = document.querySelector(href);
        if (!target) return;

        event.preventDefault();

        const navbarHeight = navbar ? navbar.offsetHeight + 24 : 90;
        const targetTop =
          target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: targetTop,
          behavior: "smooth",
        });

        closeMobileMenu();
      });
    });

    // ===============================
    // 4. Active nav link
    // ===============================
    function setActiveLink() {
      if (!sections.length || !navLinks.length) return;

      let currentSectionId = "";

      sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSectionId = section.getAttribute("id");
        }
      });

      navLinks.forEach(function (link) {
        const href = link.getAttribute("href");
        link.classList.toggle("active", href === "#" + currentSectionId);
      });
    }

    window.addEventListener("scroll", setActiveLink, { passive: true });
    setActiveLink();

    // ===============================
    // 5. Reveal animation
    // ===============================
    if (reveals.length) {
      if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(
          function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
              }
            });
          },
          {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px",
          }
        );

        reveals.forEach(function (element) {
          revealObserver.observe(element);
        });
      } else {
        reveals.forEach(function (element) {
          element.classList.add("is-visible");
        });
      }
    }

    // ===============================
    // 6. Telefon input tozalash
    // ===============================
    if (phoneInput) {
      phoneInput.addEventListener("input", function () {
        phoneInput.value = phoneInput.value.replace(/[^\d+\s()\-]/g, "");
      });
    }

    // ===============================
    // 7. Contact form
    // ===============================
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = form.querySelector('[name="name"]');
        const phoneInputField = form.querySelector('[name="phone"]');
        const messageInput = form.querySelector('[name="message"]');

        const name = nameInput ? nameInput.value.trim() : "";
        const phone = phoneInputField ? phoneInputField.value.trim() : "";
        const message = messageInput ? messageInput.value.trim() : "";

        if (name.length < 2) {
          showStatus("Iltimos, ismingizni to‘liq kiriting.", "error");
          return;
        }

        if (phone.length < 7) {
          showStatus("Iltimos, telefon raqamni to‘g‘ri kiriting.", "error");
          return;
        }

        console.log("Contact form:", {
          name: name,
          phone: phone,
          message: message,
        });

        showStatus("✓ Rahmat! Tez orada siz bilan bog‘lanamiz.", "success");

        form.reset();

        setTimeout(function () {
          if (!formStatus) return;

          formStatus.textContent = "";
          formStatus.className = "form-status";
        }, 5000);
      });
    }

    function showStatus(message, type) {
      if (!formStatus) return;

      formStatus.textContent = message;
      formStatus.className = "form-status " + type;
    }

    // ===============================
    // 8. Back to top
    // ===============================
    if (backToTop) {
      backToTop.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

        closeMobileMenu();
      });
    }

    console.log("DentaLux main.js ishga tushdi");
  });
})();

/* ============================================================
   DENTAL DISEASE PREMIUM SLIDER
   Har 3 sekundda aylanadi
============================================================ */
(function () {
  const slider = document.getElementById("dsSlider");
  const infoBox = document.getElementById("dsInfo");
  const mainBtn = document.getElementById("dsMainBtn");

  if (!slider) return;

  const cards = Array.from(slider.querySelectorAll(".ds-card"));
  if (!cards.length) return;

  let current = 0;
  let timer = null;

  function setText() {
    const activeCard = cards[current];
    const title = activeCard.dataset.title || "Tish kasalligi";
    const desc = activeCard.dataset.desc || "";

    if (infoBox) {
      infoBox.innerHTML = `<p><strong>${title}.</strong> ${desc}</p>`;
    }

    if (mainBtn) {
      mainBtn.textContent = `${title} haqida`;
    }
  }

  function updateCards() {
    cards.forEach((card) => {
      card.classList.remove(
        "active",
        "prev",
        "prev-2",
        "next",
        "next-2",
        "hidden"
      );

      card.classList.add("hidden");
    });

    const total = cards.length;

    const prev2 = (current - 2 + total) % total;
    const prev1 = (current - 1 + total) % total;
    const next1 = (current + 1) % total;
    const next2 = (current + 2) % total;

    cards[current].classList.remove("hidden");
    cards[current].classList.add("active");

    cards[prev1].classList.remove("hidden");
    cards[prev1].classList.add("prev");

    cards[prev2].classList.remove("hidden");
    cards[prev2].classList.add("prev-2");

    cards[next1].classList.remove("hidden");
    cards[next1].classList.add("next");

    cards[next2].classList.remove("hidden");
    cards[next2].classList.add("next-2");

    setText();
  }

  function nextSlide() {
    current = (current + 1) % cards.length;
    updateCards();
  }

  function startAuto() {
    stopAuto();
    timer = setInterval(nextSlide, 3000);
  }

  function stopAuto() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      current = index;
      updateCards();
      startAuto();
    });
  });

  slider.addEventListener("mouseenter", stopAuto);
  slider.addEventListener("mouseleave", startAuto);

  updateCards();
  startAuto();
})();

/* ============================================================
   DAVOLASH JARAYONI ACTIVE STEP
============================================================ */
(function () {
  const steps = document.querySelectorAll(".process-step");
  const cards = document.querySelectorAll(".process-card");

  if (!steps.length || !cards.length) return;

  let current = 0;
  let timer = null;

  function setActive(index) {
    current = index;

    steps.forEach((step) => step.classList.remove("active"));
    cards.forEach((card) => card.classList.remove("active"));

    if (steps[current]) steps[current].classList.add("active");
    if (cards[current]) cards[current].classList.add("active");
  }

  function nextStep() {
    current = (current + 1) % steps.length;
    setActive(current);
  }

  function startAuto() {
    stopAuto();
    timer = setInterval(nextStep, 3000);
  }

  function stopAuto() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  steps.forEach((step, index) => {
    step.addEventListener("click", () => {
      setActive(index);
      startAuto();
    });
  });

  const processSection = document.getElementById("process");

  if (processSection) {
    processSection.addEventListener("mouseenter", stopAuto);
    processSection.addEventListener("mouseleave", startAuto);
  }

  setActive(0);
  startAuto();
})();