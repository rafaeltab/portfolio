"use client"
import { GridPattern } from '@src/components/gridPattern';
import { useEffect, useState } from 'react';

export function HeroPattern() {
	const squareSettings = {
		count: 80,
		xRange: 20,
		yRange: 20
	}

	var [squares, setSquares] = useState<[number, number][]>([]);

	useEffect(() => {
		var squaries: [number, number][] = [];

		for (let i = 0; i < squareSettings.count; i++) {
			var square: [number, number] = [
				randomNumber(squareSettings.xRange),
				randomNumber(squareSettings.yRange)
			]

			squaries.push(square);
		}

		setSquares(_ => {
			return squaries;
		});

		var interval = setInterval(() => {
			var square: [number, number] = [
				randomNumber(squareSettings.xRange),
				randomNumber(squareSettings.yRange)
			];

			setSquares(x => {
				var newSquares = [...x];
				newSquares.shift();
				newSquares.push(square);
				return newSquares;
			})
		}, 10)
		return () => {
			clearInterval(interval);
		};
	}, [squareSettings.count, squareSettings.xRange, squareSettings.yRange]);


	return (
		<div className="absolute inset-0 mx-0 overflow-hidden -z-10 max-w-none">
			<div className="absolute left-1/2 top-0 -ml-[40%] h-1/2 w-4/5">
			<div className="h-1/2 dark:[mask-image:linear-gradient(white,transparent)]">
				<div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-yellow-400 opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-orange-300/30 dark:to-yellow-400/30 dark:opacity-100">
					<GridPattern
						width={72}
						height={56}
						x="-12"
						y="4"
						squares={squares}
						className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
					/>
				</div>
				<svg
					viewBox="0 0 1113 440"
					aria-hidden="true"
					className="absolute left-1/2 top-0 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden"
				>
					<path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z" />
				</svg>
			</div>
		</div>
		</div>
	)
}


function randomNumber(max: number): number {
	return Math.floor(Math.random() * max);
}
