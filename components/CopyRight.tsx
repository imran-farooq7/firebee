import Image from "next/image";
import Logo from "@/public/copylogo.svg";

const CopyRight = () => {
	return (
		<div className="copy py-10 px-6 md:px-[60px]">
			<div className="flex flex-col md:flex-row justify-between">
				<div>
					<Image src={Logo} alt="logo" />
					<p className="text-[#A4A4A5] text-lg pt-7 font-light">
						Copyright © 2020 Firebee Technologies, Inc. All rights reserved.
					</p>
					<p className="text-[#A4A4A5] pt-6 text-base font-light">
						The statements on this page have not been evaluated by the FDA. This
						product is not intended to diagnose, treat, cure, or prevent any
						<br />
						disease.
					</p>
				</div>
				<p className="text-[#A4A4A5] text-base pt-10 md:pt-0">
					Privacy Policy Terms of Service
				</p>
			</div>
		</div>
	);
};

export default CopyRight;
