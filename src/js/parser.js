var dictionaryCards = document.getElementsByClassName(
  "g knavi obcontainer mod"
);

var searchBoxValue = document
  .getElementsByClassName("gLFyf gsfi")[0]
  .getAttribute("value");

if (dictionaryCards.length > 0) {
  for (var i = 0; i < dictionaryCards.length; i++) {
    var attr = dictionaryCards[i].getAttribute("data-md");
    if (attr == "14") {
      var searchedPhrase = searchBoxValue
        .split(" ")
        .filter((word) => word != "define" && word != "Define");

      save(searchedPhrase.join(" "));
    }
  }
}
