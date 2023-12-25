import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEvent } from "react";

export type CardProps = {
	className?: string,
	color: string
} & React.PropsWithChildren

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
		<div onMouseMove={mouseMove} className={`card-gradient-back w-full p-6 bg-neutral-800 rounded-xl ${props.className != undefined ? props.className : ""}`}>
			<div className="z-10">
			{props.children}
			</div>
		</div>
	);
}

Card.MainText = function MainText(props: React.PropsWithChildren) {
	return (<p className="text-2xl w-full text-gray-400 flex-1">{props.children}</p>);
}

Card.ContinueButton = function ContinueButton(props: React.PropsWithChildren) {
	return (
		<div>
			<a href="#" className="float-right text-lg font-semibold text-neutral-50">{props.children} <FontAwesomeIcon icon={faArrowRight} /></a>
		</div>
	);
}
