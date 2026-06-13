const totalImages = 38; 
const imageExtension = '.png'; 

const galleryContainer = document.getElementById('gallery');
const imgNumberBox = document.getElementById('imgNumberBox');

for (let i = 1; i <= totalImages; i++) {
    const slideDiv = document.createElement('div');
    slideDiv.className = 'insta-slide';
    const img = document.createElement('img');
    img.src = `gallery/${i}${imageExtension}`;
    img.alt = `Slide ${i}`;
    slideDiv.appendChild(img);
    galleryContainer.appendChild(slideDiv);
}

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("insta-slide");
    if (slides.length === 0) return; 
    for (let i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}   
    slides[slideIndex-1].style.display = "block"; 
    imgNumberBox.textContent = slideIndex.toString().padStart(2, '0');
    setTimeout(showSlides, 5000);
}

const logo = document.getElementById('logo');
const waLogo = document.getElementById('waLogo');

function adjustNumberBoxLeftPosition() {
    const galleryRect = galleryContainer.getBoundingClientRect();
    const mmToPx = 3.78;
    const targetLeft = galleryRect.left - (15 * mmToPx) - (5 * mmToPx);
    if (targetLeft < 0 || window.innerWidth < 1160) {
        imgNumberBox.style.left = `5mm`;
    } else {
        imgNumberBox.style.left = `${targetLeft}px`;
    }
}

adjustNumberBoxLeftPosition();
window.addEventListener('resize', adjustNumberBoxLeftPosition);
window.addEventListener('scroll', () => {
    logo.style.transform = `translateY(-${window.scrollY}px)`;
    adjustNumberBoxLeftPosition();
    const galleryRect = galleryContainer.getBoundingClientRect();
    const galleryBase = galleryRect.bottom;
    const viewportHeight = window.innerHeight;
    const mmToPx = 3.78; 
    const currentWaBase = viewportHeight - (3 * mmToPx);

    if (currentWaBase >= galleryBase) {
        const targetBottom = viewportHeight - galleryBase + (3 * mmToPx);
        waLogo.style.bottom = `${targetBottom}px`;
        imgNumberBox.style.bottom = `${targetBottom}px`; 
    } else {
        waLogo.style.bottom = `3mm`;
        imgNumberBox.style.bottom = `3mm`; 
    }
});

waLogo.addEventListener('click', () => {
    waLogo.classList.add('wa-bounce-active');
    setTimeout(() => { waLogo.classList.remove('wa-bounce-active'); }, 300);
});