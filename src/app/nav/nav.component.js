import { BrandTitleComponent } from "../../shared/components/brand-title/brand-title.component";

export class NavComponent {

    constructor() {
        this.element = null;
        this.title = new BrandTitleComponent("Weather");
    }

    display() {
        this.element = document.createElement("app-nav");
        this.title.display(this.element);
        document.body.appendChild(this.element);
    }

    hide() {
        this.title.hide();
        this.element.parentNode.removeChild(this.element);
    }

}