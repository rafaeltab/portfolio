import { useWindowSize } from "@src/hooks/window_size";
import { RefObject, useEffect, useRef, useState } from "react";

export type ThreadElement = {
	relativeTo: RefObject<HTMLElement | undefined>,
	kind: "commit" | "branch-marge" | "branch" | "branch-rebase",
	color: string
	beforeGradient: string[],
	afterGradient: string[]
}

export function GitThread(props: { thread: ThreadElement[] }) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const divRef = useRef<HTMLDivElement | null>(null);
	const windowSize = useWindowSize();

	useEffect(() => {
		if (!canvasRef.current) return;
		if (!divRef.current) return;

		const canvas = canvasRef.current;
		canvas.width = divRef.current.clientWidth;
		canvas.height = divRef.current.clientHeight;

		const divBox = divRef.current.getBoundingClientRect();

		if (!divBox) return;

		const ctx = canvas.getContext('2d');

		if (!ctx) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		var threadBoundingClients = props.thread
			.map(x => ({ ...screenToCanvasSpace(canvas, x.relativeTo.current!.getBoundingClientRect()), origin: x }));

		const pointX = 30;

		let inLine = false;
		for (let i = 0; i < threadBoundingClients.length; i++) {
			let threadBoundingClient = threadBoundingClients[i];

			var point = {
				x: pointX,
				y: getY(threadBoundingClient)
			}

			if (inLine) {
				let gradient = ctx.createLinearGradient(pointX, getY(threadBoundingClients[i - 1]), pointX, point.y);
				addStops(gradient, threadBoundingClients[i - 1].origin, threadBoundingClient.origin);
				ctx.lineWidth = 4;
				ctx.strokeStyle = gradient;
				ctx.lineCap = "round";
				ctx.lineTo(point.x, point.y - 20);
				ctx.stroke();
				ctx.closePath();
			}

			ctx.beginPath();
			ctx.moveTo(point.x, point.y + 20);
			inLine = true;
		}

		for (let threadBoundingClient of threadBoundingClients) {
			var point = {
				x: pointX,
				y: getY(threadBoundingClient)
			}

			const gradientCount = 8;
			for (let i = 0; i < gradientCount; i++) {
				ctx.shadowColor = threadBoundingClient.origin.color;
				ctx.shadowBlur = (i / gradientCount) * 25;
				ctx.shadowOffsetX = 0;
				ctx.shadowOffsetY = 0;
				ctx.beginPath();
				ctx.arc(point.x, point.y, 4, 0, 2 * Math.PI);
				ctx.fill();
				ctx.closePath();
			}

			for (let threadBoundingClient of threadBoundingClients) {
				ctx.beginPath();
				ctx.arc(point.x, point.y, 4, 0, 2 * Math.PI);
				ctx.fillStyle = threadBoundingClient.origin.color;
				ctx.fillStyle = "black";
				ctx.lineWidth = 3;
				ctx.strokeStyle = "white";
				ctx.fill();
				ctx.stroke();
				ctx.closePath();
			}
		}
	}, [props.thread, windowSize]);


	return (<div ref={divRef} className="absolute w-full h-full mt-16 -z-10">
		<canvas ref={canvasRef} className="w-full h-full">
		</canvas>
	</div>);
}

function getY(threadBoundingClient: { y: number, height: number }) {
	return threadBoundingClient.y + threadBoundingClient.height / 2
}

function addStops(gradient: CanvasGradient, a: ThreadElement, b: ThreadElement) {
	const totalGradient = a.afterGradient.length + b.beforeGradient.length;

	for (let i = 0; i < a.afterGradient.length; i++) {
		let aElement = a.afterGradient[i];
		gradient.addColorStop(1 / totalGradient * i, aElement);
	}

	for (let i = a.afterGradient.length; i < totalGradient; i++) {
		let bElement = b.beforeGradient[i - a.afterGradient.length];
		gradient.addColorStop(1 / (totalGradient - 1) * i, bElement);
	}
}


function screenToCanvasSpace(canvas: HTMLCanvasElement, box: DOMRect): { [x in "x" | "y" | "width" | "height"]: number } {
	var canvasRect = canvas.getBoundingClientRect();

	if (!canvasRect) return box;

	return {
		x: box.x - canvasRect.x,
		y: box.y - canvasRect.y,
		width: (box.width / window.innerWidth) * canvas.width,
		height: box.height,
	}
}

