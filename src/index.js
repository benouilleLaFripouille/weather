import { Router } from "./shared/router";
import { NavComponent } from "./app/nav/nav.component";

import { CityChoiceComponent } from "./app/city-choice/city-choice.component";
import { WeatherComponent } from "./app/weather/weather.component";

// Router
//     .add(
//         "home",
//         "/home",
//         new WeatherComponent
//     )
//     .navigate("home");

const weather = new WeatherComponent();
weather.display();
