import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.css";
import WebKitchenLogo from "../../assets/LIKE_A_LORD_PICS/LOGOS/WEB-Kitchen-Labs-logo-final-White.png";
import Livro from "../../assets/LIVRO-DE-RECLAMAÇÕES-300x136.png";
import Recheio from "../../assets/recheio logo sem fundo.png";
import Bud from "../../assets/BUD LOGO NOVA ASSINATURA-ai.png";
import UberEats from "../../assets/Uber-Eats-Logo.png";

function Footer() {
  return (
    <div className={classes.mainDiv}>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <h5 className={classes.poweredBy}>
              <b>Parceiros</b>
            </h5>
            <img src={UberEats} alt="uberEats" className={classes.UberEats} />{" "}
            <br />
            <img src={Bud} alt="Bud" className={classes.Bud} /> <br />
            <img src={Recheio} alt="Recheio" className={classes.Recheio} />
          </div>
          <div className="col-md">
            <h5 className={classes.poweredBy}>
              <b>Links</b>
            </h5>
            <p className={classes.Paragraphs}>
              <Link to="/menu" className={classes.LinksToPaths}>
                Ver Menu
              </Link>
            </p>
            <p className={classes.Paragraphs}>
              <Link to="/aboutus" className={classes.LinksToPaths}>
                Sobre Nós
              </Link>
            </p>
            <p className={classes.Paragraphs}>
              {" "}
              <Link to="/locations/" className={classes.LinksToPaths}>
                Localizações
              </Link>
            </p>
          </div>
          <div className="col-md">
            <h5 className={classes.poweredBy}>
              <b>Social</b>
            </h5>

            <a
              style={{ color: "#FBD46E" }}
              className={classes.Paragraphs}
              href="https://instagram.com/likealordburgers?igshid=d21w245xnv4"
            >
              Instagram
            </a>
          </div>
          <div className="col-md">
            <h5 className={classes.poweredBy}>
              <b>Powered by:</b>
            </h5>
            <a href="https://www.webkitchenlabs.com/">
              <img
                className={classes.webImg}
                src={WebKitchenLogo}
                alt="webKitchen"
              />
            </a>
          </div>
          <div className="col-md">
            <a href="https://www.livroreclamacoes.pt/inicio">
              {" "}
              <img
                className={classes.reclamações}
                src={Livro}
                alt="livro de reclamações"
              />
            </a>
          </div>
        </div>
      </div>
      <footer className={classes.bottomFooter}>
        <div className="container">
          <hr style={{ color: "#FBD46E" }} />
          <span style={{ marginBottom: "5px" }} className={classes.copyright}>
            © 2021, LIKE A LORD by Web Kitchen Labs
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
