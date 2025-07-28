import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const WorldMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [isKeySet, setIsKeySet] = useState(false);

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      projection: 'globe',
      zoom: 1.2,
      center: [20, 20],
      pitch: 0,
      interactive: false,
    });

    // Add atmosphere and fog effects with orange tint
    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(20, 10, 5)',
        'high-color': 'rgb(40, 20, 10)',
        'horizon-blend': 0.1,
      });

      // Add custom styling to match orange theme
      map.current?.setPaintProperty('land', 'fill-color', 'hsl(20, 15%, 8%)');
      map.current?.setPaintProperty('water', 'fill-color', 'hsl(0, 0%, 3%)');
    });

    // Slow rotation animation
    const secondsPerRevolution = 300;
    let spinEnabled = true;

    function spinGlobe() {
      if (!map.current || !spinEnabled) return;
      
      const distancePerSecond = 360 / secondsPerRevolution;
      const center = map.current.getCenter();
      center.lng -= distancePerSecond;
      map.current.easeTo({ center, duration: 1000, easing: (n) => n });
    }

    map.current.on('moveend', () => {
      spinGlobe();
    });

    spinGlobe();
  };

  const handleSetApiKey = () => {
    if (apiKey.trim()) {
      setIsKeySet(true);
      initializeMap(apiKey.trim());
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!isKeySet) {
    return (
      <div className="relative w-full h-full flex items-center justify-center bg-card/30 rounded-lg border border-border/20">
        <div className="text-center p-6 max-w-md">
          <h3 className="text-lg font-semibold mb-2 text-foreground">Add Mapbox Token</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Enter your Mapbox public token to display the world map.{' '}
            <a 
              href="https://mapbox.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Get token here
            </a>
          </p>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="pk.eyJ1..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleSetApiKey} size="sm">
              Set
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/60 via-transparent to-background/30" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background/40 via-transparent to-background/40" />
    </div>
  );
};

export default WorldMap;