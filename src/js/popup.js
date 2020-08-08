let historyList = document.querySelector("#history-list")

chrome.storage.local.get(['history'], function (result) {
    let arr = result.history
    arr.reverse().forEach(element => {

        let text
        if (element.length > 20) {
            text = element.substring(0, 20) + ".."
        } else {
            text = element
        }

        let innerDiv = document.createElement("div");
        innerDiv.textContent = text
        innerDiv.dataset.fullName = element
        innerDiv.className = "list-element"
        innerDiv.onclick = () => { define(element) }
        historyList.appendChild(innerDiv)
    });
});