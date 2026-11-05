const PIN = 7777
let pinUsuario = Number(prompt("Write your pin: "))

let counter = 0
while (counter < 3) {
    if (pinUsuario === PIN) {
        console.log("Access granted")
    } else {
        console.log("Access denied")
    }
}