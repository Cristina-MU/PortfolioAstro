document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.toggle('hidden');
    });
  } else {
    console.error("El elemento con ID 'hamburger' no se encontró.");
  }
});