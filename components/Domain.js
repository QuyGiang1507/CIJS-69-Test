export default class Domain {
    $domainContainer;
    $label;
    $domain;
    $shrtco;
    $9qr;
    $shinny;

    constructor() {
        this.$domainContainer = document.createElement("div");
        
        this.$label = document.createElement("label");
        this.$label.textContent = "Short domain:";

        this.$domain = document.createElement("select");

        this.$shrtco = document.createElement("option");
        this.$shrtco.textContent = "shrtco.de";
        this.$shrtco.value = 1;

        this.$9qr = document.createElement("option");
        this.$9qr.textContent = "9qr.de";
        this.$9qr.value = 2;

        this.$shinny = document.createElement("option");
        this.$shinny.textContent = "shinny.link";
        this.$shinny.value = 3;

    }

    render() {
        this.$domain.appendChild(this.$shrtco);
        this.$domain.appendChild(this.$9qr);
        this.$domain.appendChild(this.$shinny);

        this.$domainContainer.appendChild(this.$label);
        this.$domainContainer.appendChild(this.$domain);

        return this.$domainContainer;
    }
}