document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.hidden');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.remove('hidden');
            element.classList.add('slide-up');
        }, index * 200); 
    });
});

// Toggle sidebar
function toggleSidebar() {
    $('#sidebar').toggleClass('open');
    $('#overlay').toggleClass('active');
}

// search bar 
function openSearch() {
    document.getElementById('searchOverlay').classList.add('active');
}

function closeSearch() {
    document.getElementById('searchOverlay').classList.remove('active');
}
// search bar close 

let currentIndex = 0;
const reviewsWrapper = document.querySelector('.reviews-wrapper');
const totalReviews = document.querySelectorAll('.review').length;

function moveSlider() {
    currentIndex = (currentIndex + 1) % totalReviews;
    updateSliderPosition();
}

function updateSliderPosition() {
    const newTransformValue = -currentIndex * 100;
    reviewsWrapper.style.transform = `translateX(${newTransformValue}%)`;
}

setInterval(moveSlider, 3000);

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".product-card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.3 }
    );

    cards.forEach((card) => {
        observer.observe(card);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.hidden');

    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.remove('hidden');
            element.classList.add('slide-up');
        }, index * 200);
    });
});

const products = {
    glasses1: {
        title: "Oval Flat Lens Sunglasses",
        img: "./images/glasses1.jpg",
        price: "$89.00",
        desc: "These stylish oval flat lens sunglasses are perfect for sunny days."
    },
    glasses2: {
        title: "Nina Cat Eye Sunglasses",
        img: "./images/glasses2.jpg",
        price: "$145.00",
        desc: "Elegant cat-eye sunglasses for a chic look."
    },
    glasses3: {
        title: "Clubmaster Square Sunglasses",
        img: "./images/glasses3.jpg",
        price: "$430.00",
        desc: "Classic square sunglasses for a timeless look."
    },
    glasses4: {
        title: "Clubmaster Square Prescription",
        img: "./images/glasses4.jpg",
        price: "$212.00",
        desc: "Prescription sunglasses with a square frame."
    },
    glasses5: {
        title: "Octagonal Flat Lens Sunglasses",
        img: "./images/glasses5.jpg",
        price: "$32.00",
        desc: "Unique octagonal sunglasses for a modern look."
    },
    glasses6: {
        title: "Clubround Round Sunglasses",
        img: "./images/glasses6.jpg",
        price: "$42.00",
        desc: "Round sunglasses for a retro vibe."
    },
    glasses7: {
        title: "Prescription Eyeglass Frames",
        img: "./images/glasses7.jpg",
        price: "$22.00",
        desc: "Stylish prescription eyeglass frames."
    },
    glasses8: {
        title: "Double Round Sunglasses",
        img: "./images/glasses8.jpg",
        price: "$21.00",
        desc: "Double round sunglasses for a unique look."
    },
    glasses9: {
        title: "Hexagonal Sunglasses",
        img: "./images/glasses9.jpg",
        price: "$12.00",
        desc: "Hexagonal sunglasses for a bold statement."
    },
    glasses10: {
        title: "Liteforce Square Sunglasses",
        img: "./images/glasses10.jpg",
        price: "$80.00",
        desc: "Lightweight square sunglasses for comfort."
    },
    glasses11: {
        title: "Gradient Aviator Sunglasses",
        img: "./images/glasses11.jpg",
        price: "$211.00",
        desc: "Gradient aviator sunglasses for a stylish look."
    },
    glasses12: {
        title: "Aviator Sunglasses",
        img: "./images/glasses12.jpg",
        price: "$312.00",
        desc: "Classic aviator sunglasses for a timeless style."
    },

    // Lenses Products
    lenses1: {
        title: "Blue Light Lenses",
        img: "./images/lenses1.jpg",
        price: "$79.00",
        desc: "These blue light lenses reduce eye strain from screens."
    },
    lenses2: {
        title: "Anti-Reflective Lenses",
        img: "./images/lenses2.jpg",
        price: "$99.00",
        desc: "Reduce glare with these anti-reflective lenses."
    },
    lenses3: {
        title: "Transition Lenses",
        img: "./images/lenses3.jpg",
        price: "$149.00",
        desc: "Lenses that adjust to light conditions."
    },
    lenses4: {
        title: "Multifocal Lenses",
        img: "./images/lenses4.jpg",
        price: "$249.00",
        desc: "Seamless vision correction for all distances."
    },
    lenses5: {
        title: "Polarized Lenses",
        img: "./images/lenses5.jpg",
        price: "$89.00",
        desc: "Polarized lenses for reduced glare."
    },
    lenses6: {
        title: "Photochromic Lenses",
        img: "./images/lenses6.jpg",
        price: "$129.00",
        desc: "Lenses that darken in sunlight."
    },
    lenses7: {
        title: "UV Protection Lenses",
        img: "./images/lenses7.jpg",
        price: "$59.00",
        desc: "Lenses with 100% UV protection."
    },
    lenses8: {
        title: "High-Index Lenses",
        img: "./images/lenses8.jpg",
        price: "$199.00",
        desc: "Thin and lightweight high-index lenses."
    },
    lenses9: {
        title: "Anti-Fog Lenses",
        img: "./images/lenses9.jpg",
        price: "$69.00",
        desc: "Lenses that prevent fogging."
    },
    lenses10: {
        title: "Scratch-Resistant Lenses",
        img: "./images/lenses10.jpg",
        price: "$79.00",
        desc: "Durable scratch-resistant lenses."
    },
    lenses11: {
        title: "Blue Light Blocking Lenses",
        img: "./images/lenses11.jpg",
        price: "$89.00",
        desc: "Lenses that block harmful blue light."
    },
    lenses12: {
        title: "Progressive Lenses",
        img: "./images/lenses12.jpg",
        price: "$299.00",
        desc: "Progressive lenses for seamless vision."
    }
};

function showProductDetails(productId) {
    const product = products[productId];
    if (product) {
        document.getElementById('product-details-img').src = product.img;
        document.getElementById('product-details-title').innerText = product.title;
        document.getElementById('product-details-price').innerText = product.price;
        document.getElementById('product-details-description').innerText = product.desc;
        document.getElementById('product-details-section').classList.add('active');
    }
}

function goBack() {
    document.getElementById('product-details-section').classList.remove('active');
}

function showPaymentSection() {
    document.getElementById('payment-section').classList.remove('hidden-section');
}
function showSection(sectionId) {
    document.getElementById('glasses-section').classList.add('hidden-section');
    document.getElementById('lenses-section').classList.add('hidden-section');
    document.getElementById('product-details-section').classList.add('hidden-section');
    document.getElementById(sectionId).classList.remove('hidden-section');
}

showSection('glasses-section');

function goBack() {
    document.getElementById('product-details-section').classList.remove('active');
}

document.querySelector("#payment-section form").addEventListener("submit", handlePayNow);

$(document).ready(function() {
    $(".contact-container").addClass("show");
});
