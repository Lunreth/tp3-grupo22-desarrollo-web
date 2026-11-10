// ==============================
// CAMBIAR ENTRE MODO CLARO Y OSCURO
// ==============================

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// Recuperar el tema guardado, si existe.
const savedTheme = localStorage.getItem("nexo-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    if (themeIcon) themeIcon.textContent = "☀️";
} else {
    if (themeIcon) themeIcon.textContent = "🌙";
}

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            if (themeIcon) themeIcon.textContent = "☀️";
            localStorage.setItem("nexo-theme", "dark");
        } else {
            if (themeIcon) themeIcon.textContent = "🌙";
            localStorage.setItem("nexo-theme", "light");
        }
    });
}


// ==============================
// MENÚ RESPONSIVE PARA CELULARES
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    // Abrir y cerrar el menú.
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Cerrar el menú al seleccionar una sección.
    const menuItems = document.querySelectorAll(".nav-links a");

    menuItems.forEach(function (item) {
        item.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });

    // Cerrar el menú con la tecla Escape.
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        }
    });
}