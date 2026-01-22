'use strict' ;
const targets = document.getElementById('h1, img');

let angle = 0;

function shake() {
  const x = Math.sin(angle) * 6;

  targets.forEach((el) => {
    el.style.transform = `translateX(${x}px)`;
  });

  angle += 0.08;
  requestAnimationFrame(shake);
}

shake();
