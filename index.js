'use strict';
const title = document.getElementById('h1');
let angle = 0;

function shake() {
  const x = Math.sin(angle) * 6;
  title.style.transform = `translateX(${x}px)`
  angle += 0.08;
  requestAnimationFrame(shake);
}

shake();
