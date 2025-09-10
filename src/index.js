import "./style.css"
import {Home} from "./home.js";
import {Menu} from "./menu.js";
import {Contact} from "./contato.js";

const content = document.querySelector("#content");
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contato");

Home.homePage(content);

const removeClass = () => {
    homeButton.classList.remove("active")
    menuButton.classList.remove("active")
    contactButton.classList.remove("active")
}

homeButton.addEventListener("click", () => {
    removeClass();
    homeButton.classList.add("active");
    Home.homePage(content);
})

menuButton.addEventListener("click", () => {
    removeClass();
    menuButton.classList.add("active");
    Menu.menuPage(content);
})

contactButton.addEventListener("click", () => {
    removeClass();
    contactButton.classList.add("active");
    Contact.contactPage(content);
})