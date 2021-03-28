import React from "react";
import { Link } from "react-router-dom";
import classes from "./AboutUs.css";
import FotoUnas from "../../../src/assets/FOTO PRINCIPAL UBER E PRESS PICS.jpg";
import Footer from "../Footer/Footer";
import Layout from "../Layout/Layout";

function AboutUs() {
  return (
    <>
      <Layout />
      <div className={classes.aboutUs}>
        <div className="container">
          <div className="row">
            <div className="col-md" id="aboutUs">
              <h1 className={classes.aboutUsH1}>SOBRE NÓS</h1>
              <p className={classes.aboutUsP}>
                “Like a Lord burguers by Rui Unas”, ahhh só o nome já faz
                crescer água na boca, não é? <br />
                Associei-me à Web Kitchen Labs para ajudar a restauração em
                Portugal e juntos criámos a Like a lord Burguers.
                <br />
                No meu menu vais encontrar o universo Rui Unas, combinado com as
                melhores receitas americanas. Eu sei... yummy! Smash burguers
                fininhos, deliciosos, abraçados por queijo que sim, senhor.{" "}
                <br />
                O pão é algo em que investimos o nosso tempo e que faz a padeira
                de Aljubarrota querer voltar para nos bater a todos de tão fofo
                e leve que é. <br />
                Miss panamá foi inspirado na minha senhora: exótica e complexa,
                Maluco Beleza é para todos os que querem mais. O Bombunas é para
                os que podem. O Cabaret da Coxa é quase pornográfico e o Like a
                Lord é a receita de assinatura deste conceito. <br />
                Acompanha o teu menu com a melhor cerveja americana: a Bud -
                King of Beers e termina com um delicioso Brownie com caramelo,
                chantilly e bacon. Bacon?! Eu sei... confia.
                <br />
                Lembra-te que quando pedes Like a Lord Burgers estás a promover
                a tua economia local e a ajudar um restaurante perto de ti. E
                isso é coisa bonita. <br />
                Obrigado pelo vosso apoio. Este projeto foi feito a pensar em
                vocês. Espero que gostem. <br />
                <i>Rui Unas</i>
              </p>
            </div>
            <div className="col-md">
              {" "}
              <img className={classes.unasBurger} src={FotoUnas} alt="unas" />
            </div>
          </div>
        </div>
        <div className={classes.contactos}>
          <Link className={classes.contactosLink} to="/aboutus">
            {" "}
            <h1 className={classes.contactosH1}>CONTACTOS</h1>
          </Link>
          <h6 className={classes.contactosH6}>Apoio ao Cliente:</h6>{" "}
          <a
            className={classes.contactosAnchor}
            href="mailto:geral@likealordburgers.com"
          >
            geral@likealordburgers.com
          </a>
          <h6 className={classes.contactosH6}>Lisboa:</h6>{" "}
          <a
            className={classes.contactosAnchor}
            href="mailto:lisboa@likealordburgers.com"
          >
            lisboa@likealordburgers.com
          </a>
          <h6 className={classes.contactosH6}>Odivelas:</h6>{" "}
          <a
            className={classes.contactosAnchor}
            href="mailto:odivelas@likealordburgers.com"
          >
            odivelas@likealordburgers.com
          </a>
          <h6 className={classes.contactosH6}>Caxias:</h6>{" "}
          <a
            className={classes.contactosAnchor}
            href="mailto:caxias@likealordburgers.com"
          >
            caxias@likealordburgers.com
          </a>
          <h6 className={classes.contactosH6}>Carcavelos:</h6>{" "}
          <a
            className={classes.contactosAnchor}
            href="mailto:carcavelos@likealordburgers.com"
          >
            carcavelos@likealordburgers.com
          </a>
          <h6 className={classes.contactosH6}>Cascais:</h6>{" "}
          <a
            className={classes.contactosAnchor}
            href="mailto:cascais@likealordburgers.com"
          >
            cascais@likealordburgers.com
          </a>
          <h6 className={classes.contactosH6}>Porto:</h6>{" "}
          <a
            className={classes.contactosAnchor}
            href="mailto:porto@likealordburgers.com"
          >
            porto@likealordburgers.com
          </a>
        </div>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
