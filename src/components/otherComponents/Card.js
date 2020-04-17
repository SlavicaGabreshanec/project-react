import React from 'react';
//import PropTypes from 'prop-types';
//import {BrowserRouter as Router, Link} from 'react-router-dom';


const Card = ({property}) => {
    const {index, picture, description,link} = property;

    return (

        <div id={`card-${index}`} className="card">
           <img src={picture} alt="Slika1"/>
            <div className="details">
                <div className="card-body">
                    <h4 className="des">{description}</h4>
                    <a href={'/organizations'}>Види повеќе</a>
                </div>

            </div>
            <br/>
        </div>

    )


}
export default Card;