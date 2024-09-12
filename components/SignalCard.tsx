import Image from "next/image";

const SignalCard = ({ icon }: { icon: string }) => {
	return (
		<div className="flex flex-col mx-4 lg:mx-0 rounded-[10px] flex-wrap lg:flex-nowrap items-center md:flex-row bg-[#FBFBFD] py-8 px-6 gap-5 lg:items-start">
			<Image src={icon} alt="icon" />
			<p className="text-base md:text-lg font-light text-[#3F3631]">
				Discover your best sleep with responsive sleep journeys, overnight sleep
				tracking, and personalized insights.
			</p>
		</div>
	);
};

export default SignalCard;
