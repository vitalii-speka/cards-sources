const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('focus', () => {
        console.log('click slide', slide.h3);
        clearActiveClasses()

        slide.classList.add('active')
    })
    
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}
