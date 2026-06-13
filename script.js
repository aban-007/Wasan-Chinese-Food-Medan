const totalImages = 38; 
const galleryContainer = document.getElementById('gallery');
const imgNumberBox = document.getElementById('imgNumberBox');

// Load images
for (let i = 1; i <= totalImages; i++) {
    const slideDiv = document.createElement('div');
    slideDiv.className = 'insta-slide';
    const img = document.createElement('img');
    img.src = `gallery/${i}.png`;
    slideDiv.appendChild(img);
    galleryContainer.appendChild(slideDiv);
}

let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("insta-slide");
    for (let i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }   
    slides[slideIndex-1].style.display = "block"; 
    imgNumberBox.textContent = slideIndex.toString().padStart(2, '0');
    setTimeout(showSlides, 5000);
}

showSlides();