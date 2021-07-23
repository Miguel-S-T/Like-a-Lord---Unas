import React from "react";
import Uber from "../../assets/Uber-Eats-Logo.png";

import classes from "./CardLocation.css";

const CardLocation = ({ restaurant }) => {
  return (
    <>
      <div
        className='card'
        styles={{ width: "16rem" }}
        style={{ backgroundColor: "black", border: "1px solid #FBD46E" }}
        id='cardText'
      >
        <img
          src={restaurant.img}
          alt={restaurant.name}
          className='card-img-top'
          style={{ padding: "11px 11px" }}
        />
        <div className='card-body' id='map'>
          <h5 className='card-title'>{restaurant.name}</h5>
          <a href={restaurant.link} target='_blank' rel='noopener noreferrer'>
            {" "}
            <img
              src={Uber}
              style={{ width: "5rem" }}
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
            <b> {restaurant.almoço}</b>
          </p>
          <p className='card-text'>
            <b> {restaurant.jantar}</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default CardLocation;
