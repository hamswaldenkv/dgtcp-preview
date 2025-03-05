"use client";

import React, { useState, useRef, useEffect } from "react";

interface DraggableZoomImageProps {
  src: string;
  alt: string;
  initialScale?: number;
  minScale?: number;
  maxScale?: number;
}

interface Position {
  x: number;
  y: number;
}

const DraggableZoomImage: React.FC<DraggableZoomImageProps> = ({
  src,
  alt,
  initialScale = 1,
  minScale = 0.5,
  maxScale = 3,
}) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [scale, setScale] = useState<number>(initialScale);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startPos, setStartPos] = useState<Position>({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  // Handle mouse down event to start dragging
  const handleMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    setIsDragging(true);
    setStartPos({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  // Handle mouse move event during dragging
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    setPosition({
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y,
    });
  };

  // Stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle wheel event for zooming
  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    const scaleChange = e.deltaY * -0.001;
    const newScale = Math.min(
      Math.max(scale + scaleChange, minScale),
      maxScale
    );
    setScale(newScale);
  };

  // Add event listeners when component mounts
  useEffect(() => {
    const image = imageRef.current;
    if (image) {
      image.addEventListener("wheel", handleWheel);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);

      return () => {
        image.removeEventListener("wheel", handleWheel);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, position, scale]);

  return (
    <div className="w-full h-full overflow-hidden relative">
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`origin-center select-none max-w-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
        }}
      />
    </div>
  );
};

export default DraggableZoomImage;
