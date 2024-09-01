document.addEventListener('DOMContentLoaded', () => {
  const pads = document.querySelectorAll('.drum-pad');

  pads.forEach(pad => {
    pad.addEventListener('click', () => {
      const soundSrc = pad.getAttribute('data-sound');
      const sound = new Audio(soundSrc);
      sound.play().then(() => {
        console.log(`Playing sound: ${soundSrc}`);
      }).catch(error => {
        console.error('Error playing sound:', error);
      });
    });
  });
});
