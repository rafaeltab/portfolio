import { Balancer } from "react-wrap-balancer";
import { useState } from "react";
import {
  HeroVariant,
  useHeroGradientClass,
  useHeroVariant,
} from "./heroVariant";

export function HeroSection() {
  return (
    <div className="">
      <div className="h-screen flex justify-center items-center z-10">
        <div className="items-center flex flex-col">
          <HeroText />
          <HeroSubText />
          <HeroButtonGroup>
            <LearnMoreButton />
            <ContactMeButton />
          </HeroButtonGroup>
        </div>
      </div>
    </div>
  );
}

function useLearnMoreGradientClass(variant: HeroVariant) {
  return `before:-z-20 before:rounded-lg before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:-m-px before:bg-gradient-to-br ${useHeroGradientClass(variant)}`;
}

function HeroText() {
  const currentVariant = useHeroVariant();
  const textColor = "text-black dark:text-zinc-300";
  const transition = "transition-color duration-1000 ";
  const bgGradient = "bg-gradient-to-r";
  // pb-2 needed because otherwise the background is smaller than the text, which when clipped leads to smaller letters.
  const commonClass = `pb-2 text-opacity-0 dark:text-opacity-0 ${textColor} ${transition} ${bgGradient} bg-clip-text`;
  const inactiveColorClass = "text-opacity-100 dark:text-opacity-100";

  const learnClass = `${commonClass} ${useHeroGradientClass("learn")} ${currentVariant == "learn" ? "" : inactiveColorClass}`;
  const practiceClass = `${commonClass} ${useHeroGradientClass("practice")} ${currentVariant == "practice" ? "" : inactiveColorClass}`;
  const inspireClass = ` ${commonClass} ${useHeroGradientClass("inspire")} ${currentVariant == "inspire" ? "" : inactiveColorClass}`;

  return (
    <div id="hero-title" className="lg:w-auto w-min">
      <h1>
        <div className="font-extrabold tracking-wider flex flex-wrap lg:flex-nowrap lg:gap-8 text-7xl sm:text-8xl md:text-8xl lg:text-7xl xl:text-8xl">
          <span className={learnClass}>Learn;</span>
          <span className={practiceClass}>Practice;</span>
          <span className={inspireClass}>Inspire;</span>
        </div>
      </h1>
    </div>
  );
}

function HeroSubText() {
  return (
    <p className="px-4 text-center dark:text-gray-400 text-gray-600 font-light leading-relaxed tracking-tight mt-12 md:pb-40 pb-24 text-md sm:text-lg md:text-2xl lg:text-xl xl:text-2xl">
      <Balancer>
        The software engineer with a passion for building and designing
        software, a dedication to helping developers learn, and a commitment to
        enhancing the developer experience.
      </Balancer>
    </p>
  );
}

function LearnMoreButton() {
  const currentVariant = useHeroVariant();
  const [learnMoreHover, setLearnMoreHover] = useState(false);

  const learnMoreCommonClass = `w-full h-full absolute rounded-lg before:transition-color before:duration-1000`;
  const learnMoreInactiveClass = "before:opacity-0 ";

  const learnMoreLearnClass = `${learnMoreCommonClass} ${useLearnMoreGradientClass("learn")} ${currentVariant == "learn" ? "" : learnMoreInactiveClass} `;
  const learnMorePracticeClass = `${learnMoreCommonClass} ${useLearnMoreGradientClass("practice")} ${currentVariant == "practice" ? "" : learnMoreInactiveClass}`;
  const learnMoreInspireClass = `${learnMoreCommonClass} ${useLearnMoreGradientClass("inspire")} ${currentVariant == "inspire" ? "" : learnMoreInactiveClass}`;

  return (
    <div
      className={`relative  h-12 w-36 ${learnMoreHover ? "backdrop-blurry-after" : ""} after:w-44 after:h-44 after:absolute after:top-1/2 after:right-1/2 after:translate-x-1/2 after:-translate-y-1/2 after:flex after:justify-center after:items-center`}
    >
      <span className={learnMoreLearnClass}></span>
      <span className={learnMorePracticeClass}></span>
      <span className={learnMoreInspireClass}></span>
      <a
        href="#"
        onMouseOver={() => setLearnMoreHover(true)}
        onMouseOut={() => setLearnMoreHover(false)}
        className="left-0 right-0 top-0 bottom-0 justify-center flex items-center z-10 absolute rounded-lg dark:bg-black bg-white dark:text-white text-black"
      >
        Learn more
      </a>
    </div>
  );
}

function HeroButtonGroup(props: React.PropsWithChildren) {
  return <div className="flex gap-16">{props.children}</div>;
}

function ContactMeButton() {
  return (
    <a
      href="#"
      className="h-12 w-36 rounded-lg dark:text-black dark:bg-white text-white bg-black flex justify-center items-center font-bold"
    >
      Contact me
    </a>
  );
}
