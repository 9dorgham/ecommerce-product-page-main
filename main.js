const nextButton = document.querySelector('.container .next')
const previousButton = document.querySelector('.container .previous')
const closeButton = document.querySelector('.container .close')

const carouselItems = document.querySelector('.carousel')


class Carousel  {
    constructor(item) {
        this.currentItem = item
        this.index = this.currentItem.dataset.order
    }


    gotNex() {
        console.log(this.index);
        if (this.index == 3) return

        this.currentItem.nextElementSibling.scrollIntoView({behavior: 'smooth'});
        this.currentItem = this.currentItem.nextElementSibling
    }


    goPrev() {
        if (this.index == 0) return;

        this.currentItem.previousElementSibling.scrollIntoView({behavior: 'smooth'})
        this.currentItem = this.currentItem.previousElementSibling
    }
}


let carousel = new Carousel(carouselItems.firstElementChild)

carouselItems.addEventListener('click', (e) => {
    const middel = carouselItems.offsetLeft + carouselItems.clientWidth / 2;


    e.clientX > middel
        ? carousel.gotNex()
        : carousel.goPrev()

})



// const navigationItems = (direction) => {
//     let item = productItem.currentItem;
//     let hasNextItem = productItem.index <= 3;


//     if (direction == 'next') {
//         item.nextElementSibling.scrollIntoView({behavior: 'smooth'})

//         productItem.currentItem = item.nextElementSibling;
//     }
// }


// console.log(productItem.currentItem);