import React from 'react';
import Image, { ImageProps } from "next/image";

import fs from "node:fs/promises";

import { getPlaiceholder } from "plaiceholder";
import { StaticImport } from "next/dist/shared/lib/get-img-props";


type StaticBlurProps = Omit<ImageProps, 'src'> & { src: string | StaticImport; };

export const StaticBlur = async ({ src, alt = "Zawsze uzupełniaj alta!", ...props }: StaticBlurProps) => {
  const buffer = await fs.readFile(`./public${src}`);
  const { base64 } = await getPlaiceholder(buffer, { size: 5 });

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      placeholder="blur"
      blurDataURL={base64}
    />
  );
};
