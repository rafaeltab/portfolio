import { NextFont } from "next/dist/compiled/@next/font";
import { Text } from "@visx/text";
import { scaleLog } from "@visx/scale";
import Wordcloud from "@visx/wordcloud/lib/Wordcloud";
import { useRef, useState } from "react";
import { useWindowSize } from "@src/hooks/window_size";

const words: WordData[] = [
	{
		text: "ASP.NET",
		value: 100
	},
	{
		text: "ExpressJS",
		value: 90
	},
	{
		text: "React",
		value: 80
	},
	{
		text: "Angular",
		value: 50
	},
	{
		text: "WPF",
		value: 40
	},
	{
		text: "Flutter",
		value: 70
	},
	{
		text: "Postgresql",
		value: 70
	},
	{
		text: "SQL Server",
		value: 60
	},
];

const colors = [
	{
		color: "rgb(239,68,68)",
		threshold: 0.8
	},
	{
		color: "rgb(248, 113, 113)",
		threshold: 0.6
	},
	{
		color: "rgb(115, 115, 115)",
		threshold: 0.4
	},
	{
		color: "rgb(82,82,82)",
		threshold: 0.2
	},
	{
		color: "rgb(64,64,64)",
		threshold: 0
	}
];

type WordData = {
	text: string,
	value: number
}

const minSize = 30;
const maxSize = 50;
const fontScale = scaleLog({
	domain: [Math.min(...words.map((w) => w.value)), Math.max(...words.map((w) => w.value))],
	range: [minSize, maxSize],
});

function getWordColor(size: number) {
	let normal = (size - minSize) / (maxSize - minSize);
	console.log(normal);
	for (let color of colors) {
		if (color.threshold <= normal) return color.color;
	}
	return "black";
}

export function TechCloud(props: { font: NextFont }) {
	useWindowSize();
	const divRef = useRef<HTMLDivElement>(null);
	return (
		<div className="wordcloud" ref={divRef}>
			<Wordcloud
				words={words}
				fontSize={(datum: WordData) => fontScale(datum.value)}
				width={divRef.current?.clientWidth ?? 0}
				height={300}
				font={props.font.style.fontFamily}
				padding={2}
				spiral={"archimedean"}
				rotate={0}
				random={() => 0.5}
			>
				{(cloudWords) => { 
					return cloudWords.map((w) => (
						<Text
							key={w.text}
							fill={getWordColor(w.size ?? 0)}
							textAnchor={'middle'}
							transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
							fontSize={w.size}
							fontFamily={w.font}
						>
							{w.text}
						</Text>
					))
				}
				}
			</Wordcloud>
		</div>
	);
}
