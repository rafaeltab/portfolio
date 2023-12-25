export type CardProps = {
	className?: string
} & React.PropsWithChildren

export function Card(props: CardProps) {
	return (
		<div className={`w-full p-6 bg-neutral-800 rounded-xl ${props.className != undefined ? props.className : ""}`}>
			{props.children}
		</div>
	);
}
