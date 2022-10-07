var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
arrEl = countries.splice(randCountry, 1);
let country = arrEl.toString();
const flagApi = () => __awaiter(void 0, void 0, void 0, function* () {
    let res = yield fetch("https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/by-code.json");
    console.log(res);
    let data = yield res.json();
    console.log(data);
    Object.values(data).forEach((value) => {
        console.log(value.emoji);
    });
});
const submitHandle = (e) => {
    if (countries.length >= 1 && input.value) {
        console.log(country, input.value);
        const user = new UserResults(input.value, country);
        form.reset();
        list.render(user);
    }
    else {
        submitBtn.disabled = true;
        console.log("out of countries");
    }
};
form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitHandle(e);
    flagApi();
});
