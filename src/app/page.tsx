import Image from "next/image";
import { DynamicBlur } from "./components/images/DynamicBlur";
// Dla statycznych zdjęć w Nextjs, aby blur działał należy je zaimportować statycznie tak jak poniżej, podając ścieżkę z skrótem do folderu publicz np "/cowbox.jpg" Next nie jest w stanie odtworzyć samoistnie blura dla zdjęcia.
import StaticImage from "../../public/cowboy.jpg";
import { StaticBlur } from "./components/images/StaticBlur";
import { StaticColor } from "./components/images/StaticColor";
import { DynamicColor } from "./components/images/DynamicColor";
import { OpacityLoad } from "./components/images/OpacityLoad";
import { PropsWithChildren } from "react";

export default function Home() {
  return (
    <div className="p-6 flex flex-col gap-2 min-h-screen items-center justify-center">
      <h1>Sposoby ładowania zdjęć w Next.js 🤠</h1>
      <div className="self-center grid md:grid-cols-2 lg:grid-cols-3 items-start justify-center gap-4">
        <PresentationContainer title="Blur statycznego zdjęcia (Image)">
          <Image
            src={StaticImage}
            alt="Uzupelniaj alta B)"
            placeholder="blur"
            height={350}
            width={0}
            sizes="33vw"
            style={{ width: '100%', height: 350, objectFit: 'cover' }} />
        </PresentationContainer>
        <PresentationContainer title="Rozmycie dynamicznego zdjęcia (DynamicBlur)">
          <DynamicBlur
            url="https://i.pinimg.com/736x/15/b6/90/15b690ad72e8fe1f39c2c56803f16bf5.jpg"
            alt="Uzupelniaj alta B)"
            height={350}
            width={0}
            sizes="33vw"
            style={{ width: '100%', height: 350, objectFit: 'cover' }} />
        </PresentationContainer>

        <PresentationContainer title="Kolor dynamicznego zdjęcia (DynamicColor)">
          <DynamicColor
            url="https://i.pinimg.com/736x/15/b6/90/15b690ad72e8fe1f39c2c56803f16bf5.jpg"
            alt="Uzupelniaj alta B)"
            height={350}
            width={0}
            sizes="33vw"
            style={{ width: '100%', height: 350, objectFit: 'cover' }} />
        </PresentationContainer>

        <PresentationContainer title="Rozmycie statycznego zdjęcia (StaticBlur)">
          <StaticBlur
            src="/cowboy.jpg"
            alt="Uzupelniaj alta B)"
            height={350}
            width={0}
            sizes="33vw"
            style={{ width: '100%', height: 350, objectFit: 'cover' }} />
        </PresentationContainer>

        <PresentationContainer title="Kolor statycznego zdjęcia (StaticColor)">
          <StaticColor
            src="/cowboy.jpg"
            alt="Uzupelniaj alta B)"
            height={350}
            width={0}
            sizes="33vw"
            style={{ width: '100%', height: 350, objectFit: 'cover' }} />
        </PresentationContainer>

        <PresentationContainer title="Ładowanie przezroczystości (OpacityLoad)">
          <OpacityLoad
            src="/cowboy.jpg"
            alt="Uzupelniaj alta B)"
          />
        </PresentationContainer>
      </div>
    </div>

  );
}


const PresentationContainer = ({ children, title }: PropsWithChildren<{ title: string; }>) => {
  return (
    <div className="flex flex-col justify-start gap-2">
      {children}
      <h2>{title}</h2>
    </div>
  );
};