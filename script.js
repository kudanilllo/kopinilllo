const tombol = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");
const ikon = tombol.querySelector("i");

function aturMenu(terbuka) {
  menu.classList.toggle("active", terbuka);
  ikon.classList.toggle("fa-bars", !terbuka);
  ikon.classList.toggle("fa-xmark", terbuka);
  tombol.setAttribute("aria-expanded", terbuka);
  tombol.setAttribute("aria-label", terbuka ? "Tutup menu" : "Buka menu");
}

tombol.addEventListener("click", function () {
  aturMenu(!menu.classList.contains("active"));
});

menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    aturMenu(false);
  });
});


