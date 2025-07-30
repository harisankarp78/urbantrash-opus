import { useEffect, useRef, useState } from 'react';

interface Shape {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  type: 'circle' | 'triangle' | 'square';
  vx: number;
  vy: number;
  color: string;
}

interface InteractiveShapesProps {
  className?: string;
}

const InteractiveShapes = ({ className = '' }: InteractiveShapesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize shapes
    const initialShapes: Shape[] = [];
    const colors = ['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--primary-glow))'];
    
    for (let i = 0; i < 8; i++) {
      initialShapes.push({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 10,
        opacity: Math.random() * 0.3 + 0.1,
        type: ['circle', 'triangle', 'square'][Math.floor(Math.random() * 3)] as 'circle' | 'triangle' | 'square',
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    setShapes(initialShapes);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      setShapes(prevShapes => 
        prevShapes.map(shape => {
          // Mouse interaction - shapes are attracted to cursor
          const dx = mousePos.x - shape.x;
          const dy = mousePos.y - shape.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          let newVx = shape.vx;
          let newVy = shape.vy;
          let newOpacity = shape.opacity;

          if (distance < 100) {
            const force = (100 - distance) / 100 * 0.02;
            newVx += (dx / distance) * force;
            newVy += (dy / distance) * force;
            newOpacity = Math.min(0.6, shape.opacity + force * 2);
          } else {
            newOpacity = Math.max(0.1, newOpacity * 0.99);
          }

          // Apply some friction
          newVx *= 0.98;
          newVy *= 0.98;

          // Update position
          let newX = shape.x + newVx;
          let newY = shape.y + newVy;

          // Bounce off walls
          if (newX <= shape.size || newX >= canvas.width - shape.size) {
            newVx *= -0.8;
            newX = Math.max(shape.size, Math.min(canvas.width - shape.size, newX));
          }
          if (newY <= shape.size || newY >= canvas.height - shape.size) {
            newVy *= -0.8;
            newY = Math.max(shape.size, Math.min(canvas.height - shape.size, newY));
          }

          // Draw shape
          ctx.save();
          ctx.globalAlpha = newOpacity;
          ctx.fillStyle = shape.color;
          ctx.strokeStyle = shape.color;
          ctx.lineWidth = 2;

          switch (shape.type) {
            case 'circle':
              ctx.beginPath();
              ctx.arc(newX, newY, shape.size, 0, Math.PI * 2);
              ctx.fill();
              break;
            case 'triangle':
              ctx.beginPath();
              ctx.moveTo(newX, newY - shape.size);
              ctx.lineTo(newX - shape.size, newY + shape.size);
              ctx.lineTo(newX + shape.size, newY + shape.size);
              ctx.closePath();
              ctx.stroke();
              break;
            case 'square':
              ctx.strokeRect(newX - shape.size/2, newY - shape.size/2, shape.size, shape.size);
              break;
          }
          ctx.restore();

          return {
            ...shape,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
            opacity: newOpacity
          };
        })
      );

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePos, shapes]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-auto ${className}`}
      style={{ zIndex: 1 }}
    />
  );
};

export default InteractiveShapes;