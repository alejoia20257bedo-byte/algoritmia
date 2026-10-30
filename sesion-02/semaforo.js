let inputInventory = Number(prompt("Choose the option: "))

if (inputInventory < 0) {
    console.log("Error")
} else if (inputInventory === 0) {
    console.log("Red: Sold out")
} else if (inputInventory > 0 && inputInventory <= 10) {
    console.log("Yellow: ask")
} else if (inputInventory > 10) {
    console.log("Green: Alright")
} else {
    console.log("Choose a correct option")
}