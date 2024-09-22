import React from 'react';
import Image, { ImageProps } from "next/image";

import fs from "node:fs/promises";

import { getPlaiceholder } from "plaiceholder";
import { StaticImport } from "next/dist/shared/lib/get-img-props";


type StaticColorProps = Omit<ImageProps, 'src'> & { src: string | StaticImport; };

export const StaticColor = async ({ src, alt = "Zawsze uzupełniaj alta!", ...props }: StaticColorProps) => {
  const buffer = await fs.readFile(`./public${src}`);
  const { color } = await getPlaiceholder(buffer);

  return (
    <div
      className="rounded-[8px]"
      style={{ backgroundColor: color.hex, position: 'relative' }}
    >
      <Image
        {...props}
        src={src}
        alt={alt}
      />
    </div>
  );
};
