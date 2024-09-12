import Image from "next/image";
import Logo1 from "@/public/hero logo 1.svg";
import Logo2 from "@/public/hero logo 2.svg";
import Casoursel from "./Casoursel";
import HeroIcon from "./HeroIcon";
import MB from "@/public/hero icons/mb.svg";
import Shipping from "@/public/hero icons/Vector.svg";
import Union from "@/public/hero icons/Union.svg";
import CS from "@/public/hero icons/Vector (1).svg";
import LogoMb1 from "@/public/heroLogoMobile.svg";
import LogoMb2 from "@/public/heroLogoMobile2.svg";
import Ratings from "@/public/ratings.svg";
import HeroCard from "./HeroCard";
import Arrow from "@/public/arrow right.svg";
import Payment from "@/public/payment options.svg";

const Hero = () => {
	return (
		<div className="bg-[#F6F6F6] flex flex-wrap flex-col gap-16 lg:gap-28 lg:flex-row xl:flex-nowrap px-6 md:px-12 py-10">
			<div className="flex flex-col  ">
				<div className="max-w-2xl">
					<div className="md:flex hidden  gap-5 pb-4">
						<Image src={Logo1} alt="logo" />
						<Image src={Logo2} alt="logo" />
					</div>
					<div className="md:hidden flex gap-5 pb-4">
						<Image src={LogoMb1} alt="logo" />
						<Image src={LogoMb2} alt="logo" />
					</div>
					<Casoursel />
					<div className="hidden md:grid grid-cols-2 gap-x-5 md:gap-x-10 gap-y-8 pt-8 ml-3 md:ml-7">
						<HeroIcon text="30-day Money-back Guarantee" icon={MB} />
						<HeroIcon
							text="Free Shipping
within USA"
							icon={Shipping}
						/>
						<HeroIcon text="Signal Catalogue Updates Included" icon={Union} />
						<HeroIcon
							text="Customer Support via E-mail, Phone, and Chat"
							icon={CS}
							width
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-col px-4 md:px-0 mt-5 md:mt-0 text-left items-center lg:items-start">
				<h1 className="text-3xl md:text-4xl font-bold ">Firebee Headband</h1>
				<div className="my-2 flex gap-2 items-center justify-center md:justify-start">
					<Image src={Ratings} alt="ratings" />
					<p className="text-lg text-[#3F3631] font-light">267 Reviews</p>
				</div>
				<div>
					<p className="text-base text-center font-light lg:text-left text-[#3F3631] pb-4">
						Order today and receive your Firebee by June 15th, 2021
					</p>
				</div>
				<div className="space-y-4">
					<HeroCard heading="Firebee Starter Kit" />
					<HeroCard heading="Founders Kit" founderKit />
				</div>

				<button className="w-full md:max-w-[500px] flex justify-center gap-4 mx-auto text-white font-bold bg-[#07C961] text-2xl items-center py-5 mt-4 rounded-[48px]">
					Add to Cart
					<Image src={Arrow} alt="" />
				</button>
				<div className="mx-auto mt-7">
					<Image src={Payment} alt="payment" />
				</div>
				<div className="md:hidden grid grid-cols-2 gap-x-5 md:gap-x-10 gap-y-8 pt-8 ml-3 md:ml-7">
					<HeroIcon text="30-day Money-back Guarantee" icon={MB} />
					<HeroIcon
						text="Free Shipping
within USA"
						icon={Shipping}
					/>
					<HeroIcon text="Signal Catalogue Updates Included" icon={Union} />
					<HeroIcon
						text="Customer Support via E-mail, Phone, and Chat"
						icon={CS}
						width
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
