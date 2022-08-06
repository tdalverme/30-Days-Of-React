// 1. Write a program which tells the number of days in a month.
let month = prompt('Enter a month:')

if (['january', 'march', 'may', 'august', 'october', 'december'].includes(month.toLowerCase())) {
    console.log(month, 'has 31 days.')
} else if(month === 'february') {
    console.log(month, 'has 28 days.')
} else {
    console.log(month, 'has 30 days.')
}

// 2. Write a program which tells the number of days in a month, now consider leap year.
month = prompt('Enter a month:')
let year = prompt('Enter a year:')

if (['january', 'march', 'may', 'august', 'october', 'december'].includes(month.toLowerCase())) {
    console.log(month, 'has 31 days.')
} else if(month === 'february') {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(month, 'has 29 days.')
    } else {
        console.log(month, 'has 28 days.')
    }
} else {
    console.log(month, 'has 30 days.')
}