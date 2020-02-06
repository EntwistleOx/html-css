let map;
function initMap() {
    const position = { lat: -33.515530, lng: -70.664850 }
    map = new google.maps.Map(document.querySelector('.map'), {
        center: position,
        zoom: 14
    });
    var marker = new google.maps.Marker({ position, map });
};

// Sticky menu background
window.addEventListener('scroll', function () {
    if (window.scrollY > 90) {
        this.document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        this.document.querySelector('#navbar').style.opacity = 1;
    }
});

// jquery Smooth Scrolling
$('#navbar a, .btn').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

