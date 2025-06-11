const slide = document.getElementById('slide');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

// Array of image URLs (use any links or your own images)
const images = [
    'https://picsum.photos/id/1015/300/200',
    'https://picsum.photos/id/1016/300/200',
    'https://picsum.photos/id/1021/300/200',
    'https://picsum.photos/id/1025/300/200'
  ];

let current = 0;

// Initial render
slide.src = images[current];

// Next button
nextBtn.addEventListener('click', () => {
  current = (current + 1) % images.length;
  slide.src = images[current];
});

// Previous button
prevBtn.addEventListener('click', () => {
  current = (current - 1 + images.length) % images.length;
  slide.src = images[current];
});
