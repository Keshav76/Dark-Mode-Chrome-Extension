if (document.querySelector("#popup")) {

    const btn = document.querySelector("#btn");
    btn.addEventListener("click", () => {
        chrome.tabs.executeScript({
            file: "./changer.js"
        })
    })

}