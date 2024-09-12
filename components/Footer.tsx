import Yt from "@/public/yt.svg";
import Fb from "@/public/fb.svg";
import Ig from "@/public/ig.svg";
import Twitter from "@/public/twitter.svg";
import Pt from "@/public/pt.svg";
import Image from "next/image";
const Footer = () => {
	return (
		<footer className="bg-[#12151A] pl-6 md:pl-[75px] py-12">
			<div className="grid grid-cols-2 md:grid-cols-3 max-w-3xl">
				<ul className="text-white font-light">
					<li className="text-2xl mb-4">About</li>
					<li>Home</li>
					<li>Product</li>
				</ul>
				<ul className="text-white font-light">
					<li className="text-2xl mb-4">Support</li>
					<li>Activate</li>
					<li>Login</li>
				</ul>
				<div className="pt-7 md:pt-0">
					<p className="text-white text-2xl mb-4 font-light">Find Us On</p>
					<div className="flex gap-5">
						<Image src={Yt} alt="fb" />
						<Image src={Twitter} alt="twitter" />
						<Image src={Fb} alt="fb" />
						<Image src={Ig} alt="ig" />
						<Image src={Pt} alt="pt" />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
