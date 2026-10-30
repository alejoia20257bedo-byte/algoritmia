let yearInput = Number(prompt("Type any year: "))

if ((yearInput % 4 === 0 && yearInput % 100 !== 0) || yearInput % 400 === 0) {
    console.log("It is a leap year")
} else {
    console.log("It is not a leap year")
}