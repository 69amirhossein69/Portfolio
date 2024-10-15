// ========toggle icon navbar ========

let menuIcon = document.querySelector('#menu');


let navbar = document.querySelector('.navbar');

menuIcon.onclick = ( ) =>
{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



// ========scroll Selection aactive link ========
// Select all sections in the document
let sections = document.querySelectorAll('section');

// Select all anchor links within the navigation in the header
let navLinks = document.querySelectorAll('header nav a');

// Attach an event listener to the window's scroll event
window.onscroll = () => {
    // Loop through each section in the document
    sections.forEach(sec => {
        // Get the current vertical scroll position of the window
        let top = window.scrollY;

        // Calculate the offset of the current section from the top of the document,
        // subtracting 150 pixels from it
        let offset = sec.offsetTop - 150; 

        // Get the height of the current section
        let height = sec.offsetHeight;

        // Get the ID attribute of the current section
        let id = sec.getAttribute('id');

        // Check if the current vertical scroll position falls within the range
        // of the current section's offset and its offset plus its height
        if (top >= offset && top < offset + height) {
            // If the condition is true, remove the 'active' class from all navigation links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Add the 'active' class to the navigation link corresponding to the current section
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); 
        }
    });


    // ======== sticky navbar  ========


    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    // ======== remove toggle icon and navbar when click navbar lick  ========
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};




ScrollReveal({ 
    // reset: true ,
    distance:  '80px',
    duration: 2000,
    delay: 200

});


ScrollReveal().reveal('.home-content , .heading' , { origin: 'top' });
ScrollReveal().reveal('.home-img , .services-countainer , .protfolio-box  , .contact form'  , { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1 , .about-img'  , { origin: 'left' });
ScrollReveal().reveal('.home-content p , .about-countent'  , { origin: 'right' });









// +++++++++++++++++=======typedjs=========================

const typed = new Typed ('.multiple-txt',{
    strings: ['Frontend Developer' ,'Frontend Developer' ,'Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backdelay: 1000,
    loop: true
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Send email using EmailJS
    emailjs.sendForm('', '', this)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("Your message has been sent successfully!");
    }, function(error) {
        console.log('FAILED...', error);
        alert("Unfortunately, this Feature is not available right now because it requires an API key, and I can't include that in my repository.");
    });
});
