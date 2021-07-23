import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import classes from "./Locations.css";
import Layout from "../Layout/Layout";
import Footer from "../Footer/Footer";

import Carcavelos from "../../assets/Locations (1)/Carcavelos.png";
import Lisboa from "../../assets/Locations (1)/Lisboa.png";
import Estoril from "../../assets/Locations (1)/Estoril.png";
import Porto from "../../assets/Locations (1)/Porto.png";
import Paço from "../../assets/Locations (1)/Paco de arcos.png";
import Telheiras from "../../assets/Locations (1)/Telheiras.png";
import Corroios from "../../assets/Locations (1)/Corroios.png";
import Loures from "../../assets/Locations (1)/Loures.png";
import Albufeira from "../../assets/Locations (1)/Albufeira.png";
import Faro from "../../assets/Locations (1)/Faro.png";
import Loulé from "../../assets/Locations (1)/Loulé.png";
import Quarteira from "../../assets/Locations (1)/Quarteira.png";
import Sobreda from "../../assets/Locations (1)/Sobreda.png";
import Uber from "../../assets/Uber-Eats-Logo.png";
import CardLocation from "../CardLocation /CardLocation";

function Locations() {
  const [currentFilter, setCurrentFilter] = useState("");
  const [restaurants, setRestaurants] = useState([
    {
      name: "Carcavelos",
      link: "https://neon.ly/magiclinklord",
      img: Carcavelos,
      horário: "Terça a Domingo",
      almoço: "Almoço: 12:00 ás 15:00 ",
      jantar: " Jantar: 19:00 às 22:00",
      parceiro: "Tapas do Junqueiro",
      morada: "Rua de Luanda, 578 E - 2775-369 Bairro do Junqueiro",
    },
    {
      name: "Lisboa",
      link: "https://neon.ly/magiclinklord",
      img: Lisboa,
      horário: "Terça a Domingo",
      almoço: "Almoço: 12:00 ás 15:00 ",
      jantar: "Jantar: 19:00 às 22:00",
      parceiro: "Restaurante Bella Lisa Valmor",
      morada: "R. Alexandre Cabral 4A 1600-817 Lisboa",
    },
    {
      name: "Estoril",
      link: "https://neon.ly/magiclinklord",
      img: Estoril,
      horário: "Terça a Domingo",
      almoço: "Almoço: 12:00 ás 15:00 ",
      jantar: "Jantar: 19:00 às 22:00",
      parceiro: " Restaurante Tamariz",
      morada: "R. Alexandre Cabral 4A 1600-817 Lisboa",
    },
    {
      name: "Porto",
      link: "https://neon.ly/magiclinklord",
      img: Porto,
      horário: "Terça a Domingo",
      almoço: "Almoço: 12:00 ás 15:00 ",
      jantar: "Jantar: 19:00 às 22:00",
      parceiro: "Tapas n´Friends Galerias de Paris",
      morada: "Indisponível",
    },
    {
      name: "Oeiras",
      link: "https://neon.ly/magiclinklord",
      img: Paço,
      horário: "Terça Feira 12:00 às 18:00, Quarta a Domingo 12:00 às 21:30",
      almoço: " ",
      jantar: "",
      parceiro: "Bahia Beach Club",
      morada: "Indisponível",
    },
    {
      name: "Telheiras",
      link: "https://neon.ly/magiclinklord",
      img: Telheiras,
      horário: "Terça a Domingo",
      almoço: "Almoço: 12:00 ás 15:00 ",
      jantar: "Jantar: 19:00 às 22:00",
      parceiro: "Restaurante À Dúzia",
      morada: "R. Alexandre Cabral 4A 1600-817 Lisboa",
    },
    {
      name: "Corroios",
      link: "https://neon.ly/magiclinklord",
      img: Corroios,
      horário: "Terça a Domingo das 12:00 às 22:00",
      almoço: "",
      jantar: "",
      parceiro: "The Mob",
      morada: "R. Armando Guerra 8B - 2855-597 Corroios",
    },
    {
      name: "Loures",
      link: "https://neon.ly/magiclinklord",
      img: Loures,
      horário: "Todos os dias das 12:00 às 22:00",
      almoço: "",
      jantar: "",
      parceiro: "Hamburgueria da Baixa",
      morada: "CCLouresShopping, Av descobertas n 90, Loja 1061 - Loures",
    },
    {
      name: "Albufeira",
      link: "https://neon.ly/magiclinklord",
      img: Albufeira,
      horário: "Todos os dias das 12:00 às 22:00",
      almoço: "",
      jantar: "",
      parceiro: "Hamburgueria da Baixa-Albufeira",
      morada:
        "C.C. Vilanova - Areias de s. João lote 2 B - Olhos de Água 8200-265",
    },
    {
      name: "Faro",
      link: "https://neon.ly/magiclinklord",
      img: Faro,
      horário: "Todos os dias das 12:00 às 22:00",
      almoço: "",
      jantar: "",
      parceiro: "Hamburgueria da Penha",
      morada: "Estrada da Penha, nº150 Loja A R/C 8005-138 Faro",
    },
    {
      name: "Loulé",
      link: "https://neon.ly/magiclinklord",
      img: Loulé,
      horário: "Todos os dias das 12:00 às 22:00",
      almoço: "",
      jantar: "",
      parceiro: "Hamburgueria de Loulé",
      morada: "Praça da República nº78 R/C - 8100-221 Loulé",
    },
    {
      name: "Quarteira",
      link: "https://neon.ly/magiclinklord",
      img: Quarteira,
      horário: "Todos os dias das 12:00 às 22:00",
      almoço: "",
      jantar: "",
      parceiro: "Hamburgueria da Baixa Quarteira",
      morada: "Av Infante Sagres 71 A - 8125 - 156 Quarteira",
    },
    {
      name: "Sobreda",
      link: "https://neon.ly/magiclinklord",
      img: Sobreda,
      horário: "Terça a Domingo",
      almoço: "Almoço: 12:00 ás 15:00 ",
      jantar: "Jantar: 19:00 às 22:00",
      parceiro: "The Mob",
      morada: "Praceta Leitão de Barros 2B - 2815-879 Sobreda",
    },
  ]);

  const locations = [
    "Escolhe uma localização",
    "Lisboa",
    "Carcavelos",
    "Oeiras",
    "Estoril",
    "Telheiras",
    "Corroios",
    "Sobreda",
    "Loures",
    "Porto",
    "Albufeira",
    "Faro",
    "Loulé",
    "Quarteira",
  ];

  const handleChange = (e) => {
    setCurrentFilter(e.target.value);
  };

  const filteredRestaurants =
    currentFilter === "Escolhe uma localização"
      ? null
      : restaurants.filter((rest) => rest.name === currentFilter);

  return (
    <>
      <Layout />
      <div className={classes.locations} id='locationsAvailable'>
        <h1 className={classes.locationsAvailable}>Localizações disponíveis</h1>
        <div className='container' style={{ minHeight: "830px" }}>
          <div className={classes.dropdownDiv}>
            {/* <label style={{ color: "white", margin: "0 10px" }}>
              Choose a location:
            </label> */}
            <select onChange={handleChange} className={classes.dropdown}>
              {locations.map((location, index) => (
                <option
                  key={index}
                  value={location}
                  className={classes.dropdownOptions}
                >
                  {location}
                </option>
              ))}
            </select>
          </div>
          <div styles={{ textAlign: "center", margin: "auto" }}>
            <div className='row'>
              {filteredRestaurants.map((restaurant, i) => (
                <div className={classes.cardDiv} key={i} id='cardDiv'>
                  <CardLocation restaurant={restaurant} />
                  {/* <h5 className={classes.titulo}>{restaurant.name}</h5>
                <p className={classes.Pedidos}>
                  <b>Horário: &nbsp;</b>
                  {restaurant.horário}{" "}
                </p>
                <p className={classes.Pedidos}>
                  <b>Almoço: &nbsp;</b>
                  {restaurant.almoço}{" "}
                </p>
                <p className={classes.Pedidos}>
                  <b>Jantar:&nbsp;</b>
                  {restaurant.jantar}{" "}
                </p>
                <p className={classes.Pedidos}>
                  <b>Parceiro: &nbsp;</b>
                  {restaurant.parceiro}{" "}
                </p>
                <p className={classes.Pedidos}>
                  <b>Morada para Take-away:&nbsp;</b>

                  {restaurant.morada}
                </p>
                <a
                  href={restaurant.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {" "}
                  <img
                    src={Uber}
                    style={{ width: "8rem" }}
                    className={classes.UberLogo}
                    alt='logoUber'
                  />
                </a>{" "}
                <img
                  className={classes.Lisboa}
                  src={restaurant.img}
                  alt={restaurant.name}
                  style={{ width: "12rem" }}
                /> */}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <h5 className={classes.titulo}>Lisboa</h5>
              <p className={classes.Pedidos}>Para pedidos até 4km </p>
              <a
                href='https://bit.ly/Laluber'
                target='_blank'
                rel='noopener noreferrer'
              >
                {" "}
                <img
                  src={Uber}
                  style={{ width: "8rem" }}
                  className={classes.UberLogo}
                  alt='logoUber'
                />
              </a>{" "}
              <p className={classes.Pedidos}>
                {" "}
                Pedidos acima de 4km <br /> Brevemente
              </p>
              <img
                className={classes.Lisboa}
                src={Lisboa}
                alt='Lisboa'
                style={{ width: "12rem" }}
              />
            </div>
            <div className='col-lg-3'>
              <h5 className={classes.titulo}>Carcavelos</h5>
              <p className={classes.Pedidos}>Para pedidos até 4km </p>
              <a
                href='https://bit.ly/Laluber'
                target='_blank'
                rel='noopener noreferrer'
              >
                {" "}
                <img
                  src={Uber}
                  style={{ width: "8rem" }}
                  className={classes.UberLogo}
                  alt='logoUber'
                />
              </a>{" "}
              <p className={classes.Pedidos}>
                {" "}
                Pedidos acima de 4km <br /> Brevemente
              </p>
              <img
                style={{ width: "12rem" }}
                className={classes.Lisboa}
                src={Carcavelos}
                alt='Lisboa'
              />
            </div>
            <div className='col-lg-3'>
              <h5 className={classes.titulo}>Oeiras</h5>
              <p className={classes.Pedidos}>Para pedidos até 4km </p>
              <a
                href='https://bit.ly/Laluber'
                target='_blank'
                rel='noopener noreferrer'
              >
                {" "}
                <img
                  src={Uber}
                  style={{ width: "8rem" }}
                  className={classes.UberLogo}
                  alt='logoUber'
                />
              </a>{" "}
              <p className={classes.Pedidos}>
                {" "}
                Pedidos acima de 4km <br /> Brevemente
              </p>
              <img
                style={{ width: "12rem" }}
                className={classes.Lisboa}
                src={Paço}
                alt='Lisboa'
              />
            </div>
            <div className='col-lg-3'>
              <h5 className={classes.titulo}>Estoril</h5>
              <p className={classes.Pedidos}>Para pedidos até 4km </p>
              <a
                href='https://bit.ly/Laluber'
                target='_blank'
                rel='noopener noreferrer'
              >
                {" "}
                <img
                  src={Uber}
                  style={{ width: "8rem" }}
                  className={classes.UberLogo}
                  alt='logoUber'
                />
              </a>{" "}
              <p className={classes.Pedidos}>
                {" "}
                Pedidos acima de 4km <br /> Brevemente
              </p>
              <img
                style={{ width: "12rem" }}
                className={classes.Lisboa}
                src={Estoril}
                alt='Lisboa'
              />
            </div>
            <div className='col-lg-3'>
              <h5 className={classes.titulo}>Telheiras</h5>
              <p className={classes.Pedidos}>Para pedidos até 4km </p>
              <a
                href='https://bit.ly/Laluber'
                target='_blank'
                rel='noopener noreferrer'
              >
                {" "}
                <img
                  src={Uber}
                  style={{ width: "8rem" }}
                  className={classes.UberLogo}
                  alt='logoUber'
                />
              </a>{" "}
              <p className={classes.Pedidos}>
                {" "}
                Pedidos acima de 4km <br /> Brevemente
              </p>
              <img
                style={{ width: "12rem" }}
                className={classes.Lisboa}
                src={Telheiras}
                alt='Lisboa'
              />
            </div>
            <div className='col-lg-3'>
              <h5 className={classes.titulo}>Corroios</h5>
              <p className={classes.Pedidos}>Para pedidos até 4km </p>
              <a
                href='https://bit.ly/Laluber'
                target='_blank'
                rel='noopener noreferrer'
              >
                {" "}
                <img
                  src={Uber}
                  style={{ width: "8rem" }}
                  className={classes.UberLogo}
                  alt='logoUber'
                />
              </a>{" "}
              <p className={classes.Pedidos}>
                {" "}
                Pedidos acima de 4km <br /> Brevemente
              </p>
              <img
                style={{ width: "12rem" }}
                className={classes.Lisboa}
                src={Corroios}
                alt='Lisboa'
              />
            </div>
            <div className='col-lg-3'>
              <h5 className={classes.titulo}>Loures</h5>
              <p className={classes.Pedidos}>Para pedidos até 4km </p>
              <a
                href='https://bit.ly/Laluber'
                target='_blank'
                rel='noopener noreferrer'
              >
                {" "}
                <img
                  src={Uber}
                  style={{ width: "8rem" }}
                  className={classes.UberLogo}
                  alt='logoUber'
                />
              </a>{" "}
              <p className={classes.Pedidos}>
                {" "}
                Pedidos acima de 4km <br /> Brevemente
              </p>
              <img
                style={{ width: "12rem" }}
                className={classes.Lisboa}
                src={Loures}
                alt='Lisboa'
              />
            </div>
            <div className='col-lg-3'>
              <h5 className={classes.titulo}>Porto</h5>
              <p className={classes.Pedidos}>Para pedidos até 4km </p>
              <a
                href='https://bit.ly/Laluber'
                target='_blank'
                rel='noopener noreferrer'
              >
                {" "}
                <img
                  src={Uber}
                  style={{ width: "8rem" }}
                  className={classes.UberLogo}
                  alt='logoUber'
                />
              </a>{" "}
              <p className={classes.Pedidos}>
                {" "}
                Pedidos acima de 4km <br /> Brevemente
              </p>
              <img
                style={{ width: "12rem" }}
                className={classes.Lisboa}
                src={Porto}
                alt='Lisboa'
              />
            </div>
          </div>
        </div> */}
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </>
  );
}

export default Locations;
