import Image from "next/image";
import Boxx from "@/public/Box.svg";
import GQ from "@/public/box/image 13.svg";
import Guardian from "@/public/box/image 14.svg";
import NYT from "@/public/box/image 15.svg";
import Mashable from "@/public/box/image 16.svg";
import CNN from "@/public/box/image 17.svg";
import WSJ from "@/public/box/image 18.svg";
import Check from "@/public/DoCheck.svg";

const Box = () => {
	return (
		<div className="mt-4 md:mt-20 pt-5 md:py-20">
			<div className="max-w-[1304px] mx-auto">
				<div className="flex flex-col font-light text-[#3F3631] text-center items-center gap-6">
					<p className="text-4xl md:text-5xl px-6">{"What’s"} in the box?</p>
					<Image src={Boxx} alt="box" />
					<p className="uppercase font-medium">featured on</p>
					<div className="grid grid-cols-3 lg:grid-cols-6 gap-3 md:gap-14 ">
						<Image src={GQ} alt="gq" className="w-[85px] md:w-full" />
						<Image
							src={Guardian}
							alt="guardian"
							className="w-[85px] md:w-full"
						/>
						<Image src={NYT} alt="nyt" className="w-[85px] md:w-full" />
						<Image
							src={Mashable}
							alt="mashable"
							className="w-[85px] md:w-full"
						/>
						<Image src={CNN} alt="cnn" className="w-[85px] md:w-full" />
						<Image src={WSJ} alt="wsj" className="w-[85px] md:w-full" />
					</div>
					<div className="border my-5 md:my-9 border-[#C4C4C4] w-80 md:w-[70%] h-[1px] lg:max-w-[1100px]" />
					<ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-14">
						<li className="flex items-center gap-4">
							<Image src={Check} alt="check" />
							<p className="text-xl md:text-3xl font-light text-[#3F3631] ">
								1 Firebeeheadband
							</p>
						</li>
						<li className="flex items-center gap-4">
							<Image src={Check} alt="check" />
							<p className="text-xl md:text-3xl font-light text-[#3F3631] ">
								1 Charging cable
							</p>
						</li>
						<li className="flex items-center gap-4">
							<Image src={Check} alt="check" />
							<p className="text-xl md:text-3xl font-light text-[#3F3631] ">
								1 User manual
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Box;
