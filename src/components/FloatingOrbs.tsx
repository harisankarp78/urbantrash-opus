import { useEffect, useRef } from 'react';

interface FloatingOrbsProps {
  className?: string;
  count?: number;
}

const FloatingOrbs = ({ className = '', count = 6 }: FloatingOrbsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const orbs = container.querySelectorAll('.floating-orb');
      orbs.forEach((orb, index) => {
        const orbElement = orb as HTMLElement;
        const orbRect = orbElement.getBoundingClientRect();
        const orbCenterX = orbRect.left + orbRect.width / 2 - rect.left;
        const orbCenterY = orbRect.top + orbRect.height / 2 - rect.top;

        const distance = Math.sqrt(
          Math.pow(mouseX - orbCenterX, 2) + Math.pow(mouseY - orbCenterY, 2)
        );

        const maxDistance = 150;
        const influence = Math.max(0, 1 - distance / maxDistance);
        
        const moveX = (mouseX - orbCenterX) * influence * 0.2;
        const moveY = (mouseY - orbCenterY) * influence * 0.2;
        
        const scale = 1 + influence * 0.5;
        const opacity = 0.1 + influence * 0.4;

        orbElement.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`;
        orbElement.style.opacity = opacity.toString();
      });
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="floating-orb absolute rounded-full blur-sm transition-all duration-300 ease-out"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            background: `linear-gradient(135deg, hsl(var(--primary) / 0.2), hsl(var(--accent) / 0.1))`,
            opacity: 0.1,
            animationDelay: `${index * 0.5}s`,
            animation: `float ${3 + Math.random() * 2}s ease-in-out infinite alternate`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs;