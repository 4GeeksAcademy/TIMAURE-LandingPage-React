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
				<Card 
				titulo= "Carta de Ejemolo"
                descripcion= "Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la mayor parte del contenido de la tarjeta."
                boton= "Vamos A Otro Lugar" />
				
				<Card
				titulo= "Carta de la Felicidad"
                descripcion= "tener al lado a la pareja soñada, tener dinero suficiente para viajar por el mundo entero, poder levantarse a diario y disfrutar de un gran paisaje natural, o tener una adorable mascota."
                boton= "Vamos A Otro Lugar"/>
				
				<Card
				titulo= "Carta de Buenas Acciones"
                descripcion= "Ser voluntario de alguna asociación, ser servicial con los vecinos, donar las cosas que ya no utilices, escuchar a un amigo, celebrar el éxito de otros y perdonar son buenos ejemplos para contribuir a tu propia felicidad."
                boton= "Vamos A Otro Lugar" />
				
				<Card 
				titulo= "Carta de la Tramquilidad"
                descripcion= "Estado de grata satisfacción espiritual y física. dicha, ventura, contento, satisfacción, bienestar, suerte, prosperidad, fortuna, alegría, bonanza.."
                boton= "Vamos A Otro Lugar" />
			</div>
			<Footer/>
         </div>
	)
};
export default Home;
