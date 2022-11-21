import { defineInNewTab, saveDefinition } from "./define.js";

// Setup context
let contextItems = [
  {
    id: "define-selection",
    title: "Define",
    contexts: ["selection"],
  },
];

contextItems.forEach((contextItem) => {
  chrome.contextMenus.create(contextItem);
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId == "define-selection") {
    defineInNewTab(info.selectionText);
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.definedWord) {
    saveDefinition(request.definedWord, request.definition);
  }
});
