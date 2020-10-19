export class DisplayWeatherComponent {

    constructor(degree,description) {
        this.degree = degree;
        this.description = description
        this.element = null;
    }

    display(parent) {
        this.element = document.createElement("app-degree");
        const degree = document.createElement("h1");
        const description = document.createElement("h1");
        degree.appendChild(document.createTextNode(this.degree));
        description.appendChild(document.createTextNode(this.description))
        this.element.appendChild(degree);
        this.element.appendChild(description);
        parent.appendChild(this.element);
    }

    hide() {
        this.element.parentNode.removeChild(this.element);
    }

}