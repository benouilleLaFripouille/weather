import { NavComponent } from "../nav/nav.component";
import { CityChoiceComponent } from "../city-choice/city-choice.component";

export class WeatherComponent {

    constructor() {
        this.element = null;
        this.nav = new NavComponent("Weather");
      
        this.cityComponent = new CityChoiceComponent();
    }

    display() {
        this.element = document.createElement("app-weather");
        this.nav.display(this.element);
     
        this.cityComponent.display(this.element);
        document.body.appendChild(this.element);
    }

    hide() {
        this.title.hide();
        this.element.parentNode.removeChild(this.element);
    }

}