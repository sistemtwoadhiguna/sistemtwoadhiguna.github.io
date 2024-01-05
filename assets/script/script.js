console.log("%cLedwin W", "color:yellow; font-size:30px; text-decoration: underline");

setTimeout(function(){
   if(window.matchMedia('(max-width: 576px)').matches) {
      ScrollReveal({ 
         reset: false,
         distance: '90px',
         duration: 1900,
         delay: 500
      });
      ScrollReveal().reveal('.reveal-top', { origin: 'top' });
      ScrollReveal().reveal('.reveal-bottom, tr', { origin: 'bottom' });
      ScrollReveal().reveal('.reveal-left', { origin: 'left' });
      ScrollReveal().reveal('.reveal-right', { origin: 'right' });
   } else {
      ScrollReveal({ 
      reset: false,
      distance: '90px',
      duration: 1900,
      delay: 300
   });
      ScrollReveal().reveal('.reveal-top', { origin: 'top' });
      ScrollReveal().reveal('.reveal-bottom, tr', { origin: 'bottom' });
      ScrollReveal().reveal('.reveal-left', { origin: 'left' });
      ScrollReveal().reveal('.reveal-right', { origin: 'right' });
   };
}, 650)
// javascript library