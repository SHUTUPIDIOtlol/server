const imageFiles = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg"
];

const wrapper = document.getElementById("scrollWrapper");

// duplicate images for seamless loop
const allImages = imageFiles.concat(imageFiles);

allImages.forEach(file => {
  const img = new Image();
  img.src = file;
  img.className = "tilt-img";
  wrapper.appendChild(img);
});

let scrollX = 0;
const speed = 1;

function animate() {
  scrollX -= speed;

  const resetPoint = wrapper.scrollWidth / 2;
  if (scrollX <= -resetPoint) {
    scrollX = 0;
  }

  wrapper.style.transform = `translateX(${scrollX}px) translateY(-50%)`;
  requestAnimationFrame(animate);
}

animate();
