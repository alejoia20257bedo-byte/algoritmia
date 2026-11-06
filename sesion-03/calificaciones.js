function qualifications(scoresArray) {

    // Average score
    let average = scoresArray.reduce((sum, num) => sum + num, 0) / scoresArray.length
    let differences = scoresArray.map(score => score - average);
    
    // Highest score
    let highestScore = Math.max(...scoresArray)
    
    // Lowest score
    let lowestScore = Math.min(...scoresArray)

    // Count approved scores
    let approvedScores = scoresArray.filter(score => score > 3)
    let sumApprovedScores = approvedScores.reduce((sum, num) => sum + num, 0 )

    // Count how many lost 
    let lostScores = scoresArray.filter(score => score < 3)
    let countLostScores = lostScores.length

    return {
        "average": average,
        "differencesFromAverage": differences,
        "highestScore": highestScore,
        "lowestScore": lowestScore,
        "approvedScores": approvedScores,
        "sumApprovedScores": sumApprovedScores,
        "lostScores": lostScores,
        "countLostScores": countLostScores
    }
}

// Now you can test it with completely different sets of data:
let groupA = [3.5, 2.8, 4.9, 3.0, 4.2];
let groupB = [4.1, 3.9, 4.8, 5.0];

console.log("Group A Results:", qualifications(groupA));
console.log("Group B Results:", qualifications(groupB));