import "./menu.css";
import hamburgerImg from "./images/menu (4).jpg";
import lancheImg from "./images/menu (1).jpg";
import porcaoImg from "./images/menu (2).jpg";
import petiscoImg from "./images/menu (6).jpg";
import salgadoImg from "./images/menu (3).jpg";
import vegImg from "./images/menu (5).jpg"; 

export const Menu = (() => {
  const menuPage = (content) => {
    content.innerHTML = `<div class="menuContainer">
            <div class="menuCard">
              <img src="${hamburgerImg}" alt="Imagem da comida">
              <h3>Hambúrgueres tradicionais</h3>
            </div>
            <div class="menuCard">
              <img src="${lancheImg}" alt="Imagem da comida">
              <h3>Lanches árabes</h3>
            </div>
            <div class="menuCard">
              <img src="${porcaoImg}" alt="Imagem da comida">
              <h3>Porções veganas</h3>
            </div>
            <div class="menuCard">
              <img src="${petiscoImg}" alt="Imagem da comida">
              <h3>Petiscos</h3>
            </div>
            <div class="menuCard">
              <img src="${salgadoImg}" alt="Imagem da comida">
              <h3>Salgados</h3>
            </div>
            <div class="menuCard">
              <img src="${vegImg}" alt="Imagem da comida">
              <h3>Lanches Veganos</h3>
            </div>
        </div>`;
  };

  return { menuPage };
})();
