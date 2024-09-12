import Image from "next/image";
import React from "react";

const HeroIcon = ({
	text,
	icon,
	width,
}: {
	text: string;
	icon: string;
	width?: boolean;
}) => {
	let mWidth;
	if (width) {
		mWidth = "220px";
	} else {
		mWidth = "176px";
	}
	return (
		<div className="flex flex-col md:flex-row gap-4 font-light items-center">
			<Image src={icon} alt="icon" />
			<p
				className={`text-base text-center max-w-fit md:text-lg text-[#3F3631] 
					`}
				style={{ maxWidth: mWidth }}
			>
				{text}
			</p>
		</div>
	);
};

export default HeroIcon;
