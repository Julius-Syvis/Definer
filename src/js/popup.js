let historyList = document.querySelector("#history-list")

let arr = ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6"]
arr.forEach(element => {
    let innerDiv = document.createElement("div");
    innerDiv.textContent = element
    historyList.appendChild(innerDiv)
});