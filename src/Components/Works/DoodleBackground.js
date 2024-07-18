import React, { useEffect, useRef } from 'react';

const DoodleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Doodle parameters
    const lines = [];
    const numLines = 50;

    // Create initial lines
    for (let i = 0; i < numLines; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
      });
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.lineWidth = 2;

      lines.forEach((line) => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);

        // Update line position
        line.x += line.dx;
        line.y += line.dy;

        // Bounce off edges
        if (line.x < 0 || line.x > canvas.width) line.dx *= -1;
        if (line.y < 0 || line.y > canvas.height) line.dy *= -1;

        ctx.lineTo(line.x, line.y);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default DoodleBackground;