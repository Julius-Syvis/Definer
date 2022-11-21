import { get, set } from "./storage.js";

// Dynamically fill history list
function fillList() {
  let historyList = document.querySelector("#history-list");

  // Clear all children first
  while (historyList.firstChild) {
    historyList.firstChild.remove();
  }

  get("history", [], function (history) {
    history.reverse().forEach((entry) => {
      const phrase = entry.phrase;
      let text;

      if (phrase.length > 20) {
        text = phrase.substring(0, 18) + "…";
      } else {
        text = phrase;
      }

      let innerDiv = document.createElement("div");
      innerDiv.textContent = text;
      innerDiv.dataset.fullName = phrase;
      innerDiv.className = "list-element";
      innerDiv.title = entry.definition;
      innerDiv.onclick = () => {
        define(phrase);
      };
      historyList.appendChild(innerDiv);
    });
  });
}

fillList();

// Handle checkbox state
let recordHistory = document.querySelector("#checkbox-1");
recordHistory.onclick = () => {
  set("doRecord", recordHistory.checked);
};

get("doRecord", true, function (result) {
  recordHistory.checked = result;
});

// Bind clear history button functionality
let clearHistory = document.querySelector("#clear-button");
clearHistory.onclick = () => {
  chrome.storage.local.set({ history: [] });
  fillList();
};
