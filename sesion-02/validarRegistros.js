let age = Number(prompt("Write your age: "))
let accept = prompt("Do you accept the terms and conditions? (yes/no)").toLowerCase()

if (age >= 14 && accept === "yes") {
    console.log("You are accepted")
} else {
    console.log("You are not accepted")
}