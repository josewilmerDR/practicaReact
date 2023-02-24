import React from "react";

const Card = (props) =>{
    //<></> Fracgmen, para encapsular varios elementos html que estan al mimos nivel.
    return(
        <>
        <div className="card" key={props.key}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                    {props.description}
                </p>
                {props.habraboton ? <a href="#" className="btn btn-primary">
                    Go somewhere
                </a> : <></>}
                
            </div>
        </div>
        </>
    );
};

export default Card; 