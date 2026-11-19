const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox?.querySelector('img');

document.querySelectorAll('.gallery-item').forEach((button) => {
  button.addEventListener('click', () => {
    const image = button.querySelector('img');
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.showModal();
  });
});

document.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox.close());
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});

document.querySelectorAll('.carousel').forEach((carousel) => {
  const track = carousel.querySelector('.carousel-track');
  const move = (direction) => track.scrollBy({ left: direction * track.clientWidth * 0.82, behavior: 'smooth' });
  carousel.querySelector('.prev').addEventListener('click', () => move(-1));
  carousel.querySelector('.next').addEventListener('click', () => move(1));
});
