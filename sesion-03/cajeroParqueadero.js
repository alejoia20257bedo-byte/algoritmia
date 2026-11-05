const prices = {
    "car": 4000,
    "motorbike": 2000
}

let database = JSON.parse(localStorage.getItem("parkingDatabase")) || []

let totalSum = {
    "cars": 0,
    "totalCars": [],
    "motorbike": 0,
    "totalMotorbikes": [],
    "total": 0
}

// Rebuild totalSum from persistent storage on startup
for (let data of database) {
    totalSum.total += data.total
    if (data.vehicule === "car") {
        totalSum.cars += 1
        totalSum.totalCars.push(data.total)
    } else if (data.vehicule === "motorbike") {
        totalSum.motorbike += 1
        totalSum.totalMotorbikes.push(data.total)
    }
}

function parkingLot() {
    let owner = String(prompt("Enter your name: ")).toLowerCase()
    let vehicule = String(prompt("Type your vehicule (car/motorbike): ")).toLowerCase()
    
    if (!prices[vehicule]) {
        console.log("Enter a valid vehicule")
    } else {
        let minutes = Number(prompt("Enter the number in minutes: "))
        let invoice = prompt("Do you have an invoice from the mall (yes/not)? ").toLowerCase()

        let hours = 0
        let total = 0

        if (minutes <= 15) {
            console.log("You do not pay anything")
            total = 0
        } else if (vehicule === "car" && minutes > 15) {
            hours = Math.floor(minutes / 60)
            if (minutes % 60 > 0) {
                hours += 1
            }
            total = prices.car * hours

            if (hours >= 30 && invoice === "yes") {
                total = total / 2
                console.log(`In total, u pay ${total}`)
            } else {
                console.log(`In total, u pay ${total}`)
            }
            totalSum.cars += 1
            totalSum.totalCars.push(total)
            totalSum.total += total
        } else if (vehicule === "motorbike" && minutes > 15) {
            hours = Math.floor(minutes / 60)
            if (minutes % 60 > 0) {
                hours += 1
            }
            total = prices.motorbike * hours
        
            if (hours >= 30 && invoice === "yes") {
                total = total / 2
                console.log(`In total, u pay ${total}`)
            } else {
                console.log(`In total, u pay ${total}`)
            }
            totalSum.motorbike += 1
            totalSum.totalMotorbikes.push(total)
            totalSum.total += total
        }
        
        database.push({
            "owner": owner,
            "vehicule": vehicule,
            "minutes": minutes,
            "invoice": invoice,
            "total": total
        })
        
        localStorage.setItem("parkingDatabase", JSON.stringify(database))
    }
}

parkingLot()
console.log(totalSum)