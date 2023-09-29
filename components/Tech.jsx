import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn, textVariant } from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";

const tech = [
	technologies.languages,
	technologies.frameworks,
	technologies.libraries,
	technologies.databases,
	technologies.tools
];

const techVariants = [
	"Languages",
	"Frameworks",
	"Libraries",
	"Databases",
	"Tools"
];

function Tech() {
	const languages = tech.map((technology, index) => (
		<div
			className="w-full h-fit flex gap-2 md:flex-row flex-col"
			key={index}
		>
			<h3 className="md:hidden">{techVariants[index]}</h3>
			<div className="w-full flex flex-row flex-wrap gap-2">
				{technology.map((tech, index) => (
					<Link
						href={tech.link}
						key={tech.name}
						target="_blank"
						className="flex flex-row"
					>
						<motion.div
							variants={fadeIn(
								"right",
								"spring",
								index * 0.2,
								0.75
							)}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true, amount: 0.25 }}
							className="w-[40px] h-[40px] relative flex flex-row items-center group cursor-pointer"
						>
							<Image
								src={tech.icon}
								alt={tech.name}
								fill={true}
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
							/>

							<div className="opacity-0 w-fit min-w-[80px] bg-bgPrimaryLight dark:bg-bgPrimaryDark text-ctnPrimaryLight dark:text-ctnPrimaryDark text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 px-3 -top-3/4 -left-1/3 pointer-events-none">
								{tech.name}
							</div>
						</motion.div>
					</Link>
				))}
			</div>
		</div>
	));

	const techNames = techVariants.map((tech, index) => (
		<h3 className="h-[50px] md:flex items-center hidden" key={index}>
			{tech}
		</h3>
	));

	return (
		<div className="w-full h-fit p-8" id="about">
			<motion.div
				variants={textVariant()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className="text-center mx-auto"
			>
				<p className={"sectionSubText"}>What I have learnt so far</p>
				<h2 className={"sectionHeadText"}>Skills.</h2>
			</motion.div>

			<motion.div
				variants={fadeIn("", "", 0.1, 1)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className="mt-4 dark:text-ctnSecondaryDark text-ctnSecondaryLight dark:bg-bgSecondaryDark bg-bgSecondaryLight text-[17px] md:w-fit md:min-w-[60%] w-full h-full leading-[30px] flex md:flex-row flex-col gap-4 p-8 md:px-16 mx-auto rounded-lg justify-between backdrop-filter backdrop-blur-xl bg-opacity-10 shadow-sm shadow-primary"
			>
				<motion.div
					variants={textVariant()}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="flex flex-col justify-between h-full gap-5"
				>
					{techNames}
				</motion.div>
				<div className="w-[2px] h-[340px] dark:bg-ctnSecondaryDark bg-ctnSecondaryLight rounded-lg md:flex hidden mx-8" />
				<div className="md:w-[80%] w-full pl-2 h-full flex flex-col gap-8">
					{languages}
				</div>
			</motion.div>
		</div>
	);
}

export default SectionWrapper(Tech, "tech");
