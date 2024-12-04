let OpenNavBar = document.querySelector('.toggle')
let navMenu = document.querySelector('.nav-list')


OpenNavBar.onclick = function () {
    navMenu.classList.toggle('active')
}
document.addEventListener('DOMContentLoaded', function () {
    const letterElement = document.getElementById('animated-letter');

    const animationCompleted = sessionStorage.getItem('animatedCompleted');

    if (!animationCompleted) {
        letterElement.textContent = ' Shreða by name';
        letterElement.addEventListener('animationend', function () {
            letterElement.classList.add('complete');
            sessionStorage.setItem('animatedCompleted', 'true');
        })
    }
    else {
        letterElement.classList.add('complete');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const letterElement = document.getElementById('animation-letter');

    const animationCompleted = sessionStorage.getItem('animationCompleted');

    if (!animationCompleted) {
        letterElement.textContent = ' a front end wizard ';
        letterElement.addEventListener('animationend', function () {
            letterElement.classList.add('complete');
            sessionStorage.setItem('animationCompleted', 'true');
        })
    }
    else {
        letterElement.classList.add('complete');
    }

});
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('a');

    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll)
    })
    function smoothScroll(e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
            behavior: 'smooth'
        });

    }

});

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_ck7gvex', 'template_rpmyoxq', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      if (name && email && message) {
        alert('Successfully submitted');
        form.reset(); // Reset the form after submission
      } else {
        alert('Please fill out all fields');
      
      }
    });
  });
  