// This works ss of 2021-01. Might change if google changes
// identification of defined value in the dictionary card.

let htmlSpans = document.querySelectorAll('[data-dobid="hdw"]');
htmlSpans.forEach(function (htmlSpanElement) {
  // Defined value found
  let definedWord = htmlSpanElement.textContent;
  save(definedWord);
});
