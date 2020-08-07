let contextItems = [
    {
        id: "define-selection",
        title: "Define",
        contexts: ["selection"]
    }
]

contextItems.forEach(contextItem => {
    chrome.contextMenus.create(contextItem)
});

chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId == "define-selection") {
        let strings = (`define ` + info.selectionText).split(' ');
        let url = "https://www.google.com/search?"
        strings.forEach(string => {
            url += `q=${string}&`
        });
        chrome.tabs.create({ url: url });

        chrome.storage.local.get(['history'], function (result) {
            arr = result.history
            if (arr == undefined || !Array.isArray(arr)) {
                arr = []
            }
            arr.push(info.selectionText)
            if (arr.length > 20) {
                arr.shift()
            }
            chrome.storage.local.set({ 'history': arr })
        })
    }
})