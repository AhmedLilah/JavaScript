let arr = [1, 2, -1, -2, 0]
let sortedArr = [...arr].sort()
let correctlySortedArr = [...arr].sort((a, b) => {return a-b}) 

console.log(arr)
console.log(sortedArr)
console.log(correctlySortedArr)
