import app from "../index.js";

export default class ShortenForm {
    $container;
    $shortenForm;
    $shortenFormHeader;
    $label;
    $submitBtn;
    $urlInput;

    _url;
    _flag;

    constructor() {
        this.$container = document.createElement("div");

        this.$shortenForm = document.createElement("form");
        this.$shortenForm.setAttribute("class", "mb-4");

        this.$shortenFormHeader = document.createElement("h2");
        this.$shortenFormHeader.textContent = "Link Shortener";
        this.$shortenFormHeader.setAttribute("class", "flex justify-center font-bold mb-6 text-3xl")

        this.$label = document.createElement("label");
        this.$label.textContent = "Enter a link:";
        this.$label.setAttribute("class", "mr-4");

        this.$urlInput = document.createElement("input");
        this.$urlInput.setAttribute("class", "w-3/5")

        this.$submitBtn = document.createElement("button");
        this.$submitBtn.type = "submit";
        this.$submitBtn.textContent = "Get Link";
        this.$submitBtn.setAttribute("class", "bg-yellow-400 font-bold rounded-sm ml-2 px-2");
        this.$submitBtn.addEventListener("click", this.onSubmit);
    }

    onSubmit = (e) => {
        e.preventDefault();
        app.getShortenURL();
    }

    render() {
        this.$shortenForm.appendChild(this.$shortenFormHeader);
        this.$shortenForm.appendChild(this.$label);
        this.$shortenForm.appendChild(this.$urlInput);
        this.$shortenForm.appendChild(this.$submitBtn);

        this.$container.appendChild(this.$shortenForm);

        return this.$container;
    }
}