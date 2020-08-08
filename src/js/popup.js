// Dynamically fill history list

function fillList() {
    let historyList = document.querySelector("#history-list");

    // Clear all children first
    while (historyList.firstChild) {
        historyList.firstChild.remove();
    }

    chrome.storage.local.get(['history'], function (result) {
        let arr = result.history;
        arr.reverse().forEach(element => {

            let text;
            if (element.length > 20) {
                text = element.substring(0, 20) + '…';
            } else {
                text = element;
            }

            let innerDiv = document.createElement("div");
            innerDiv.textContent = text;
            innerDiv.dataset.fullName = element;
            innerDiv.className = "list-element";
            innerDiv.onclick = () => { define(element) }
            historyList.appendChild(innerDiv);
        });
    });
}

fillList();

// Load and save first checkbox state

let recordHistory = document.querySelector("#checkbox-1")
recordHistory.onclick = () => {
    state = recordHistory.checked;
    chrome.storage.local.set({ 'record': state });
}

chrome.storage.local.get(['record'], function (result) {
    bool = result.record;
    if (bool == undefined || typeof bool != "boolean") {
        bool = true;
    }
    recordHistory.checked = bool;
})

// Load and save second checkbox state

let allowDuplicates = document.querySelector("#checkbox-2")
allowDuplicates.onclick = () => {
    state = allowDuplicates.checked;
    chrome.storage.local.set({ 'duplicate': state });
}

chrome.storage.local.get(['duplicate'], function (result) {
    bool = result.duplicate;
    if (bool == undefined || typeof bool != "boolean") {
        bool = true;
    }
    allowDuplicates.checked = bool;
})

// Bind clear history button functionality

let clearHistory = document.querySelector("#clear-button")
clearHistory.onclick = () => {
    chrome.storage.local.set({ 'history': [] });
    fillList();
}
