function define(phrase) {
    let strings = (`define ` + phrase).split(' ');
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
        arr.push(phrase)
        if (arr.length > 20) {
            arr.shift()
        }
        chrome.storage.local.set({ 'history': arr })
    })
}