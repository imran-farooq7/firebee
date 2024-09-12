import Image from "next/image";
import MB from "@/public/money back.svg";

const MoneyBack = () => {
	return (
		<div className="w-full font-light lg:max-w-[1300px] mt-14 mx-auto px-12 py-10 md:px-14 bg-[#FBFCFB] flex flex-col md:flex-row gap-10 items-center flex-wrap lg:flex-nowrap">
			<Image src={MB} alt="money back" className="w-52 lg:w-full" />
			<div>
				<h3 className="text-4xl md:text-5xl text-center md:text-left text-[#3F3631] mb-3">
					30 Day Money Back Guarantee
				</h3>
				<p className="text-lg md:text-2xl text-[#3F3631]">
					At Firebee we believe in building quality products that actually work.
					Firebee and its partners have invested over $85 million in research
					and development to create the highest quality wearable for customers
					to enjoy. If for any reason if you are not satisfied with your Firebee
					headband we will happily refund your purchase.{" "}
				</p>
			</div>
		</div>
	);
};

export default MoneyBack;
