// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth',
            });
        }
    });
});

// Dynamic Welcome Message
const welcomeMessage = () => {
    const hours = new Date().getHours();
    let greeting = '';
    if (hours < 12) {
        greeting = 'Good Morning!';
    } else if (hours < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }
    document.querySelector('header h1').textContent = `${greeting} Welcome to [Your Name]'s Resume`;
};

welcomeMessage();

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields!');
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address!');
        return;
    }

    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    document.getElementById('contactForm').reset();
});

// Hover Animation for Profile Picture
const profilePic = document.querySelector('.profile-pic');
profilePic.addEventListener('mouseover', () => {
    profilePic.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
});
profilePic.addEventListener('mouseout', () => {
    profilePic.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
});
