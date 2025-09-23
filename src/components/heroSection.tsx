import { Balancer } from "react-wrap-balancer";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const heroColors = [
  [
    "dark:from-green-600",
    "dark:via-yellow-600",
    "dark:to-red-600",
    "from-green-500",
    "via-yellow-500",
    "to-red-500",
  ],
  [
    "dark:from-blue-600",
    "dark:via-cyan-600",
    "dark:to-green-600",
    "from-blue-500",
    "via-cyan-500",
    "to-green-500",
  ],
  [
    "dark:from-red-600",
    "dark:via-purple-600",
    "dark:to-blue-600",
    "from-red-500",
    "via-purple-500",
    "to-blue-500",
  ],
];

export function HeroSection() {
  const [colorTurn, setColorTurn] = useState<0 | 1 | 2>(0);
  const { theme } = useTheme();
  const [learnMoreHover, setLearnMoreHover] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setColorTurn(((colorTurn + 1) % 3) as 0 | 1 | 2);
    }, 3000);

    return () => clearInterval(interval);
  });
  const textColor = theme == "light" ? "text-black" : "text-zinc-300";
  const transition = "transition-color duration-1000 ";
  const bgGradient = "bg-gradient-to-r";
  const commonClass = `inline font-extrabold text-opacity-0 ${textColor} bg-clip-text ${transition} ${bgGradient}`;
  const inactiveColorClass = "text-opacity-100";

  const allOn = false;

  const learnClass = `${commonClass} ${heroColors[0].join(" ")} ${colorTurn == 0 || allOn ? "" : inactiveColorClass}`;
  const practiceClass = `${commonClass} ${heroColors[1].join(" ")} ${colorTurn == 1 || allOn ? "" : inactiveColorClass}`;
  const inspireClass = `${commonClass} ${heroColors[2].join(" ")} ${colorTurn == 2 || allOn ? "" : inactiveColorClass}`;

  function learnMoreGradientClass(nr: 0 | 1 | 2) {
    return `before:-z-20 before:rounded-lg before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:-m-px before:bg-gradient-to-br ${heroColors[nr].join(" ")}`;
  }

  const learnMoreCommonClass = `w-full h-full absolute rounded-lg before:transition-color before:duration-1000`;
  const learnMoreInactiveClass = "before:opacity-0 ";

  const learnMoreLearnClass = `${learnMoreCommonClass} ${learnMoreGradientClass(0)} ${colorTurn == 0 ? "" : learnMoreInactiveClass} `;
  const learnMorePracticeClass = `${learnMoreCommonClass} ${learnMoreGradientClass(1)} ${colorTurn == 1 ? "" : learnMoreInactiveClass}`;
  const learnMoreInspireClass = `${learnMoreCommonClass} ${learnMoreGradientClass(2)} ${colorTurn == 2 ? "" : learnMoreInactiveClass}`;

  // Add hero title
  // Add hero sub-title

  // <HeroPattern />
  return (
    <div className="">
      <div className="h-screen flex justify-center items-center z-10">
        <div className="items-center flex flex-col">
          <div id="hero-title" className="lg:w-auto w-min">
            <h1>
              <div className="font-extrabold tracking-wider flex flex-wrap lg:flex-nowrap lg:gap-8 text-7xl sm:text-8xl md:text-8xl lg:text-7xl xl:text-8xl">
                <span className={learnClass}>Learn;</span>
                <span className={practiceClass}>Practice;</span>
                <span className={inspireClass}>Inspire;</span>
              </div>
            </h1>
          </div>
          <p className="px-4 text-center dark:text-gray-400 text-gray-600 font-light leading-relaxed tracking-tight mt-12 md:pb-40 pb-24 text-md sm:text-lg md:text-2xl lg:text-xl xl:text-2xl">
            <Balancer>
              The software engineer with a passion for building and designing
              software, a dedication to helping developers learn, and a
              commitment to enhancing the developer experience.
            </Balancer>
          </p>
          <div className="flex gap-16">
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
            <a
              href="#"
              className="h-12 w-36 rounded-lg dark:text-black dark:bg-white text-white bg-black flex justify-center items-center font-bold"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
