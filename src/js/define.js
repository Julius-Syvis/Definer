function define(phrase) {
    let strings = (`define ` + phrase).split(' ');
    let url = "https://www.google.com/search?"
    strings.forEach(string => {
        url += `q=${string}&`
    });
    chrome.tabs.create({ url: url });

    chrome.storage.local.get(['record'], function (recordResult) {
        recordChecked = recordResult.record;
        if (recordChecked == true) {
            chrome.storage.local.get(['history'], function (historyResult) {
                arr = historyResult.history;
                if (arr == undefined || !Array.isArray(arr)) {
                    arr = [];
                }
                chrome.storage.local.get(['duplicate'], function (duplicateResult) {
                    duplicateChecked = duplicateResult.duplicate;
                    if (duplicateChecked) {
                        arr.push(phrase);
                    }
                    else {
                        if (!arr.includes(phrase)) {
                            arr.push(phrase);
                        }
                    }
                    if (arr.length > 20) {
                        arr.shift();
                    }
                    chrome.storage.local.set({ 'history': arr });
                })
            })
        }
    })
}