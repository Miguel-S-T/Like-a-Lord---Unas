import React from "react";
import Uber from "../../assets/Uber-Eats-Logo.png";

import classes from "./CardLocation.css";

const CardLocation = ({ restaurant }) => {
  return (
    <>
      <div className='card' styles={{ width: "18rem" }}>
        <img
          src={restaurant.img}
          alt={restaurant.name}
          className='card-img-top'
        />
        <div className='card-body'>
          <h5 className='card-title'>{restaurant.name}</h5>
          <a href={restaurant.link} target='_blank' rel='noopener noreferrer'>
            {" "}
            <img
              src={Uber}
              style={{ width: "7rem" }}
              className={classes.UberLogo}
              alt='logoUber'
            />
          </a>{" "}
          <p className='card-text'>
            <b> {restaurant.parceiro}</b>{" "}
          </p>
          <p className='card-text'>
            <b>Take-away:&nbsp;</b>

            {restaurant.morada}
          </p>
          <p className='card-text'>
            {" "}
            <b>Horário: &nbsp;</b>
            {restaurant.horário}{" "}
          </p>
          <p className='card-text'>
            <b>Almoço: &nbsp;</b>
            {restaurant.almoço}{" "}
          </p>
          <p className='card-text'>
            <b>Jantar:&nbsp;</b>
            {restaurant.jantar}{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardLocation;
