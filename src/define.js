import { get, set } from "./storage.js";

function defineInNewTab(phrase) {
  let strings = (`define ` + phrase).split(" ");
  let url = "https://www.google.com/search?";
  strings.forEach((string) => {
    url += `q=${string}&`;
  });
  chrome.tabs.create({ url: url });
}

function saveDefinition(phrase, definition) {
  if (phrase == null) return;

  get("doRecord", true, (doRecord) => {
    if (!doRecord) return;

    get("history", [], (history) => {
      const index = history.findIndex((entry) => {
        return entry.phrase == phrase;
      });

      if (index == -1) {
        history.push({
          phrase: phrase,
          definition: definition,
          lookups: [new Date()],
        });
      } else {
        let updatedEntity = history[index];
        updatedEntity.lookups.push(new Date());
        updatedEntity.definition = definition;
      }

      set("history", history);
    });
  });
}

export { defineInNewTab, saveDefinition };
