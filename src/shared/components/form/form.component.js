import { ButtonComponent } from "../button/button.component";
import { InputComponent } from "../input/input.component";

export class FormComponent {
    constructor(city) {

        this.input1 = new InputComponent({
            type: "text",
            name: "city",
            value : city,
        });
       
        this.btn = new ButtonComponent("Valider");
    }

    display(parent) {

        this.element = document.createElement("app-form");
        
        this.input1.display(parent);
        this.btn.display(parent);
        parent.appendChild(this.element);

    }

}