const menu = {
    "burger": 12.99,
    "pizza": 15.50,
    "salad": 9.25,
    "steak": 24.00,
    "fries": 4.50,
    "soda": 2.50,
    "water": 1.00,
    "coffee": 3.00,
    "bandeja":8,
    "beer": 3.8
};

function restaurantBill() {
    // Read and split input by commas, then clean up spaces and convert to lowercase
    let input = prompt("Type your order separated by commas (e.g., burger, fries, soda):");
    if (!input) return "Order cancelled.";

    // .split() method to break the user's input string into an array wherever there is a comma, and .trim()
    let items = input.split(",").map(item => item.trim().toLowerCase());
    
    let subtotal = 0;
    let validItems = [];

    // Loop through each item in the array
    for (let item of items) {
        if (item in menu) {
            subtotal += menu[item];
            validItems.push(item);
        } else {
            console.log(`Sorry, "${item}" is not on the menu.`);
        }
    }

    if (validItems.length === 0) {
        return "No valid items ordered.";
    }
    
    // Calculate TAX & TIP based on the combined subtotal
    const tax = 8;
    const tip = 10;
    let calculateTax = subtotal * tax / 100;
    let calculateTip = subtotal * tip / 100;
    let total = subtotal + calculateTax + calculateTip;

    return {
        items: validItems,
        subtotal: subtotal.toFixed(2),
        tax,
        tip,
        calculateTax: calculateTax.toFixed(2),
        calculateTip: calculateTip.toFixed(2),
        total: total.toFixed(2)
    };
}

console.log(restaurantBill());