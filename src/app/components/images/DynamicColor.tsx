import React from 'react';
import Image, { ImageProps } from "next/image";

import { getPlaiceholder } from 'plaiceholder';

type DynamicColorProps = Omit<ImageProps, 'src' | 'placeholder' | 'blurDataUrl'> & {
  url: string;
};

export const DynamicColor = async ({ url, alt = "Always fill alt tag! B)", sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw", ...props }: DynamicColorProps) => {
  const res = await fetch(url);
  const buffer = Buffer.from(await res.arrayBuffer());

  const { color } = await getPlaiceholder(buffer);

  return (
    <div className="rounded-[8px]" style={{ position: 'relative', backgroundColor: color.hex }}>
      <Image
        {...props}
        alt={alt}
        src={url}
        sizes={sizes}
      />
    </div>
  );
};
