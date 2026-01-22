'use strict' ;
const title0 = document.getElementById('h1');
const title1 = document.getElementById('h2');
const title2 = document.getElementById('h3');

let angle = 0;

function shake() {
  const x = Math.sin(angle) * 6;
  title.style.transform = `translateX(${x}px)`;
  angle += 0.08;
  requestAnimationFrame(shake);
}

shake();
