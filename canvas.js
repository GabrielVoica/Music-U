let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let arrayColores = [
  "green",
  "blue",
  "red",
  "rgba(255,255,0,0.9)",
  "rgba(0,255,0,0.1)",
];

let mouse = {
  x: 0,
  y: 0,
};

class Ball {
  constructor(x, y, vx, vy, r, color) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.r = r;
    this.color = color;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.strokeStyle = "white";
    c.stroke();
  }

  update() {
    if (this.x + this.r > canvas.width || this.x + this.r < 10) {
      this.vx = -this.vx;
    }
    if (this.y + this.r > canvas.height || this.y + this.r < 10) {
      this.vy = -this.vy;
    }

    this.x += this.vx;
    this.y += this.vy;
    this.draw();
  }

  moveLeft() {
    this.draw();
    this.x += 1;
  }
}

let ballArray = [];

for (let i = 0; i < 1000; i++) {
  let x = Math.random() * canvas.height * 2;
  let y = Math.random() * canvas.width;
  let vx = Math.random() * 10;
  let vy = Math.random() * 10;
  let color = Math.floor(Math.random() * 4) + 1;
  ballArray.push(new Ball(x, y, vx, vy, 0.3, arrayColores[color]));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 1000; i++) {
    ballArray[i].update();
  }
}

animate();
