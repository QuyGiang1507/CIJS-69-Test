export default class ShortenLinkModal {
    $resultContainer;
    $trueResultContainer;
    $resultTitle;
    $resultLink;
    $falseResultContainer;
    $falseResult;

    constructor() {
        this.$resultContainer = document.createElement("div");
        this.$resultContainer.setAttribute("class", "mt-6 w-full text-center hidden");

        this.$trueResultContainer = document.createElement("div");

        this.$resultTitle =document.createElement("p");
        this.$resultTitle.textContent = "Link generated";
        this.$resultTitle.setAttribute("class", "font-bold text-2xl")

        this.$resultLink = document.createElement("a");
        this.$resultLink.href = "";
        this.$resultLink.setAttribute("class", "text-blue-800 underline");

        this.$falseResultContainer = document.createElement("div");

        this.$falseResult = document.createElement("p");
        this.$falseResult.textContent = "Please input an url";
        this.$falseResult.setAttribute("class", "text-red-800 text-2xl hidden");
    }

    hidden = (e) => {
        this.$resultContainer.classList.add("hidden");
    }

    block = (e) => {
        this.$resultContainer.classList.remove("hidden");
    }

    hiddenLink = (e) => {
        this.$trueResultContainer.classList.add("hidden");
    }

    blockLink = (e) => {
        this.$trueResultContainer.classList.remove("hidden");
    }

    removeError = (e) => {
        this.$falseResult.textContent = "";
    }

    emptyUrl = (e) => {
        this.$resultContainer.classList.remove("hidden");
        this.$falseResult.classList.remove("hidden");
        this.$falseResult.textContent = "Please input a url";
    }

    resultFalse = (e) => {
        this.$resultContainer.classList.remove("hidden");
        this.$falseResult.classList.remove("hidden");
        this.$falseResult.textContent = "Can not shorten your Link";
    }

    render() {
        this.$trueResultContainer.appendChild(this.$resultTitle);
        this.$trueResultContainer.appendChild(this.$resultLink);

        this.$falseResultContainer.appendChild(this.$falseResult);

        this.$resultContainer.appendChild(this.$trueResultContainer);
        this.$resultContainer.appendChild(this.$falseResultContainer);

        return this.$resultContainer;
    }
}