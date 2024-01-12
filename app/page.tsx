"use client"

import { Container } from "@src/components/container";
import { GitThread, ThreadElement } from "@src/components/thread/gitThread";
import { useRef } from "react";
import { HeroSection } from "@src/components/heroSection";
import Balancer from "react-wrap-balancer";
import { Card, CardCluster } from "@src/components/card";
import { Inter } from "next/font/google";
import { TechCloud } from "@src/components/techcloud";
import { ProgressBulbs } from "@src/components/progressBulbs";

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
				<CardCluster>
					<Card className="row-span-2" color="rgba(239,68,68,0.10)">
						<Card.MainText>
							Learned <span className="text-red-500 font-bold">20+</span> technologies
						</Card.MainText>
						<div className="flex-1 z-20 mb-8">
							<TechCloud font={inter} />
						</div>
						<Card.ContinueButton>
							Explore the technologies
						</Card.ContinueButton>
					</Card>
					<Card className="" color="rgba(239,68,68,0.1)">
						<Card.MainText>
							Learned <span className="text-red-500 font-bold">10+</span> programming languages
						</Card.MainText>
						<div className="w-1/2 mx-auto mt-8 mb-8 flex-1 z-20">
							<ol className="list-decimal font-bold text-xl">
								<li className="text-red-500">C#</li>
								<li className="text-red-500">TypeScript</li>
								<li className="text-red-400">Dart</li>
								<li className="text-neutral-500">Java</li>
								<li className="text-neutral-600">Rust</li>
								<li className="text-neutral-700">...</li>
							</ol>
						</div>
						<Card.ContinueButton>
							Discover all programming languages
						</Card.ContinueButton>
					</Card>
					<Card color="rgba(239,68,68,0.1)" >
						<Card.MainText>
							Learning paths
						</Card.MainText>
						<div className="w-full 2xl:w-2/3 lg:w-4/5 mx-auto mt-8 mb-8 flex-1 z-20">
							<div className="m-2 p-4 bg-neutral-900 rounded-md flex justify-between hover:scale-110 transition-transform duration-75">
								<h3 className="font-semibold">Networking</h3>
								<ProgressBulbs color="bg-red-500" borderColor="border-red-500" progress={3} />
							</div>
							<div className="m-2 p-4 bg-neutral-900 rounded-md flex justify-between hover:scale-110 transition-transform duration-75">
								<h3 className="font-semibold">Programming</h3>
								<ProgressBulbs color="bg-red-500" borderColor="border-red-500" progress={5} />
							</div>
							<div className="m-2 p-4 bg-neutral-900 rounded-md flex justify-between hover:scale-110 transition-transform duration-75">
								<h3 className="font-semibold">Ethical Hacking</h3>
								<ProgressBulbs color="bg-red-500" borderColor="border-red-500" progress={3} />
							</div>
							<div className="m-2 p-4 bg-neutral-900 rounded-md flex justify-between hover:scale-110 transition-transform duration-75">
								<h3 className="font-semibold">Artificial Intelligence</h3>
								<ProgressBulbs color="bg-red-500" borderColor="border-red-500" progress={1} />
							</div>
							<div className="m-2 p-4 bg-neutral-900 rounded-md flex justify-between hover:scale-110 transition-transform duration-75">
								<h3 className="font-semibold">Platform Engineering</h3>
								<ProgressBulbs color="bg-red-500" borderColor="border-red-500" progress={3} />
							</div>
							<div className="m-2 p-4 bg-neutral-900 rounded-md flex justify-between hover:scale-110 transition-transform duration-75">
								<h3 className="font-semibold">System Design</h3>
								<ProgressBulbs color="bg-red-500" borderColor="border-red-500" progress={4} />
							</div>
						</div>
						<Card.ContinueButton>
							Discover all programming languages
						</Card.ContinueButton>
					</Card>
				</CardCluster>
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
