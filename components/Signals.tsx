import SignalCard from "./SignalCard";
import BedTime from "@/public/bedtime.svg";
import DeepSleep from "@/public/deepsleep.svg";
import Relax from "@/public/relax.svg";
import Calm from "@/public/calm.svg";
import Focus from "@/public/focus.svg";
import Happy from "@/public/happy.svg";
import Alert from "@/public/alert.svg";
import Sl from "@/public/sl.svg";
import Image from "next/image";
import Start from "@/public/start.svg";

const Signals = () => {
	return (
		<div className="mt-32 mx-auto max-w-[1300px] relative overflow-hidden">
			<Image
				src={Start}
				alt="wave"
				className="absolute hidden lg:block -top-16 -left-16 -z-10"
			/>
			<Image
				src={Start}
				alt="wave"
				className="absolute hidden lg:block -bottom-16 -right-28 -z-10"
			/>

			<div className="flex flex-col text-[#3F3631] text-center gap-5">
				<h2 className="text-4xl md:text-5xl font-light">Firebee Signals</h2>
				<p className="text-lg md:text-2xl">A signal for every situation</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-10">
				<SignalCard icon={BedTime} />
				<SignalCard icon={DeepSleep} />
				<SignalCard icon={Relax} />
				<SignalCard icon={Calm} />
				<SignalCard icon={Focus} />
				<SignalCard icon={Happy} />
				<SignalCard icon={Alert} />
				<SignalCard icon={Sl} />
			</div>
		</div>
	);
};

export default Signals;
