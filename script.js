// script.js - Script interaktif sederhana untuk website organisasi

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll untuk navigasi
  document.querySelectorAll('a.nav-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const target = link.getAttribute('href');
      if (target.startsWith('#')) {
        e.preventDefault();
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Efek pada form kontak
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Pesan Anda telah terkirim! (simulasi)');
      form.reset();
    });
  }
});
