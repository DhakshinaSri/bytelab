import { useEffect, useRef } from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Orbitron:wght@400;700;900&display=swap');

  .animated-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
    z-index: 0;
    background: #f0f6fb;
  }

  .bg-gradient {
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(ellipse 80% 60% at 20% 20%, rgba(52, 140, 215, 0.12) 0%, transparent 60%),
      radial-gradient(ellipse 60% 80% at 80% 80%, rgba(58, 167, 194, 0.10) 0%, transparent 60%),
      radial-gradient(ellipse 100% 100% at 50% 50%, rgba(240, 246, 251, 1) 0%, #f0f6fb 100%);
  }

  .grid-overlay {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(58, 167, 194, 0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(58, 167, 194, 0.07) 1px, transparent 1px);
    background-size: 60px 60px;
    animation: gridDrift 20s linear infinite;
  }

  @keyframes gridDrift {
    0% { transform: perspective(800px) rotateX(8deg) translateY(0); }
    100% { transform: perspective(800px) rotateX(8deg) translateY(60px); }
  }

  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    animation: orbFloat var(--duration, 12s) ease-in-out infinite alternate;
    opacity: 0.35;
  }

  .orb-1 {
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(52, 140, 215, 0.6), transparent 70%);
    top: -200px; left: -100px;
    --duration: 14s;
  }

  .orb-2 {
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(58, 167, 194, 0.5), transparent 70%);
    bottom: -150px; right: -80px;
    --duration: 10s;
    animation-delay: -5s;
  }

  .orb-3 {
    width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(52, 140, 215, 0.4), transparent 70%);
    top: 50%; left: 60%;
    --duration: 16s;
    animation-delay: -8s;
  }

  @keyframes orbFloat {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(40px, -60px) scale(1.15); }
  }

  .particles-canvas {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .scan-line {
    position: absolute;
    left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(58, 167, 194, 0.5), rgba(52, 140, 215, 0.7), rgba(58, 167, 194, 0.5), transparent);
    animation: scanDown 8s linear infinite;
    opacity: 0.4;
  }

  @keyframes scanDown {
    0% { top: -2px; opacity: 0; }
    5% { opacity: 0.4; }
    95% { opacity: 0.4; }
    100% { top: 100%; opacity: 0; }
  }

  .corner-bracket {
    position: absolute;
    width: 40px; height: 40px;
    opacity: 0.5;
  }
  .corner-bracket::before,
  .corner-bracket::after {
    content: '';
    position: absolute;
    background: #3AA7C2;
  }
  .corner-bracket::before { width: 100%; height: 2px; top: 0; left: 0; }
  .corner-bracket::after { width: 2px; height: 100%; top: 0; left: 0; }

  .corner-br { bottom: 20px; right: 20px; transform: rotate(180deg); }
  .corner-tl { top: 20px; left: 20px; }
  .corner-tr { top: 20px; right: 20px; transform: rotate(90deg); }
  .corner-bl { bottom: 20px; left: 20px; transform: rotate(-90deg); }

  .hex-ring {
    position: absolute;
    border: 1px solid rgba(58,167,194,0.15);
    border-radius: 50%;
    animation: pulse-ring var(--d, 6s) ease-in-out infinite;
  }
  @keyframes pulse-ring {
    0%, 100% { opacity: 0.15; transform: scale(1); }
    50% { opacity: 0.35; transform: scale(1.05); }
  }
`;

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.4 - 0.1,
      alpha: Math.random() * 0.5 + 0.2,
      color: Math.random() > 0.5 ? '58,167,194' : '52,140,215',
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
        ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.y < -5) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width; }
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className="animated-bg">
        <div className="bg-gradient" />
        <div className="grid-overlay" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <canvas ref={canvasRef} className="particles-canvas" style={{ width: '100%', height: '100%' }} />
        <div className="scan-line" />

        {/* Corner brackets */}
        <div className="corner-bracket corner-tl" />
        <div className="corner-bracket corner-tr" />
        <div className="corner-bracket corner-bl" />
        <div className="corner-bracket corner-br" />

        {/* Hex rings */}
        <div className="hex-ring" style={{ width: 700, height: 700, top: '50%', left: '70%', transform: 'translate(-50%,-50%)', '--d': '8s' }} />
        <div className="hex-ring" style={{ width: 500, height: 500, top: '50%', left: '70%', transform: 'translate(-50%,-50%)', '--d': '6s', animationDelay: '-2s' }} />
        <div className="hex-ring" style={{ width: 300, height: 300, top: '50%', left: '70%', transform: 'translate(-50%,-50%)', '--d': '4s', animationDelay: '-4s' }} />
      </div>
    </>
  );
}
