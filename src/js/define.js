// The action of opening a new tab
function define(phrase) {
  let strings = (`define ` + phrase).split(" ");
  let url = "https://www.google.com/search?";
  strings.forEach((string) => {
    url += `q=${string}&`;
  });
  chrome.tabs.create({ url: url });
}

// The action of saving a phrase to private dictionary
function save(phrase) {
  if (phrase != null) {
    // Get stored flag 'record' from memory
    // If it's enabled, save new entry to history
    chrome.storage.local.get(["record"], function (recordResult) {
      recordChecked = recordResult.record;
      if (recordChecked == true) {
        // Get stored history from memory
        chrome.storage.local.get(["history"], function (historyResult) {
          arr = historyResult.history;
          if (arr == undefined || !Array.isArray(arr)) {
            arr = [];
          }
          // Get stored flag 'duplicate' from memory
          // If it's enabled, allow duplicate entries
          chrome.storage.local.get(["duplicate"], function (duplicateResult) {
            duplicateChecked = duplicateResult.duplicate;
            if (duplicateChecked) {
              arr.push(phrase);
            } else if (!arr.includes(phrase)) {
              arr.push(phrase);
            }

            if (arr.length > 20) {
              arr.shift();
            }
            chrome.storage.local.set({ history: arr });
          });
        });
      }
    });
  }
}
