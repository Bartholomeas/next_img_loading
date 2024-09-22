'use client';

import React from 'react';
import Image, { ImageProps } from "next/image";
import { useInView } from "react-intersection-observer";



type OpacityLoadProps = Omit<ImageProps, 'placeholder' | 'blurDataUrl'> & {
};

export const OpacityLoad = ({ alt = "Always fill alt tag! B)", ...props }: OpacityLoadProps) => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7
  });

  return (
    <div ref={ref}
      className="rounded-[8px]"
      style={{ position: 'relative', height: 350, width: '100%', backgroundColor: '#FFD700' }}>
      <Image
        src={props.src}
        fill
        loading="lazy"
        alt={alt}
        style={{
          objectFit: 'cover',
          opacity: inView ? 1 : 0,
          transition: "opacity 0.2s ease-in-out"
        }}
      />
    </div>
  );
};
