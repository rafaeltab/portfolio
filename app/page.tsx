"use client"

import { Container } from "@src/components/container";
import { GitThread, ThreadElement } from "@src/components/thread/gitThread";
import { useRef } from "react";
import { HeroSection } from "@src/components/heroSection";
import Balancer from "react-wrap-balancer";

export default function Home() {

	const threadElements = [
		{
			relativeTo: useRef<HTMLDivElement | null>(null),
			kind: "commit"
		},
		{
			relativeTo: useRef<HTMLDivElement | null>(null),
			kind: "commit"
		},
		{
			relativeTo: useRef<HTMLDivElement | null>(null),
			kind: "commit"
		},
		// {
		// 	relativeTo: useRef<HTMLDivElement | null>(null),
		// 	kind: "commit"
		// }
	] satisfies ThreadElement[];

	return (
		<div className="items-center justify-center">
			<Container size="body">
				<GitThread thread={threadElements} />
				<HeroSection />
				<div className="pl-20">
					<h2 ref={threadElements[0].relativeTo} className="text-2xl mb-4" >Learn</h2>
					<h3 className="text-4xl tracking-normal w-3/4">
						<Balancer>
							<span className={
								"text-red-400"
							}>
								 Embark on my transformative learning journey.
							</span>&nbsp;
							Explore the breadth of knowledge and expertise I&apos;ve acquired, where each lesson has fueled my passion for continuous growth and innovation.
						</Balancer>
					</h3>
				</div>
				<div className="pl-20">
					<h2 ref={threadElements[1].relativeTo} className="text-2xl mb-4" >Practice</h2>
					<h3 className="text-4xl tracking-normal w-3/4">
						<Balancer>
							<span className={
								"text-green-400"
							}>
								Putting Knowledge into Action.
							</span>&nbsp;
							I&apos;ve harnessed the power of hands-on experience to solidify my skills, honing them into tools I use to craft exceptional solutions and drive continuous improvement.
						</Balancer>
					</h3>
				</div>
				<div className="pl-20">
					<h2 ref={threadElements[2].relativeTo} className="text-2xl mb-4" >Inspire</h2>
					<h3 className="text-4xl tracking-normal w-3/4">
						<Balancer>
							<span className={
								"text-blue-400"
							}>
								Empowering the Engineering Community.
							</span>&nbsp;
							I share knowledge and experience to inspire fellow engineers. Through teaching and mentoring, I enrich their journeys and deepen my understanding, fostering growth and expertise.
						</Balancer>
					</h3>
				</div>
			</Container>
		</div>
	)
}
