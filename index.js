'use index' ;
const title = document.querySelector('h1');
let angle = 0;

function shake() {
  if (!title) return;
  
  const x = Math.sin(angle) * 6;
  title.style.transform = `translateX(${x}px)`;
  angle += 0.08;
  requestAnimationFrame(shake);
}

shake();
