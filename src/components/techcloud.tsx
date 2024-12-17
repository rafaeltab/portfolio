import { NextFont } from "next/dist/compiled/@next/font";
import { Text } from "@visx/text";
import { scaleLog } from "@visx/scale";
import Wordcloud from "@visx/wordcloud/lib/Wordcloud";
import { useRef } from "react";
import { useWindowSize } from "../hooks/window_size";

const words: WordData[] = [
	{ text: "ASP.NET", value: 100 },
	{ text: "Flutter", value: 70 },
	{ text: "React", value: 90 },
	{ text: "ExpressJS", value: 90 },
	{ text: "Postgresql", value: 90 },
	{ text: "Angular", value: 50 },
	{ text: "SQL Server", value: 60 },
	{ text: "WPF", value: 20 },
	{ text: "Kubernetes", value: 90 },
	{ text: "Docker", value: 90 },
	{ text: "CockroachDB", value: 40 },
	{ text: "Grafana", value: 20 },
	{ text: "Prometheus", value: 20 },
	{ text: "Elasticsearch", value: 20 },
	{ text: "React Native", value: 80 },
	{ text: "NodeJS", value: 100 },
	{ text: "NestJS", value: 70 },
	{ text: "Rxjs", value: 50 },
	{ text: "Bun", value: 10 },
	{ text: "Pnpm", value: 50 },
	{ text: "Yarn", value: 70 },
	{ text: "Npm", value: 70 },
	{ text: "Github", value: 100 },
	{ text: "Azure DevOps", value: 80 },
	{ text: "Azure", value: 60 },
	{ text: "AWS", value: 40 },
	{ text: "Linode", value: 50 },
	{ text: "Oracle Cloud Infrastructure", value: 50 },
	{ text: "Kafka", value: 30 },
	{ text: "Vercel", value: 60 },
	{ text: "Unity", value: 70 },
	{ text: "Service Fabric", value: 70 },
	{ text: "IIS", value: 20 },
	{ text: "Enity Framework", value: 80 },
	{ text: "jQuery", value: 40 },
	{ text: "Vitest", value: 20 },
	{ text: "Mocha", value: 70 },
	{ text: "Jest", value: 70 },
	{ text: "MySQL", value: 60 },
	{ text: "Nginx", value: 60 },
	{ text: "cert-manager", value: 50 },
	{ text: "Auth0", value: 20 },
	{ text: "Melos", value: 70 },
	{ text: "Turborepo", value: 90 },
	{ text: "ESLint", value: 90 },
	{ text: "Prettier", value: 60 },
	{ text: "NextJS", value: 70 },
	{ text: "TailwindCSS", value: 70 },

];

const colors = [
	{
		color: "rgb(239,68,68)",
		threshold: 0.9
	},
	{
		color: "rgb(248, 113, 113)",
		threshold: 0.8
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

const minSize = 20;
const maxSize = 40;
const fontScale = scaleLog({
	domain: [Math.min(...words.map((w) => w.value)), Math.max(...words.map((w) => w.value))],
	range: [minSize, maxSize],
});

function getWordColor(size: number) {
	const normal = (size - minSize) / (maxSize - minSize);
	console.log(normal);
	for (const color of colors) {
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
				height={700}
				font={props.font.style.fontFamily}
				padding={(word) => word.value/30}
				spiral={"rectangular"}
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
