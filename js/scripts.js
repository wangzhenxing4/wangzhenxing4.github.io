// scripts.js

const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const starCount = 200;

function Star() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.speed = Math.random() * 3 + 1;
    this.radius = Math.random() * 4.5;
    this.color = `hsl(${Math.random() * 360}, 100%, 80%)`;
}

Star.prototype.update = function () {
    this.x -= this.speed;
    if (this.x < 0) {
        this.x = canvas.width;
        this.y = Math.random() * canvas.height;
    }
};

Star.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
};

function createStars() {
    for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        star.update();
        star.draw();
    });
    requestAnimationFrame(animate);
}

createStars();
animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
