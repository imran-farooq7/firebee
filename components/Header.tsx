const Header = () => {
	return (
		<>
			<div
				id="header"
				className="hidden text-center items-center lg:flex justify-between "
			>
				<div className="left">
					<img src="./image 17.svg" alt="" />
				</div>
				<h1 className="text-white font font-bold text-lg md:text-2xl  basis-1/2">
					Black Friday Sale - Save $100
				</h1>
				<div className="right">
					<img src="./image 17.svg" alt="" />
				</div>
			</div>
			<div className="block lg:hidden">
				<img src="./header mobile.svg" className="w-full" alt="" />
			</div>
		</>
	);
};

export default Header;
