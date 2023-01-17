import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const contentContainer = document.querySelector("#content");

const header = document.createElement("header");
header.innerHTML = `
<nav>
<h2>SoulFoodSav</h2>
<ul class="links">
    <li id="home">Home</li>
    <li id="menu">Menu</li>
    <li id="contact">Contact us</li>
</ul>
</nav>`;

contentContainer.appendChild(header)

const home = document.querySelector("#home")
const menu = document.querySelector("#menu")
const contact = document.querySelector("#contact")  

home.addEventListener(`click`, ()=> {
    loadHome()
})
menu.addEventListener(`click`, ()=> {
    loadMenu()
})   
contact.addEventListener(`click`, ()=> {
    loadContact()
})   

loadHome()