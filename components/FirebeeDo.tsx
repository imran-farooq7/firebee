import Image from "next/image";
import FBDO from "@/public/fbdo.svg";
import Check from "@/public/DoCheck.svg";

const FirebeeDo = () => {
	return (
		<div className="bg-[#FBFCFB] mt-20 py-20">
			<div className="max-w-[1304px] mx-auto">
				<div className="flex flex-col text-[#3F3631] text-center gap-6">
					<h2 className="text-5xl md:text-7xl font-light">
						What will Firebee do for me?
					</h2>
					<p className="text-lg md:text-2xl px-6 md:px-0">
						Firebee will help you gently nudge yourself into a different mental
						state
					</p>
				</div>
				<div className="flex flex-col font-light gap-8 lg:gap-0 lg:flex-row mt-20 items-center px-9 md:px-0 ">
					<Image src={FBDO} alt="firebe do" />
					<ul className="space-y-8 mt-9 md:my-3">
						<li className="flex gap-4 items-center">
							<Image src={Check} alt="check" />
							<p className="text-lg md:text-[28px] text-[#3F3631] items-center">
								{"Can’t sleep?"} Turn on the{" "}
								<span className="deep">deep sleep</span> signal
							</p>
						</li>
						<li className="flex gap-4 items-center">
							<Image src={Check} alt="check" />
							<p className="text-lg md:text-[28px] text-[#3F3631] items-center">
								Feeling tired? Turn on the <span className="alert">alert</span>{" "}
								signal
							</p>
						</li>
						<li className="flex gap-4 items-center">
							<Image src={Check} alt="check" />
							<p className="text-lg md:text-[28px] text-[#3F3631] items-center">
								Feeling anxious? Turn on the <span className="calm">calm</span>{" "}
								signal
							</p>
						</li>
						<li className="flex gap-4 items-center ">
							<Image src={Check} alt="check" />
							<p className="text-lg md:text-[28px] text-[#3F3631] items-center">
								Feeling unproductive? Turn on the{" "}
								<span className="focus">focus</span> signal
							</p>
						</li>
						<li className="flex gap-4 items-center">
							<Image src={Check} alt="check" />
							<p className="text-lg md:text-[28px] text-[#3F3631] items-center">
								Feeling blue? Turn on the <span className="happy">happy</span>{" "}
								signal{" "}
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default FirebeeDo;
