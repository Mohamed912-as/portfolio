import { motion } from "framer-motion";
import ComputersCanvas from "./canvas/Computers";
import { forwardRef } from "react";
import { TypeAnimation } from "react-type-animation";

function Hero({ computerref }) {
	return (
		<section className={`relative w-full h-screen mx-auto flex flex-col`}>
			<div
				className={`absolute inset-0 top-[120px] max-w-7xl mx-auto paddingX flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-primary" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>

				<div>
					<h1 className={`heroHeadText`}>
						Hi, I&apos;m{" "}
						<span className="dark:text-five text-primary">
							Shivam
						</span>
					</h1>
					<p className={`heroSubText mt-2`}>
						<TypeAnimation
							sequence={[
								"React/Next.js developer",
								500,
								"Frontend developer",
								500,
								"Tech Team Lead at GDSC MVJCE",
								500
							]}
							preRenderFirstString={true}
							wrapper="span"
							cursor={true}
							repeat={Infinity}
						/>
					</p>
				</div>
			</div>
			<div
				ref={computerref}
				className="w-full h-[800px] absolute top-[170px]"
			></div>

			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-2 border-[#aaa6c3] flex justify-center items-start p-2">
						<motion.div
							animate={{
								y: [0, 24, 0]
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop"
							}}
							className="w-3 h-3 rounded-full bg-[#aaa6c3] mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
}

export default Hero;
