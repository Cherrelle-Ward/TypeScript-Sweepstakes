import { ResultsList } from "./Classes/ResultsList.js";
import { UserResults } from "./Classes/User_Results.js";
import { countries } from "./CountryArray.js";

const form = document.querySelector("form")! as HTMLFormElement;
const input = document.querySelector("input") as HTMLInputElement;
let randCountry: number;
const ul = document.querySelector("ul")!;
const list = new ResultsList(ul);
const submitBtn = document.getElementById("generateBtn") as HTMLButtonElement;
// let arrEl: string[] = [];

//! API CALL

// const flagApi = async () => {
//   // let res = await fetch("https://rickandmortyapi.com/api/character/");
//   let res = await fetch(
//     "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/by-code.json"
//   );
//   console.log(res);
//   let data = await res.json();
//   console.log(data);

//   Object.values(data).forEach((value: object) => {
//     console.log(value.emoji);
//   });
// };

// if (!countries.length) {
//   submitBtn.innerText = "No more Teams to Distribute";
// }

const submitHandle = (e: Event): void => {
  if (countries.length >= 1 && input.value) {
    let arrEl: string[] = [];
    randCountry = Math.floor(Math.random() * countries.length);
    arrEl = countries.splice(randCountry, 1);
    let country = arrEl.toString();
    const user = new UserResults(input.value, country);
    form.reset();
    list.render(user);
    console.log(country, input.value);
    console.log(countries);
  } else if (!input.value) {
    // submitBtn.disabled = true;
    console.log("Type something");
  }
};
//! Button
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  submitHandle(e);
  // flagApi();
});
