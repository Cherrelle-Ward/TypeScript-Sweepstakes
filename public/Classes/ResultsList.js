export class ResultsList {
    constructor(container) {
        this.container = container;
    }
    render(result) {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerText = result.format();
        li.appendChild(p);
        this.container.append(li);
    }
}
