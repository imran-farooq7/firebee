const Divider = ({ className }: { className?: boolean }) => {
	return (
		<div
			className={`${className ? "bg-[#525252] h-[2px]" : "divider"} w-full `}
		></div>
	);
};

export default Divider;
