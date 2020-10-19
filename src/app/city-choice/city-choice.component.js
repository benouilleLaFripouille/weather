import { TitleComponent } from "../../shared/components/title/title.component";
import { InputComponent } from "../../shared/components/input/input.component";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { DisplayWeatherComponent } from "../../shared/components/degree/display-Weather.component";
import { FormComponent } from "../../shared/components/form/form.component";
import { WeatherService } from "../../shared/services/weather.service";

export class CityChoiceComponent {

    constructor() {
        this.element = null;
        this.city = "";
        this.title = new TitleComponent("Enter the city");
        this.form = new FormComponent(this.city);
      
    }

    getCityOnClick(e) {
        e.preventDefault();
        this.city = this.form.input1.value();
    }

    display() {
        this.element = document.createElement("app-city");
        this.title.display(this.element);
        this.form.display(this.element);
        document.body.appendChild(this.element);

        this.form.btn.element.addEventListener("click", (event) => {
            this.getCityOnClick(event);
         
            WeatherService.get(this.city)
            .then((data) => {
               this.displayWeather(data)
            })
        })
    }

    hide() {
        this.title.hide();
        this.element.parentNode.removeChild(this.element);
    }

    displayWeather(data){
        const tab = {
            "description": data.weather[0].description,
            "temperature": (data.main.temp) - 273.15
        }
        this.weather = new DisplayWeatherComponent(tab.temperature, tab.description);
this.weather.display(this.element);
        
    }

}