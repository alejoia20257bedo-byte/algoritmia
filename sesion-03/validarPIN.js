const PIN = 7777

for (let count = 0; count < 3; count++) {
    let pinUsuario = Number(prompt("Write your pin: "))
    
    if (pinUsuario === PIN) {
        console.log("Access granted")
        break
    } else {
        console.log("Access denied")
    }
}