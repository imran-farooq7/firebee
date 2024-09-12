import Image from "next/image";
import Check from "@/public/Subtract.svg";
import Strike from "@/public/strike.svg";

interface Props {
	heading: string;
	founderKit?: boolean;
}
const HeroCard = ({ heading, founderKit }: Props) => {
	return (
		<div className={!founderKit ? "module-border-wrap" : ""}>
			<div className="bg-white heroCard__grad rounded-[10px] max-w-[750px] py-5 px-7">
				<div className="flex flex-col md:flex-row md:justify-between">
					<h2 className="text-2xl font-bold  text-[#3F3631]">{heading}</h2>
					<div className="flex font-light gap-3 text-2xl text-[#3F3631]">
						{!founderKit ? (
							<>
								<Image src={Strike} alt="strike" className="absolute top-7" />
								<p className="relative font-light">$999.00</p>
								<p className="font-light">$379.00</p>
							</>
						) : (
							"$799.00"
						)}
					</div>
				</div>
				{!founderKit ? (
					<button className="heroCard__popular px-14 py-1 text-base text-white my-3">
						MOST POPULAR KIT
					</button>
				) : null}
				<ul className="space-y-3 my-3 font-light">
					<li className="flex gap-4">
						<Image src={Check} alt="check" />
						<p className="text-base md:text-lg text-[#3F3631]">
							Access to 7 signals (and future signal releases)
						</p>
					</li>
					<li className="flex gap-4">
						<Image src={Check} alt="check" />
						<p className="text-base md:text-lg text-[#3F3631]">
							Firebee Headband
						</p>
					</li>
					<li className="flex gap-4">
						<Image src={Check} alt="check" />
						<p className="text-base md:text-lg text-[#3F3631]">
							{!founderKit
								? "$19/month membership, first 2 months free"
								: "No Monthly Membership"}
						</p>
					</li>
				</ul>
				<p className="text-base leading-6 mt-3">
					{!founderKit ? (
						<span className="font-light">
							The starter kit is the most affordable way to get started with
							Firebee. Pay $299 for the Firebee headband and access to the
							entire Firebee Signal Catalogue for only $19 a month.{" "}
							<strong className="font-medium">
								{" "}
								Membership can be cancelled anytime. No contracts. Satisfaction
								guaranteed.
							</strong>
						</span>
					) : (
						<span className="font-light">
							The Founders kit allows you to get the Firebee headband and
							lifetime access to the entire Firebee Signal Catalogue for a
							one-time payment. The Founders is kit can be paid through Affirm
							allowing customers to make small payments of $73 a month.
						</span>
					)}
				</p>
			</div>
		</div>
	);
};

export default HeroCard;
