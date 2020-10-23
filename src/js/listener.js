chrome.webNavigation.onCompleted.addListener(
  function (details) {
    chrome.tabs.executeScript(
      details.tabId,
      { file: "js/define.js" },
      function () {
        chrome.tabs.executeScript(details.tabId, { file: "js/parser.js" });
      }
    );
  },
  { url: [{ urlMatches: "https://www.google.com/*" }] }
);
