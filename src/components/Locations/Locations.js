import React from "react";

import classes from "./Locations.css";
import Layout from "../Layout/Layout";
import Footer from "../Footer/Footer";

import Carcavelos from "../../assets/Locations (1)/Carcavelos.png";
import Lisboa from "../../assets/Locations (1)/Lisboa.png";
import Cascais from "../../assets/Locations (1)/Cascais.png";
import Porto from "../../assets/Locations (1)/Porto.png";
import Paço from "../../assets/Locations (1)/Paco de Arcos.png";
import Odivelas from "../../assets/Locations (1)/Odivelas.png";
import Uber from "../../assets/Uber-Eats-Logo.png";

function Locations() {
  return (
    <>
      <Layout />
      <div className={classes.locations} id='locationsAvailable'>
        <h1 className={classes.locationsAvailable}>Localizações disponíveis</h1>
        <div className='container'>
          <div className='row'>
            <div class='col-sm'>
              <h5 className={classes.titulo}>Lisboa</h5>
              <p className={classes.Pedidos}>Para pedidos até 4km </p>
              <a href=' https://www.ubereats.com/lisbon/food-delivery/like-a-lord-burgers-by-rui-unas-gulbenkian/-bCKIpjNQ1ah_PFLPcItbQ?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkVzdG9yaWwlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKVXlQV0FzYkZIZzBSc1V5ZFF6RDN3SUklMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBMzguNzEzMzE1MiUyQyUyMmxvbmdpdHVkZSUyMiUzQS05LjM5MzY1NTglN0Q%3D&utm_source=wok'>
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
            <div class='col-sm'>
              <h5 className={classes.titulo}>Carcavelos</h5>
              <p className={classes.Pedidos}>Para pedidos até 4km </p>
              <a href='https://www.ubereats.com/lisbon/food-delivery/like-a-lord-burgers-by-rui-unas-carcavelos/3EExwnuGQRubSdrwyTHZ0A?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkNhcmNhdmVsb3MlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKR2VxaEZzX0lIZzBSX25SdzFUMzhGTlklMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBMzguNjg4MDUxNSUyQyUyMmxvbmdpdHVkZSUyMiUzQS05LjMzNzU1OTUlN0Q%3D&utm_source=wok'>
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
            <div class='col-sm'>
              <h5 className={classes.titulo}>Oeiras</h5>
              <p className={classes.Pedidos}>Para pedidos até 4km </p>
              <a href='https://www.ubereats.com/lisbon/food-delivery/like-a-lord-burgers-by-rui-unas-oeiras/Kzmcc1jmSC-Qo8zjkqZf7A?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkVzdG9yaWwlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKVXlQV0FzYkZIZzBSc1V5ZFF6RDN3SUklMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBMzguNzEzMzE1MiUyQyUyMmxvbmdpdHVkZSUyMiUzQS05LjM5MzY1NTglN0Q%3D&utm_source=wok'>
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
            <div class='col-sm'>
              <h5 className={classes.titulo}>Estoril</h5>
              <p className={classes.Pedidos}>Para pedidos até 4km </p>
              <a href='https://www.ubereats.com/lisbon/food-delivery/like-a-lord-burgers-by-rui-unas-estoril/csGc0_e0TgCK6M5N-8dZrA?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkVzdG9yaWwlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKVXlQV0FzYkZIZzBSc1V5ZFF6RDN3SUklMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBMzguNzEzMzE1MiUyQyUyMmxvbmdpdHVkZSUyMiUzQS05LjM5MzY1NTglN0Q%3D&utm_source=wok'>
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
                src={Cascais}
                alt='Lisboa'
              />
            </div>
            <div class='col-sm'>
              <h5 className={classes.titulo}>Odivelas</h5>
              <p className={classes.Pedidos}>Para pedidos até 4km </p>
              <a href='https://www.ubereats.com/lisbon/food-delivery/like-a-lord-burgers-by-rui-unas-odivelas/kt0ZHZvlSNSJ-x1v2YMJ_A?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkVzdG9yaWwlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKVXlQV0FzYkZIZzBSc1V5ZFF6RDN3SUklMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBMzguNzEzMzE1MiUyQyUyMmxvbmdpdHVkZSUyMiUzQS05LjM5MzY1NTglN0Q%3D&utm_source=wok'>
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
                src={Odivelas}
                alt='Lisboa'
              />
            </div>
            <div class='col-sm'>
              <h5 className={classes.titulo}>Porto</h5>
              <p className={classes.Pedidos}>Para pedidos até 4km </p>
              <a href='https://www.ubereats.com/porto/food-delivery/like-a-lord-burgers-by-rui-unas-porto/-Psjp93DTqOWk1TlKVbYQg?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkVzdG9yaWwlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKVXlQV0FzYkZIZzBSc1V5ZFF6RDN3SUklMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBMzguNzEzMzE1MiUyQyUyMmxvbmdpdHVkZSUyMiUzQS05LjM5MzY1NTglN0Q%3D&utm_source=wok'>
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
        </div>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </>
  );
}

export default Locations;
