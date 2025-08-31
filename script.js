tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f0f4ff',
          100: '#dde6ff',
          200: '#c2d3ff',
          300: '#9cb5ff',
          400: '#758bff',
          500: '#5662ff',
          600: '#3d3cf7',
          700: '#312ed9',
          800: '#2928af',
          900: '#292989',
          950: '#16164e',
        },
        cyan: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        }
      }
    }
  }
}


// Dark mode check before CSS applies
if (
  localStorage.getItem("theme") === "dark" ||
  (!localStorage.getItem("theme") &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("toggle");
  const html = document.documentElement;
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
    toggle.checked = true;
  } else {
    html.classList.remove("dark");
    toggle.checked = false;
  }

  // Toggle theme
  toggle.addEventListener("change", function () {
    if (toggle.checked) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });

  // Toggle mobile menu
  menuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
});

// Close mobile menu on link click
document.querySelectorAll("#mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});