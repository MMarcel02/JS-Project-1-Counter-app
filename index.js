
let countEl = document.getElementById("count-el")
let savedEntry = document.getElementById("saved-entry")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    console.log(count)
}

function save() {
    let stringCount = count + " - "
    savedEntry.textContent += stringCount
    count = 0
    countEl.textContent = count
}
