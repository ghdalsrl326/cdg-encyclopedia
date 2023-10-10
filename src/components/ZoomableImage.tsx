"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { PiMinusCircleFill, PiPlusCircleFill } from "react-icons/pi";

type ZoomableImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  quality?: number;
};

const ZoomableImage = ({
  src,
  alt,
  width,
  height,
  quality = 100,
}: ZoomableImageProps) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });

  const handleZoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 0.25, 1));
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    dragStartPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const dx = e.clientX - dragStartPos.current.x;
    const dy = e.clientY - dragStartPos.current.y;

    setPosition((prevPosition) => ({
      x: prevPosition.x + dx,
      y: prevPosition.y + dy,
    }));

    dragStartPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const touch = e.touches[0];
    dragStartPos.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const touch = e.touches[0];
    const dx = touch.clientX - dragStartPos.current.x;
    const dy = touch.clientY - dragStartPos.current.y;

    setPosition((prevPosition) => ({
      x: prevPosition.x + dx,
      y: prevPosition.y + dy,
    }));

    dragStartPos.current = { x: touch.clientX, y: touch.clientY };
  };

  return (
    <div className="flex flex-col gap-2 p-8">
      <div
        className="relative w-full h-full overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        <Image
          className="transform transition-transform duration-300 cursor-move"
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          onDragStart={handleDragStart}
          style={{
            transform: `scale(${zoom}) translate(${position.x}px, ${position.y}px)`,
          }}
        />
      </div>
      <div className="flex flex-row justify-center gap-2 transform">
        <button onClick={handleZoomOut} className="focus:outline-none">
          <PiMinusCircleFill className="text-[#FF61D6] h-8 w-8" />
        </button>
        <button onClick={handleZoomIn} className="focus:outline-none">
          <PiPlusCircleFill className="text-[#FF61D6] h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

export default ZoomableImage;
