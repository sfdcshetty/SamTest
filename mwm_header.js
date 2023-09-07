import { LightningElement } from 'lwc';

export default class Mwm_header extends LightningElement {
    get linksList() {
        return [
            {id: "products", href: "#", target: "_blank", label: "PRODUCTS"},
            {id: "contact", href: "#", target: "_blank", label: "CONTACT"},
            {id: "service", href: "#", target: "_blank", label: "SERVICE"},
        ]
    }
}