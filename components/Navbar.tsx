"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Frame 3.svg";
import User from "@/public/Vector.svg";
import { useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className="relative mx-auto px-9 py-4 bg-white">
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-10">
					<Link href={"/"}>
						<Image src={Logo} alt="logo" className="object-contain" />
					</Link>

					<button className="bg-[#07C961] font-medium text-white px-7 py-3 rounded-[32px] block sm:hidden">
						Buy now
					</button>

					<div className="hidden lg:flex space-x-12 text-lg font-light text-[#27292D]">
						<Link href={"#"} className={"text-[#27292D]"}>
							How It Works
						</Link>
						<Link href={"#"} className="text-[#27292D]">
							Signals
						</Link>
						<Link href={"#"} className="text-[#27292D]">
							Reviews
						</Link>
						<Link href={"#"} className="text-[#27292D]">
							Blog
						</Link>
					</div>
				</div>
				<div className="hidden lg:flex items-center space-x-6  text-lg text-secondary">
					<Link href={"#"}>
						<button className="bg-[#07C961] font-medium text-white px-9 py-5 rounded-[32px]">
							Buy now
						</button>
					</Link>
					<div className="bg-[#4B93D0] p-4 rounded-full">
						<Image src={User} alt="user" />
					</div>
				</div>
				<button
					id="menu-btn"
					className={`block hamburger lg:hidden focus:outline-none ${
						isOpen && "open"
					}`}
					type="button"
					onClick={() => setIsOpen((isOpen) => !isOpen)}
				>
					<Image
						src={"./hamburger.svg"}
						width={24}
						height={24}
						alt="hamburger"
					/>
				</button>
			</div>
			<div
				className={`absolute ${
					isOpen ? "block" : "hidden"
				} p-6 rounded-lg bg-gray-400/80 left-6 top-20 right-6 z-[100]`}
			>
				<div className="flex flex-col items-center justify-center w-full space-y-6  text-white rounded-sm">
					<Link href={"#"} className={"text-[#27292D]"}>
						How It Works
					</Link>
					<Link href={"#"} className="text-[#27292D]">
						Signals
					</Link>
					<Link href={"#"} className="text-[#27292D]">
						Reviews
					</Link>
					<Link href={"#"} className="text-[#27292D]">
						Blog
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
