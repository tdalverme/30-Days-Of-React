// 1. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
let solveQuadratic = function (a = 0, b = 0, c = 0) {
    if (a === 0){
        return { solution1: 0 }
    }

    let solution1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)
    let solution2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a)

    return solution1 !== solution2 ? { solution1, solution2 } : { solution1 }
}

console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

// 2. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
let printArray = function (arr) {
    arr.forEach((val) => { console.log(val) })
}

printArray([1, 2, 3, 4])

// 3. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
let showDateTime = function () {
    return new Date().toLocaleDateString('en-us', { year:"numeric", month:"numeric", day:"numeric"}) 
}

console.log(showDateTime())

// 4. Declare a function name swapValues. This function swaps value of x to y.
let swapValues = function (x, y) {
    return [y, x]
}

let x = 10
let y = 5

console.log(x, y)
console.log(swapValues(10, 5))

// 5. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
let reverseArray = function (arr) {
    let reversed = []

    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i])            
    }

    return reversed
}

console.log(reverseArray([1, 2, 3, 4]))