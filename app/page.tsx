import Box from "@/components/Box";
import CopyRight from "@/components/CopyRight";
import Divider from "@/components/Divider";
import Faqs from "@/components/Faqs";
import FirebeeDo from "@/components/FirebeeDo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MoneyBack from "@/components/MoneyBack";
import Signals from "@/components/Signals";

const Home = () => {
	return (
		<div>
			<Hero />
			<MoneyBack />
			<Signals />
			<FirebeeDo />
			<Box />
			<Faqs />
			<Divider />
			<Footer />
			<Divider className />
			<CopyRight />
		</div>
	);
};

export default Home;
