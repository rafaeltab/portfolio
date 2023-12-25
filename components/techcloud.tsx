import { NextFont } from "next/dist/compiled/@next/font";
import ReactWordcloud, { Word } from "react-wordcloud";

const words: Word[] = [
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
	{
		text: "",
		value: 0
	}
];

const colors = [
	{
		color: "rgb(239,68,68)",
		threshold: 80
	},
	{
		color: "rgb(248, 113, 113)",
		threshold: 70
	},
	{
		color: "rgb(115, 115, 115)",
		threshold: 40
	},
	{
		color: "rgb(82,82,82)",
		threshold: 20
	},
	{
		color: "rgb(64,64,64)",
		threshold: 0
	}
];

export function TechCloud(props: { font: NextFont }) {
	return (
		<ReactWordcloud
			options={{
				fontFamily: props.font.style.fontFamily,
				fontWeight: props.font.style.fontWeight?.toString(),
				fontStyle: props.font.style.fontStyle,
				scale: "sqrt",
				randomSeed: "4",
				rotations: 0,
				deterministic: true,
				enableTooltip: false
			}}
			words={words}
			callbacks={{
				getWordColor(word: Word) {
					for (let color of colors) {
						if (color.threshold <= word.value) return color.color;
					}
					return "black";
				},
			}}
		/>
	);
}
