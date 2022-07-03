// code your solution here
function superbowlWin(record) {
    const result = record.find(record => record.result === "W")
    console.log(result)
    return result ? result.year : undefined
}
