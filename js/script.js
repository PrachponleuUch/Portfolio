let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
  let header = document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const contactValidation = (e) => {
  const username = document.getElementsByName('username')[0].value;
  const email = document.getElementsByName('email')[0].value;
  const subject = document.getElementsByName('subject')[0].value;
  const message = document.getElementsByName('message')[0].value;

  if (!username || !email || !subject || !message)
    {
      alert("Please fill in all the required fields 🙏");
      return 0;
    }
  
  if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email)) 
    {
      alert("Please enter a valid email 🙏");
      return 0;
    }
  
  sendEmail(e);
}

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID, templateID, # + form, publicKey
  emailjs.sendForm('service_cmt1mqi', 'template_oqgk3nc', '#contact-form', 'QzQ3_GKSn9YCOzoit')
    .then(() => {
      // Show message to user
      contactMessage.textContent = 'Message has been sent successfully ✅';
      // Delete message after 10s
      setTimeout(() => {
        contactMessage.textContent = '';
      }, 10000);
      // Clear all input field
      contactForm.reset();
    }, () => {
      // Show error message
      contactMessage.textContent = 'Message failed to sent ❌';
    });
};

contactForm.addEventListener('submit', contactValidation);


ScrollReveal({ 
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 50
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .info, .project-box, #contact-form, .edu-content', { origin: 'bottom' });
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
  strings: ['Web Developer', 'Software Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
})
