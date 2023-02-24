import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//Import other components
import Card from "./card.jsx";

//create your first component
const Home = () => {
  let textHello = "Hola Rigo!";
  let link4Geeks = "http://www.4geeksacademy.com";

  let tituloNoticias = [
    {
      title: "La IA",
      description: "Dominara el mundo",
      button: true,
    },
    {
      title: "El mundo",
      description: "Se acabara en 2933",
      button: true,
    },
    {
      title: "Turqui",
      description: "Turquia amenaza la OTAM",
      button: false,
    },
  ];
  return (
    <div className="text-center">
      <h1 className="text-center mt-5"> {textHello} </h1>
      <p>
        <img src={rigoImage} />
      </p>
      <a href="#" className="btn btn-success">
        If you see this green button... bootstrap is working...
      </a>
      <p>
        Made by <a href={link4Geeks}>4Geeks Academy</a>, with love!
      </p>
      	<Card title ="Noticia 1" description = "Fiscalía atribuye a teletrabajo" habraboton = {true}/>
		<Card title ="Noticia 2" description = "Al final lo insustentable no se sustenta." habraboton = {false}/>
		<Card title ="Noticia 3" description = "Definición de una mala idea" habraboton = {false}/>

      {tituloNoticias.map((item, index) => {
        return (
          <Card
            title={item.title}
            description={item.description}
            habraboton={item.button}
			key={index}
          />
        );
      })}
    </div>
  );
};

export default Home;
