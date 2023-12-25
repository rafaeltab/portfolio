"use client"

import { Container } from "@src/components/container";
import { GitThread, ThreadElement } from "@src/components/thread/gitThread";
import { useRef } from "react";
import { HeroSection } from "@src/components/heroSection";
import Balancer from "react-wrap-balancer";
import { Card } from "@src/components/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import ReactWordcloud from "react-wordcloud";
import { Inter } from "next/font/google";
import { TechCloud } from "@src/components/techcloud";

const inter = Inter({
	subsets: ['latin'],
	weight: "500"
});

export default function Home() {

	const threadElements = [
		{
			relativeTo: useRef<HTMLDivElement | null>(null),
			kind: "commit",
			color: "rgb(239,68,68)",
			beforeGradient: [],
			afterGradient: ["rgb(239,68,68)"],
		},
		{
			relativeTo: useRef<HTMLDivElement | null>(null),
			kind: "commit",
			color: "rgb(34,197,94)",
			beforeGradient: ["rgb(34,197,94)"],
			afterGradient: ["rgb(34,197,94)"],
		},
		{
			relativeTo: useRef<HTMLDivElement | null>(null),
			kind: "commit",
			color: "rgb(59,130,246)",
			beforeGradient: ["rgb(59,130,246)"],
			afterGradient: [],
		},
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
								"text-red-500"
							}>
								Embark on my transformative learning journey.
							</span>&nbsp;
							Explore the breadth of knowledge and expertise I&apos;ve acquired, where each lesson has fueled my passion for continuous growth and innovation.
						</Balancer>
					</h3>
				</div>
				<div className="w-full grid grid-cols-2 grid-rows-2 gap-8 my-10">
					<Card className="row-span-2" />
					<Card className="flex flex-col">
						<p className="text-2xl w-full text-gray-400">Learned <span className="text-red-500 font-bold">10+</span> programming languages</p>
						<div className="w-1/2 mx-auto">
							<ol className="list-decimal font-bold text-xl">
								<li className="text-red-500">C#</li>
								<li className="text-red-500">TypeScript</li>
								<li className="text-red-400">Dart</li>
								<li className="text-neutral-500">Java</li>
								<li className="text-neutral-600">Rust</li>
								<li className="text-neutral-700">...</li>
							</ol>
						</div>
						<div className="">
							<a href="#" className="float-right text-lg font-semibold text-neutral-50">Discover all programming languages <FontAwesomeIcon icon={faArrowRight} /></a>
						</div>
					</Card>
					<Card className="flex flex-col">
						<p className="text-2xl w-full flex-1 text-gray-400">Learned <span className="text-red-500 font-bold">20+</span> technologies</p>
						<div>
							<TechCloud font={inter}/>
						</div>
						<div>
							<a href="#" className="float-right text-lg text-neutral-50">Explore the technologies <FontAwesomeIcon icon={faArrowRight} /></a>
						</div>
					</Card>
				</div>
				<div className="pl-20">
					<h2 ref={threadElements[1].relativeTo} className="text-2xl mb-4" >Practice</h2>
					<h3 className="text-4xl tracking-normal w-3/4">
						<Balancer>
							<span className={
								"text-green-500"
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
								"text-blue-500"
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
