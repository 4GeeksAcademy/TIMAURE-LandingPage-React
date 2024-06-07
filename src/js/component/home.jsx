import React from "react";
import Navbar from "./Navbar"
import Card from "./Card"
import JumboCard from "./JumboCard"
import Footer from "./Footer"
//include images into your bundle.


//create your first component
const Home = () => {
	return (
		<div className="text-center">
            <Navbar />
			<JumboCard/>
			<div className="d-flex gap-2 mt-2 flex-wrap justify-content-center">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Footer/>
         </div>
	)
};
export default Home;
