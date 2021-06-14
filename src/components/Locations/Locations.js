import React from "react";

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
import Uber from "../../assets/Uber-Eats-Logo.png";

function Locations() {
  return (
    <>
      <Layout />
      <div className={classes.locations} id='locationsAvailable'>
        <h1 className={classes.locationsAvailable}>Localizações disponíveis</h1>
        <div className='container'>
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
        </div>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </>
  );
}

export default Locations;
