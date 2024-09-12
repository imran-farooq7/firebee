"use client";
import ImageGallery from "react-image-gallery";
const items = [
	{
		original: "/product.svg",
		thumbnail: "/Rectangle 27.svg",
		thumbnailClass: " w-[54px] md:w-[100px] md:!ml-7",
	},
	{
		original: "/product 2.svg",
		thumbnail: "/Rectangle 616.svg",
		thumbnailClass: " w-[54px] md:w-[100px] md:!ml-7",
	},
	{
		original: "/product 3.svg",
		thumbnail: "/Rectangle 615.svg",
		thumbnailClass: " w-[54px] md:w-[100px] md:!ml-7",
	},
	{
		original: "/product 5.svg",
		thumbnail: "/Rectangle 618.svg",
		thumbnailClass: " w-[54px] md:w-[100px] md:!ml-7",
	},
	{
		original: "/product 4.svg",
		thumbnail: "/Rectangle 617.svg",
		thumbnailClass: " w-[54px] md:w-[100px] md:!ml-7",
	},
];

const Casoursel = () => {
	return (
		<ImageGallery
			items={items}
			showFullscreenButton={false}
			showPlayButton={false}
			showNav={false}
		/>
	);
};

export default Casoursel;
