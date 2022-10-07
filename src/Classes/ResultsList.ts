import { UserResults } from "./User_Results";

export class ResultsList {
  constructor(private container: HTMLUListElement) {}

  render(result: UserResults) {
    const li = document.createElement("li");
    const p = document.createElement("p");

    p.innerText = result.format();
    li.appendChild(p);

    this.container.append(li);
  }
}
