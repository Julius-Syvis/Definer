let contextItems = [
    {
        id: "define-selection",
        title: "Define",
        contexts: ["selection"]
    }
];

contextItems.forEach(contextItem => {
    chrome.contextMenus.create(contextItem)
});

chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId == "define-selection") {
        define(info.selectionText)
    };
})
