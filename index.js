import ShortenForm from "./components/ShortenForm.js";
import Domain from "./components/Domain.js";
import ShortenLinkModal from "./components/ShortenLinkModal.js";

class App {
    $containerEl;
    $shortenForm;
    $domainContainer;
    $shortenLinkResult;
    $footer;

    _domainType;
    _url

    constructor() {
        this.$containerEl = document.createElement("div");
        this.$containerEl.setAttribute("class", "w-1/3 bg-gray-400 py-4 px-4 mx-auto mt-24 px-4 rounded-xl");

        this.$shortenForm = new ShortenForm();

        this.$domainContainer = new Domain();

        this.$footer = document.createElement("h2");
        this.$footer.textContent = "By using shrtcode you agree to our Terms of Service";
        this.$footer.setAttribute("class", "flex justify-center mt-4");

        this.$shortenLinkResult = new ShortenLinkModal();
    }

    async getShortenURL() {
        this._url = this.$shortenForm.$urlInput.value;
        this._domainType = this.$domainContainer.$domain.value;
        this.$shortenLinkResult.removeError();
        this.$shortenLinkResult.hiddenLink();
        this.$shortenForm.$urlInput.value = "";
        if(this._url == "") {
            this.$shortenLinkResult.emptyUrl();
        } else {
            const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${this._url}`);
            const resultURL = await response.json();
            if(resultURL.ok == true) {
                this.$shortenLinkResult.block();
                this.$shortenLinkResult.blockLink();
                const shortenLink = this.$shortenLinkResult.$resultLink;
                if(this._domainType == "1") {
                    shortenLink.href = `http://${resultURL.result.short_link}`;
                    shortenLink.textContent = resultURL.result.short_link;
                } else if (this._domainType == "2") {
                    shortenLink.href = `http://${resultURL.result.short_link2}`;
                    shortenLink.textContent = resultURL.result.short_link2;
                } else {
                    shortenLink.href = `http://${resultURL.result.short_link3}`;
                    shortenLink.textContent = resultURL.result.short_link3;
                }
            } else {
                this.$shortenLinkResult.resultFalse();
            }
        }
    }

    render() {
        this.$containerEl.appendChild(this.$shortenForm.render());
        this.$containerEl.appendChild(this.$domainContainer.render());
        this.$containerEl.appendChild(this.$shortenLinkResult.render());
        this.$containerEl.appendChild(this.$footer);

        return this.$containerEl
    }
}

let appContainer = document.getElementById("root");

const app = new App();

export default app;

appContainer.appendChild(app.render());
