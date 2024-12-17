import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEvent } from "react";

export type CardProps = {
	className?: string,
	color: string
} & React.PropsWithChildren

export type CluserProps = {
} & React.PropsWithChildren;

export function CardCluster(props: CluserProps) {
	return (
		<div className="w-full px-2">
			<div className={`grid grid-cols-1 md:grid-cols-2 grid-flow-row-dense my-10 border-r border-b border-solid border-neutral-200 dark:border-neutral-800`}>
				{props.children}
			</div>
		</div>
	);
}

export function Card(props: CardProps) {
	function mouseMove(e: MouseEvent<HTMLDivElement>) {
		const { currentTarget: target } = e;
		const rect = target.getBoundingClientRect(),
			x = e.clientX - rect.left,
			y = e.clientY - rect.top;

		target.style.setProperty("--mouse-x", `${x}px`);
		target.style.setProperty("--mouse-y", `${y}px`);
		target.style.setProperty("--color", props.color);
	}

	return (
		<div onMouseMove={mouseMove} className={`card-gradient-back w-full p-6 bg-white dark:bg-black border-t border-l border-solid border-neutral-200 dark:border-neutral-800 ${props.className != undefined ? props.className : ""}`}>
			<div className="z-10 flex flex-col h-full">
				{props.children}
			</div>
		</div>
	);
}

Card.MainText = function MainText(props: React.PropsWithChildren) {
	return (<div className="self-start">
		<p className="text-2xl w-full self-start text-gray-700 dark:text-gray-400">{props.children}</p>
	</div>);
}

Card.SubText = function SubText(props: React.PropsWithChildren) {
	return (<div className="self-start">
		<p className="text-lg w-full self-start text-gray-700 dark:text-gray-400">{props.children}</p>
	</div>);
}

Card.ContinueButton = function ContinueButton(props: React.PropsWithChildren) {
	return (
		<div className="self-end">
			<a href="#" className="float-right text-lg font-semibold text-neutral-900 dark:text-neutral-50">{props.children} <FontAwesomeIcon icon={faArrowRight} /></a>
		</div>
	);
}
