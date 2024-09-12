"use client";
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import Plus from "@/public/plus.svg";
import Minus from "@/public/minus.svg";
import Image from "next/image";

const faqs = [
	{
		question: "Is Firebee Safe?",
		answer:
			"Yes, Firebee is safe. Firebee meets the safety standards set by ICNIRP (International Commission on Non-Ionizing Radiation Protection). Firebee is 3000x less powerful than your average smartphone. Firebee uses an ultra-low signal that is completely safe for home use. The technology behind Firebee has been rigorously safety tested and has over 300,000 hours tested by users for efficacy and safety.",
	},
	{
		question: "How Does Firebee work?",
		answer: `Firebee uses safe ultra-low energy magnetic signals to gently nudge you into a different mental state.

Every Firebee signal is made by studying real world magnetic signatures. 
Did you know caffeine has a unique one of a kind magnetic signature? 
It’s a relatively unknown fact that every molecule on earth actually has a unique magnetic signature.

Firebee using patented technology is able to take a magnetic signature and play it back through the Firebee headband. 
When you use the alert signal with Firebee you are actually playing back the magnetic signature of caffeine which our bodies already recognize.

Within minutes of feeling the ultra-low magnetic signal of caffeine our body begins to feel more alert and awake.

Firebee signal is 3000 times less powerful than a smartphone and completely safe to use.`,
	},
	{
		question: "Will Firebee Fit on My Head?",
		answer:
			"Firebee has a fully adjustable headband you can adjust to fit comfortably and snug on your head",
	},
	{
		question: "What If I want the signal to stop?",
		answer:
			"Firebee is designed to be used on command. If you wish to turn off a signal, the effects wear off within minutes.",
	},
	{
		question: "How do you charge Firebee?",
		answer:
			"Firebee comes with a charging dock and a charging cable. Just set up the charging dock on a nightstand and plug it in.",
	},
];
const Faqs = () => {
	return (
		<div className="bg-[#FBFCFB] mt-20 py-20">
			<div className=" max-w-xs md:max-w-4xl mx-auto">
				<h2 className="text-4xl md:text-5xl text-[#3F3631] font-light text-center">
					Frequently Asked Questions
				</h2>
				<dl className="mt-10 space-y-6 divide-y-2 divide-[#3F3631]">
					{faqs.map((faq) => (
						<Disclosure as="div" key={faq.question} className="pt-6">
							{({ open }) => (
								<>
									<dt>
										<DisclosureButton className="flex w-full items-center justify-between text-left text-gray-900">
											<span className="text-[22px] font-medium text-[#3F3631]">
												{faq.question}
											</span>
											<span className="ml-6 flex h-7 items-center">
												{open ? (
													<Image src={Minus} alt="minus" />
												) : (
													<Image src={Plus} alt="plus" />
												)}
											</span>
										</DisclosureButton>
									</dt>
									<DisclosurePanel as="dd" className="mt-2 pr-12">
										<p className="text-base font-light text-[#3F3631]">
											{faq.answer}
										</p>
									</DisclosurePanel>
								</>
							)}
						</Disclosure>
					))}
				</dl>
			</div>
		</div>
	);
};

export default Faqs;
