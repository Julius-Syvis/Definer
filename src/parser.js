// This works as of 2022-11. Might change if Google changes
// identification of defined value in the dictionary card.
const definitionSelector = "[data-dobid=dfn]";
const definitionEl = document.querySelector(definitionSelector);

if (definitionEl) {
  const definition = definitionEl.innerText;

  const reqClass = "yKMVIe";
  const nodes = document.getElementsByClassName(reqClass);

  [...nodes].forEach((node) => {
    const definedWord = node.textContent;
    chrome.runtime.sendMessage({
      definedWord: definedWord,
      definition: definition,
    });
  });
}
