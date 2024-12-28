// Countdown Timer
document.addEventListener("DOMContentLoaded", function () {
    const countdown = document.getElementById('countdown');
    const targetDate = new Date('2024-12-25T00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            countdown.innerHTML = "<h2>Event Started!</h2>";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        countdown.innerHTML = `
            <div class="time-unit">
                <h3>${days}</h3>
                <p>Days</p>
            </div>
            <div class="time-unit">
                <h3>${hours}</h3>
                <p>Hours</p>
            </div>
            <div class="time-unit">
                <h3>${minutes}</h3>
                <p>Minutes</p>
            </div>
            <div class="time-unit">
                <h3>${seconds}</h3>
                <p>Seconds</p>
            </div>`;
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for Animations
const faders = document.querySelectorAll('.fade-in');
const options = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, options);

faders.forEach(fader => {
    observer.observe(fader);
});

// Back-to-Top Button
const backToTopButton = document.createElement("button");
backToTopButton.className = "back-to-top";
backToTopButton.textContent = "↑";
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Google Maps Initialization
function initMap() {
    const lagos = { lat: 6.5244, lng: 3.3792 }; // Lagos, Nigeria
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: lagos
    });

    new google.maps.Marker({
        position: lagos,
        map: map,
        title: "Church Location: Lagos, Nigeria"
    });
}
