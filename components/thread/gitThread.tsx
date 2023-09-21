import { RefObject, useEffect, useRef } from "react";

export type ThreadElement = {
	relativeTo: RefObject<HTMLElement | undefined>,
	kind: "commit" | "branch-marge" | "branch" | "branch-rebase"
}

export function GitThread(props: { thread: ThreadElement[] }) {

	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const divRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!canvasRef.current) return;
		if (!divRef.current) return;

		const canvas = canvasRef.current;
		canvas.width = divRef.current.clientWidth;
		canvas.height = divRef.current.clientHeight;

		const divBox = divRef.current.getBoundingClientRect();

		if(!divBox) return;

		const ctx = canvas.getContext('2d');

		if (!ctx) return;

		console.log(canvas);

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		var threadBoundingClients = props.thread
			.map(x => screenToCanvasSpace(canvas, x.relativeTo.current!.getBoundingClientRect()));
		
		const pointX = 10;

		for (var threadBoundingClient of threadBoundingClients) {
			var point = {
				x: pointX,
				y: threadBoundingClient.y + threadBoundingClient.height / 2
			}

			ctx.beginPath();
			ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
			ctx.fillStyle = 'blue';
			ctx.fill();
			ctx.closePath();
		}
	}, [props.thread]);


	return (<div ref={divRef} className="absolute w-full h-full mt-16 -z-10">
		<canvas ref={canvasRef} className="w-full h-full">
		</canvas>
	</div>);
}

function screenToCanvasSpace(canvas: HTMLCanvasElement, box: DOMRect): {[x in "x" | "y" | "width" | "height"]: number}{
	var canvasRect = canvas.getBoundingClientRect();

	if(!canvasRect) return box;

	return {
		x: box.x - canvasRect.x,
		y: box.y - canvasRect.y,
		width: (box.width / window.innerWidth) * canvas.width,
		height: box.height,
	}
}
