// 1. Unified Intersectional Observer
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                obs.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.05, rootMargin: "0px 0px -20px 0px" });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));
});

// 2. Wave-like Data Particle Canvas Background (Using Brand Colors)
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let width, height;

function initCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    particles = [];
    
    const numParticles = Math.floor((width * height) / 12000); 

    for (let i = 0; i < numParticles; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5 + 0.5, 
            speedX: (Math.random() - 0.5) * 0.4, 
            angle: Math.random() * Math.PI * 2,
            angleSpeed: Math.random() * 0.015 + 0.005 
        });
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(75, 104, 255, 0.3)'; 

    particles.forEach(p => {
        p.x += p.speedX;
        p.angle += p.angleSpeed;
        p.y += Math.sin(p.angle) * 0.6; 

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(animateParticles);
}

// 3. Fluid Rotating Iridescent Header Shape
const molCanvas = document.getElementById('molecule-canvas');
const mCtx = molCanvas.getContext('2d');
let mWidth, mHeight;
let molTime = 0;

function initMoleculeHeader() {
    mWidth = molCanvas.width = molCanvas.offsetWidth;
    mHeight = molCanvas.height = molCanvas.offsetHeight;
}

function drawFluidBlob(x, y, radius, offset, colorStart, colorEnd) {
    mCtx.beginPath();
    const points = 150;
    
    for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const fluctuate = Math.sin(angle * 3 + molTime + offset) * 15 + 
                          Math.cos(angle * 4 - molTime * 1.2) * 20 +
                          Math.sin(angle * 2 + molTime * 0.8) * 25;
        
        const r = radius + fluctuate;
        const px = x + r * Math.cos(angle);
        const py = y + r * Math.sin(angle);
        
        if (i === 0) mCtx.moveTo(px, py);
        else mCtx.lineTo(px, py);
    }
    mCtx.closePath();

    const gradient = mCtx.createLinearGradient(x - radius, y - radius, x + radius, y + radius);
    gradient.addColorStop(0, colorStart);
    gradient.addColorStop(1, colorEnd);
    
    mCtx.fillStyle = gradient;
    mCtx.fill();
}

function animateMoleculeHeader() {
    mCtx.clearRect(0, 0, mWidth, mHeight);
    mCtx.globalCompositeOperation = 'screen';
    
    const centerX = mWidth / 2;
    const centerY = mHeight / 2;
    const baseSize = (Math.min(mWidth, mHeight) / 2) - 55;

    drawFluidBlob(centerX, centerY, baseSize, 0, 'rgba(75, 104, 255, 0.4)', 'rgba(60, 20, 100, 0.6)');
    drawFluidBlob(centerX, centerY, baseSize * 0.85, Math.PI, 'rgba(30, 200, 255, 0.3)', 'rgba(180, 50, 255, 0.4)');
    drawFluidBlob(centerX, centerY, baseSize * 0.65, Math.PI / 2, 'rgba(120, 180, 255, 0.15)', 'rgba(255, 255, 255, 0.05)');

    mCtx.globalCompositeOperation = 'source-over';
    molTime += 0.012;
    
    requestAnimationFrame(animateMoleculeHeader);
}

window.addEventListener('resize', () => {
    initCanvas();
    initMoleculeHeader();
});

initCanvas();
animateParticles();
initMoleculeHeader();
animateMoleculeHeader();