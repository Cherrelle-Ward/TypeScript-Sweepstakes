import { ResultsList } from "./Classes/ResultsList.js";
import { UserResults } from "./Classes/User_Results.js";
import { countries } from "./CountryArray.js";
const form = document.querySelector("form");
const input = document.querySelector("input");
let randCountry;
const ul = document.querySelector("ul");
const list = new ResultsList(ul);
const submitBtn = document.getElementById("generateBtn");
let arrEl = [];
randCountry = Math.floor(Math.random() * countries.length);
const submitHandle = (e) => {
    if (countries.length >= 1 && input.value) {
        arrEl = countries.splice(randCountry, 1);
        let country = arrEl.toString();
        console.log(country, input.value);
        console.log(countries);
        const user = new UserResults(input.value, country);
        form.reset();
        list.render(user);
    }
    if (!input.value) {
        console.log("Type something");
    }
};
form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitHandle(e);
});
