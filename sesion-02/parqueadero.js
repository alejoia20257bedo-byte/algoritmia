let vehicule = String(prompt("Type your vehicule (car/motorbike): ")).toLowerCase()

const prices = {
    "car": 4000,
    "motorbike": 2000
}

if (!prices[vehicule]) {
    console.log("Enter a valid vehicule")
} else {
    let minutes = Number(prompt("Enter the number in minutes: "))
    if (minutes < 0) {
        console.log("Error: Minutes cannot be negative. Please enter a valid number.")
    } else {
        let invoice = prompt("Do you have an invoice from the mall (yes/not)? ").toLowerCase()
    
        let hours = 0
        let total = 0

        if (minutes <= 15) {
            console.log("You do not pay anything")
        } else if (vehicule === "car" && minutes > 15) {

            hours = Math.floor(minutes / 60)
            if (minutes % 60 > 0) {
                hours += 1
            }
            // Calculate total AFTER hours are fully figured out
            total = prices.car * hours

            if (hours >= 30 && invoice === "yes") {
                total = total / 2
                console.log(`In total, u pay ${total}`)
            } else {
                console.log(`In total, u pay ${total}`)
            } 

        } else if (vehicule === "motorbike" && minutes > 15) {

            hours = Math.floor(minutes / 60)
            if (minutes % 60 > 0) {
                hours = hours + 1
            }
            
            total = prices.motorbike * hours
            
            if (hours >= 30 && invoice === "yes") {
                total = total / 2
                console.log(`In total, u pay ${total}`)
            } else {
                console.log(`In total, u pay ${total}`)
            }
        }
    }
}