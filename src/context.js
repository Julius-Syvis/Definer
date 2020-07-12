let contextItems = [
    {
        id: "function-1",
        title: "Function 1",
        contexts: ["selection"]
    },
    {
        id: "function-2",
        title: "Function 2",
        contexts: ["selection"],
        type: "separator"
    },
    {
        id: "function-3",
        title: "Function 3",
        contexts: ["selection"]
    }
]

contextItems.forEach(contextItem => {
    chrome.contextMenus.create(contextItem)
});