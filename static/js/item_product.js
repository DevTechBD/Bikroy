$(document).ready(function() {
    let thumbnails = document.getElementsByClassName("thumbnail");
    let activeImages = document.getElementsByClassName("active");

    for (let i=0; i<thumbnails.length; i++) {
        thumbnails[i].addEventListener("click", function() {
            if (activeImages.length > 0) {
                activeImages[0].classList.remove("active");
            }

            this.classList.add("active");
            document.getElementById("featured").src = this.src;
        });
    }

});

$('.item-slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 2,
    dots: false,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 951,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 661,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 581,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 501,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 401,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 331,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
    ]
});

$('.related-item-slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 951,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 620,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 451,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});