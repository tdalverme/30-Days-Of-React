// 1. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
let userIdGeneratedByUser = function () {
    let numberOfChar = prompt('Enter number of characters:')
    let numberOfIds = prompt('Enter number of IDs:')

    let results = [];
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;

    for (let i = 0; i < numberOfIds; i++) {
        let currResult = ''

        for (let j = 0; j < numberOfChar; j++) {
            currResult += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        results.push(currResult)
    }

   return results;
}

console.log(userIdGeneratedByUser())

// 2. Write a function generateColors which can generate any number of hexa or rgb colors.
let generateColors = function (type, numberOfColors) {
    results = []

    if (type.toLowerCase() === 'rgb') {
        for (let i = 0; i < numberOfColors; i++) {
            let r = Math.floor(Math.random() * 256)
            let g = Math.floor(Math.random() * 256)
            let b = Math.floor(Math.random() * 256)
    
            results.push(`rgb(${r}, ${g}, ${b})`)
        }
    } else if (type.toLowerCase() === 'hexa') {
        let characters = 'ABCDEF123456789';
        let charactersLength = characters.length;

        for (let i = 0; i < numberOfColors; i++) {
            let currResult = '#'

            for (let j = 0; j < 6; j++) {
                currResult += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            results.push(currResult)
        }
    }

    return results
}

console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

// 3. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
let shuffleArray = function (arr) {
    return arr.sort(() => {
        return Math.random() - 0.5
    })
}

console.log(shuffleArray([1, 2, 3, 4, 5]))

// 4. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
let factorial = function (num) {
    if (num === 0) {
        return 1
    }

    return num * factorial(num - 1)
}

console.log(factorial(4))

// 5. Call your function isEmpty, it takes a parameter and it checks if it is empty or not
let isEmpty = function (arr) {
    return arr.length === 0
}

console.log(isEmpty([]))

// 6. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
let average = function (arr) {
    let areNumbers = arr.every((value) => { return typeof value === 'number' })

    if (areNumbers) {
        let sum = 0

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }

        return sum / arr.length
    }
    
    console.log('All items must be numbers!')
    return -1
}

console.log(average([1, 2, 3, 4, 5]))