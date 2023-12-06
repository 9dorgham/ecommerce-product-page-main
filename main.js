const nextButton = document.querySelector('.product-carousel .next')
const previousButton = document.querySelector('.product-carousel .previous')
const closeButton = document.querySelector('.product-carousel .close')

const carouselItems = document.querySelector('.product-carousel')


const state = {
    currentStory: carouselItems.querySelector('[data-order="0"]')
}

carouselItems.addEventListener('click', (e) => {
    const middel = carouselItems.offsetLeft + carouselItems.clientWidth / 2;


    navigationItems(
        e.clientX > middel
        ? "next"
        : "prev"
    )

})

const navigationItems = (direction) => {
    
}