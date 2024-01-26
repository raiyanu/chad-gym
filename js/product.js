document.addEventListener('DOMContentLoaded', function () {
    // Dummy OwlCarousel class for demonstration purposes
    function OwlCarousel(element, options) {
        // Implement Owl Carousel initialization logic here
        // For simplicity, let's just log a message for demonstration
        console.log('Owl Carousel initialized with options:', options);
    }

    // Carousel Initialization
    var customCarousel = document.querySelector('.custom-carousel');
    if (customCarousel) {
        var owlCarouselInstance = new OwlCarousel(customCarousel, {
            autoWidth: true,
            loop: true
        });
    }

    // Item Click Handling
    var carouselItems = document.querySelectorAll('.custom-carousel .item');
    if (carouselItems) {
        carouselItems.forEach(function (item) {
            item.addEventListener('click', function () {
                carouselItems.forEach(function (otherItem) {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });

                item.classList.toggle('active');
            });
        });
    }
});
