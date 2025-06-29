'use client';

import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

interface SignaturePadProps {
  onSave: (dataUrl: string) => void;
}

export function SignaturePad({ onSave }: SignaturePadProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ratio = Math.max(window.devicePixelRatio || 1, 1);
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      const context = canvas.getContext('2d');
      if (context) {
        context.scale(ratio, ratio);
        context.lineCap = 'round';
        context.strokeStyle = '#0a0e1a';
        context.lineWidth = 3;
      }
    }
  }, []);

  const getCoordinates = (event: MouseEvent | TouchEvent) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    if (event instanceof MouseEvent) {
      return { x: event.clientX - rect.left, y: event.clientY - rect.top };
    }
    if (event.touches && event.touches.length > 0) {
      return { x: event.touches[0].clientX - rect.left, y: event.touches[0].clientY - rect.top };
    }
  };

  const startDrawing = (event: React.MouseEvent | React.TouchEvent) => {
    const coords = getCoordinates(event.nativeEvent);
    if (coords) {
      const context = canvasRef.current?.getContext('2d');
      if (context) {
        context.beginPath();
        context.moveTo(coords.x, coords.y);
        setIsDrawing(true);
        setHasDrawn(true);
      }
    }
  };

  const draw = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    const coords = getCoordinates(event.nativeEvent);
    if (coords) {
      const context = canvasRef.current?.getContext('2d');
      if (context) {
        context.lineTo(coords.x, coords.y);
        context.stroke();
      }
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const context = canvasRef.current?.getContext('2d');
    if (context) {
      context.closePath();
    }
  };

  const clearPad = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        setHasDrawn(false);
      }
    }
  };

  const handleSave = () => {
    if (canvasRef.current) {
        onSave(canvasRef.current.toDataURL('image/png'));
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative w-full aspect-[2/1] bg-muted/30 border-2 border-dashed rounded-lg">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="w-full h-full"
        />
         {!hasDrawn && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <p className="text-muted-foreground">Sign here...</p>
            </div>
         )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" onClick={clearPad}>Clear</Button>
        <Button onClick={handleSave} disabled={!hasDrawn}>Save Signature</Button>
      </div>
    </div>
  );
}
