import { ResultsList } from "./Classes/ResultsList.js";
import { UserResults } from "./Classes/User_Results.js";
let countries = [
    "Qatar",
    "Ecuador",
    "Senegal",
    "Netherlands",
    "Spain",
    "Costa Rica",
    "Germany",
    "Japan",
    "England",
    "Iran",
    "United States",
    "Wales",
    "Belgium",
    "Canada",
    "Morocco",
    "Croatia",
    "Argentina",
    "Saudi Arabia",
    "Mexico",
    "Poland",
    "Brazil",
    "Serbia",
    "Switzerland",
    "Cameroon",
    "France",
    "Australia",
    "Denmark",
    "Tunisia",
    "Portugal",
    "Ghana",
    "Uruguay",
    "South Korea",
];
const form = document.querySelector("form");
const input = document.querySelector("input");
let randCountry;
const ul = document.querySelector("ul");
const list = new ResultsList(ul);
const submitBtn = document.getElementById("generateBtn");
let arrEl = [];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (countries.length >= 1) {
        randCountry = Math.floor(Math.random() * countries.length);
        arrEl = countries.splice(randCountry, 1);
        let country = arrEl.toString();
        console.log(country, input.value);
        const user = new UserResults(input.value, country);
        form.reset();
        list.render(user);
    }
    else {
        submitBtn.disabled = true;
        console.log("out of countries");
    }
});
