import { LightningElement } from 'lwc';

export default class mwm_footer extends LightningElement {
    get linksList() {
        return [
            {id: "ivrNotice", href: "#", target: "_blank", label: "IVR NOTICE"},
            {id: "legalNotice", href: "#", target: "_blank", label: "LEGAL NOTICE"},
            {id: "dataProtection", href: "#", target: "_blank", label: "DATA PROTECTION"},
            {id: "siteMap", href: "#", target: "_blank", label: "SITEMAP"},
        ]
    }
}