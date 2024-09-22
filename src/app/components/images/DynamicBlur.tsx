import React from 'react';
import Image, { ImageProps } from "next/image";

import { getPlaiceholder } from 'plaiceholder';

type DynamicBlurProps = Omit<ImageProps, 'src' | 'placeholder' | 'blurDataUrl'> & {
  url: string;
};

export const DynamicBlur = async ({ url, alt = "Always fill alt tag! B)", sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw", ...props }: DynamicBlurProps) => {
  const res = await fetch(url);
  const buffer = Buffer.from(await res.arrayBuffer());

  const { base64 } = await getPlaiceholder(buffer, {
    size: 5,
  });

  return (
    <Image
      {...props}
      alt={alt}
      src={url}
      placeholder="blur"
      blurDataURL={base64}
      sizes={sizes}
    />
  );
};
