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

// 6. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
let capitalizeArray = function (arr) {
    return arr.map((value) => { return value.toUpperCase() })
}

console.log(capitalizeArray(['tomas', 'dal', 'verme']))

// 7. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
let addItem = function (arr, item) {
    arr.push(item)
    return arr
}

console.log(addItem([1, 2, 3], 4))

// 8. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
let removeItem = function (arr, index) {
    arr.splice(index, 1)
    return arr
}

console.log(removeItem([1, 2, 3, 4, 5], 3))

// 9. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
let evensAndOdds = function (number) {
    let evens = Math.floor(number / 2) + 1
    let odds = Math.floor(number / 2)

    if (number % 2 !== 0) {
        odds++
    }

    console.log(`The number of evens are ${evens}`)
    console.log(`The number of odds are ${odds}`)
}

evensAndOdds(10);

// 10. Write a function which takes any number of arguments and return the sum of the arguments
let sum = function (...args) {
    let sum = 0

    for (let i = 0; i < args.length; i++) {
        sum += args[i]    
    }

    return sum
}

console.log(sum(1, 2, 3, 4))

// 11. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
let userIdGenerator = function () {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;

    for (let i = 0; i < 7; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

   return result;
}

console.log(userIdGenerator())