'use strict';

var settings = {
  duration: 1000,
  distance: '100px',
  origin: 'bottom',
  scale: 1,
  delay: 100,
  useDelay: 'once'
};

var scrollAnimations = window.sr = ScrollReveal().reveal('.fadeUp', settings, 60);
