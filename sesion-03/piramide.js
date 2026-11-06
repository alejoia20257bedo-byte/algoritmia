function createPyramid(height) {
    for (let i = 0; i < height; i++) {
        let space = height - i - 1;
        let stars = 2 * i + 1;
        let row = " ".repeat(space) + "*".repeat(stars);
        console.log(row);
    }
}

console.log("Height 1 Pyramid:");
createPyramid(1);

console.log("\nHeight 4 Pyramid:");
createPyramid(4);

console.log("\nHeight 6 Pyramid:");
createPyramid(6);