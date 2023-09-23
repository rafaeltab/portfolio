import { Balancer } from "react-wrap-balancer";
import { HeroPattern } from "./heroPattern";
import { useEffect, useState } from "react";

export function HeroSection() {
	const colors = [
		["from-green-600", "via-yellow-600", "to-red-600"],
		["from-blue-600", "via-cyan-600", "to-green-600"],
		["from-red-600", "via-purple-600", "to-blue-600"]
	];
	const [colorTurn, setColorTurn] = useState<0 | 1 | 2>(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setColorTurn(((colorTurn + 1) % 3) as 0 | 1 | 2)
		}, 3000);

		return () => clearInterval(interval);
	});
	const transition = "transition-color duration-1000 ";
	const bgGradient = "bg-gradient-to-r";
	const commonClass = `inline font-extrabold text-opacity-0 text-zinc-300 bg-clip-text ${transition} ${bgGradient}`;
	const inactiveColorClass = "text-opacity-100"

	const allOn = false;

	const learnClass = `${commonClass} ${colors[0].join(" ")} ${colorTurn == 0 || allOn ? "" : inactiveColorClass}`;
	const practiceClass = `${commonClass} ${colors[1].join(" ")} ${colorTurn == 1 || allOn ? "" : inactiveColorClass}`;
	const inspireClass = `${commonClass} ${colors[2].join(" ")} ${colorTurn == 2 || allOn ? "" : inactiveColorClass}`;

	function learnMoreGradientClass(nr: 0 | 1 | 2) {
		return `before:-z-20 before:rounded-lg before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:-m-px before:bg-gradient-to-br ${colors[nr].join(" ")}`;
	}

	const learnMoreCommonClass = `w-full h-full absolute rounded-lg before:transition-color before:duration-1000`;
	const learnMoreInactiveClass = "before:opacity-0 ";

	const learnMoreLearnClass = `${learnMoreCommonClass} ${learnMoreGradientClass(0)} ${colorTurn == 0 ? "" : learnMoreInactiveClass} `;
	const learnMorePracticeClass = `${learnMoreCommonClass} ${learnMoreGradientClass(1)} ${colorTurn == 1 ? "" : learnMoreInactiveClass}`;
	const learnMoreInspireClass = `${learnMoreCommonClass} ${learnMoreGradientClass(2)} ${colorTurn == 2 ? "" : learnMoreInactiveClass}`;


	// Add hero title
	// Add hero sub-title

	// <HeroPattern />
	return (<div className="">
		<div className="h-screen flex justify-center items-center z-10">
			<div className="items-center flex flex-col">
				<div id="hero-title" className="lg:w-auto w-min">
					<h1>
						<div className="font-extrabold tracking-wider flex flex-wrap lg:flex-nowrap lg:gap-8 text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl">
							<span className={learnClass}>
								Learn;
							</span>
							<span className={practiceClass}>
								Practice;
							</span>
							<span className={inspireClass}>
								Inspire;
							</span>
						</div>
					</h1>
				</div>
				<p className="px-4 text-center text-gray-400 font-light leading-relaxed tracking-tight mt-12 md:pb-40 pb-24 text-md sm:text-lg md:text-2xl lg:text-xl xl:text-2xl">
					<Balancer>
						The software engineer with a passion for building and designing software, a dedication to helping developers learn, and a commitment to enhancing the developer experience.
					</Balancer>
				</p>
				<div className="flex gap-16">
					<div className="relative h-12 w-36">
						<span className={learnMoreLearnClass}></span>
						<span className={learnMorePracticeClass}></span>
						<span className={learnMoreInspireClass}></span>
						<a href="#" className="left-0 right-0 top-0 bottom-0 justify-center flex items-center z-10 absolute rounded-lg hover:bg-transparent bg-black">Learn more</a>
					</div>
					<a href="#" className="h-12 w-36 rounded-lg text-black bg-white flex justify-center items-center font-bold">
					Contact me
					</a>
				</div>
			</div>
		</div>
	</div >);
}

