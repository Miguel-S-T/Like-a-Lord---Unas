import React from "react";
import { Route, Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import classes from "./Menu.css";
import Dropdown2 from "../Dropdown/Dropdown";
import Footer from "../Footer/Footer";
import LikeALord from "../../assets/Menu - fotos finais/Like a Lord.jpg";
import Bombunas from "../../assets/Menu - fotos finais/Bombunas.jpg";
import MissPanama from "../../assets/Menu - fotos finais/Miss Panamá.jpg";
import MalucoBeleza from "../../assets/Menu - fotos finais/Maluco Beleza.jpg";
import CabaretDaCoxa from "../../assets/Menu - fotos finais/Cabaret da Coxa.jpg";
import LaChomba from "../../assets/Menu - fotos finais/La Chomba.jpg";
import ElMacho from "../../assets/Menu - fotos finais/El Macho.jpg";
import Splash from "../../assets/batata splash 1.jpeg";
import PegarOuLargar from "../../assets/Menu - fotos finais/Pegar ou Largar.jpg";
import sevenUp from "../../assets/BEBIDAS/7UOP.png";
import Bud from "../../assets/BEBIDAS/BUD.png";
import Limao from "../../assets/BEBIDAS/LIMAO.png";
import PepsiMax from "../../assets/BEBIDAS/PEPSI MAX.png";
import Pepsi from "../../assets/BEBIDAS/PEPSI.png";
import Pessego from "../../assets/BEBIDAS/PESSEGO.png";
import Serra from "../../assets/BEBIDAS/SERRA ESTRELA.png";
import Sumol from "../../assets/BEBIDAS/SUMOL.png";
import Locations from "../Locations/Locations";

function Menu() {
  return (
    <>
      <Layout />
      <div className={classes.bg}>
        <div className={classes.selectMenu}>
          <a href="#burgers">
            <p>BURGERS</p>
          </a>
          <a href="#acompanhamentos">
            <p>ACOMPANHAMENTOS</p>
          </a>
          <a href="#sobremesas">
            <p>SOBREMESAS</p>
          </a>
          <a href="#bebidas">
            <p>BEBIDAS</p>
          </a>
        </div>
        <Dropdown2 className={classes.dropdownMenu} />
        <div className={classes.container2}>
          <h1 className={classes.smash} id="burgers">
            SMASH BURGERS
          </h1>
          <div className="container">
            <div className="row row-cols-4">
              <div
                className="card"
                style={{
                  width: "18rem",
                  backgroundColor: "black",
                  margin: "10px auto",
                }}
              >
                <img
                  src={LikeALord}
                  className="card-img-top"
                  alt="burger"
                  style={{ paddingTop: "11px" }}
                />
                <div className="card-body" style={{ backgroundColor: "black" }}>
                  <h5 className="card-title">LIKE A LORD</h5>
                  <h6 className="card-text">
                    Double smash burger, cheddar, alface iceberg, cebola crispy,
                    maionese de manjericão e pasta de trufa.
                  </h6>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "18rem",
                  backgroundColor: "black",
                  margin: "10px auto",
                }}
              >
                <img
                  src={Bombunas}
                  className="card-img-top"
                  alt="burger"
                  style={{ paddingTop: "11px" }}
                />
                <div className="card-body" style={{ backgroundColor: "black" }}>
                  <h5 className="card-title">BOMBUNAS</h5>
                  <h6 className="card-text">
                    Triple smash burger, cheddar, pickles, crispy bacon, cebola
                    caramelizada e maionese sriracha.
                  </h6>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "18rem",
                  backgroundColor: "black",
                  margin: "10px auto",
                }}
              >
                <img
                  src={MissPanama}
                  className="card-img-top"
                  alt="burger"
                  style={{ paddingTop: "11px" }}
                />
                <div className="card-body" style={{ backgroundColor: "black" }}>
                  <h5 className="card-title">MISS PANAMA</h5>
                  <h6 className="card-text">
                    Single smash burger, cheddar, carpaccio de abacaxi
                    caramelizado, cebola roxa, crispy bacon e barbecue de
                    tamarindo.
                  </h6>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "18rem",
                  backgroundColor: "black",
                  margin: "10px auto",
                }}
              >
                <img
                  src={CabaretDaCoxa}
                  className="card-img-top"
                  alt="burger"
                  style={{ paddingTop: "11px" }}
                />
                <div className="card-body" style={{ backgroundColor: "black" }}>
                  <h5 className="card-title">CABARET DA COXA</h5>
                  <h6 className="card-text">
                    Crispy chicken, maionese de sriracha, pickles, jalapenos,
                    bacon e tomate.
                  </h6>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "18rem",
                  backgroundColor: "black",
                  margin: "10px auto",
                }}
              >
                <img
                  src={MalucoBeleza}
                  className="card-img-top"
                  alt="burger"
                  style={{ paddingTop: "11px" }}
                />
                <div className="card-body" style={{ backgroundColor: "black" }}>
                  <h5 className="card-title">MALUCO BELEZA</h5>
                  <h6 className="card-text">
                    Single smash burger, maionese de sriracha, cebola roxa,
                    tomate, bacon e cebola crispy.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <h1 className={classes.smash} id="acompanhamentos">
            ACOMPANHAMENTOS
          </h1>
          <div className="container">
            <div className="row row-cols-4">
              <div
                className="card"
                style={{
                  width: "18rem",
                  backgroundColor: "black",
                  margin: "10px auto",
                }}
              >
                <img
                  src={LaChomba}
                  className="card-img-top"
                  alt="burger"
                  style={{ paddingTop: "11px" }}
                />
                <div className="card-body" style={{ backgroundColor: "black" }}>
                  <h5 className="card-title">LA CHOMBA</h5>
                  <h6 className="card-text">
                    Batata frita com paprika fumada, molho cheddar, smash
                    burger, cebola crispy.
                  </h6>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "18rem",
                  backgroundColor: "black",
                  margin: "10px auto",
                }}
              >
                <img
                  src={ElMacho}
                  className="card-img-top"
                  alt="burger"
                  style={{ paddingTop: "11px" }}
                />
                <div className="card-body" style={{ backgroundColor: "black" }}>
                  <h5 className="card-title">EL MACHO</h5>
                  <h6 className="card-text">
                    Batata frita, crispy bacon, jalapenos, maionese de
                    manjericão, barbecue de tamarindo.
                  </h6>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "18rem",
                  backgroundColor: "black",
                  margin: "10px auto",
                }}
              >
                <img
                  src={Splash}
                  className="card-img-top"
                  alt="burger"
                  style={{ paddingTop: "11px" }}
                />
                <div className="card-body" style={{ backgroundColor: "black" }}>
                  <h5 className="card-title">SPLASH</h5>
                  <h6 className="card-text">
                    Chips de batata frita com paprika fumada.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <h1 className={classes.smash} id="sobremesas">
            SOBREMESAS
          </h1>
          <div className="container">
            <div className="row row-cols-4">
              <div
                className="card"
                style={{
                  width: "18rem",
                  backgroundColor: "black",
                  margin: "10px auto",
                }}
              >
                <img
                  src={PegarOuLargar}
                  className="card-img-top"
                  alt="burger"
                  style={{ paddingTop: "11px" }}
                />
                <div className="card-body" style={{ backgroundColor: "black" }}>
                  <h5 className="card-title">PEGAR OU LARGAR</h5>
                  <h6 className="card-text">
                    Brownie de chocolate com caramelo salgado, chantilly e
                    bacon.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <h1 className={classes.smash} id="bebidas">
            BEBIDAS
          </h1>
          <div className="container">
            <div className="row row-cols-4">
              <div
                className="card"
                style={{
                  width: "18rem",
                  backgroundColor: "black",
                  margin: "10px auto",
                }}
              >
                <img
                  src={Bud}
                  className="card-img-top"
                  alt="burger"
                  style={{ paddingTop: "11px" }}
                />
                <div className="card-body" style={{ backgroundColor: "black" }}>
                  <h5 className="card-title">BUD</h5>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "18rem",
                  backgroundColor: "black",
                  margin: "10px auto",
                }}
              >
                <img
                  src={Pepsi}
                  className="card-img-top"
                  alt="burger"
                  style={{ paddingTop: "11px" }}
                />
                <div className="card-body" style={{ backgroundColor: "black" }}>
                  <h5 className="card-title">PEPSI</h5>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "18rem",
                  backgroundColor: "black",
                  margin: "10px auto",
                }}
              >
                <img
                  src={PepsiMax}
                  className="card-img-top"
                  alt="burger"
                  style={{ paddingTop: "11px" }}
                />
                <div className="card-body" style={{ backgroundColor: "black" }}>
                  <h5 className="card-title">PEPSI MAX</h5>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "18rem",
                  backgroundColor: "black",
                  margin: "10px auto",
                }}
              >
                <img
                  src={Sumol}
                  className="card-img-top"
                  alt="burger"
                  style={{ paddingTop: "11px" }}
                />
                <div className="card-body" style={{ backgroundColor: "black" }}>
                  <h5 className="card-title">SUMOL</h5>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "18rem",
                  backgroundColor: "black",
                  margin: "10px auto",
                }}
              >
                <img
                  src={Limao}
                  className="card-img-top"
                  alt="burger"
                  style={{ paddingTop: "11px" }}
                />
                <div className="card-body" style={{ backgroundColor: "black" }}>
                  <h5 className="card-title">ICED TEA LIMÃO</h5>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "18rem",
                  backgroundColor: "black",
                  margin: "10px auto",
                }}
              >
                <img
                  src={Pessego}
                  className="card-img-top"
                  alt="burger"
                  style={{ paddingTop: "11px" }}
                />
                <div className="card-body" style={{ backgroundColor: "black" }}>
                  <h5 className="card-title">ICED TEA PÊSSEGO</h5>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "18rem",
                  backgroundColor: "black",
                  margin: "10px auto",
                }}
              >
                <img
                  src={Serra}
                  className="card-img-top"
                  alt="burger"
                  style={{ paddingTop: "11px" }}
                />
                <div className="card-body" style={{ backgroundColor: "black" }}>
                  <h5 className="card-title">ÁGUA </h5>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "18rem",
                  backgroundColor: "black",
                  margin: "10px auto",
                }}
              >
                <img
                  src={sevenUp}
                  className="card-img-top"
                  alt="burger"
                  style={{ paddingTop: "11px" }}
                />
                <div className="card-body" style={{ backgroundColor: "black" }}>
                  <h5 className="card-title">7 UP</h5>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.orderDiv}>
            <Link
              className={classes.orderLink}
              // href="https://www.airmenu.com/Like_a_Lord_Burgers"
              to="/locations"
            >
              {" "}
              <p className={classes.orderText}>ENCOMENDAR</p>
            </Link>
            <Route path="/locations" component={Locations} exact />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Menu;
