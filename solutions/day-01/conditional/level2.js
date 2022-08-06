// 1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-79, B
// 60-69, C
// 50-59, D
// 0-49, F
let grade = prompt('Enter your grade:')

if (grade >= 80 && grade <= 100){
    console.log('A')
} else if (grade >= 70 && grade <= 79) {
    console.log('B')
} else if (grade >= 60 && grade <= 69) {
    console.log('C')
} else if (grade >= 50 && grade <= 59) {
    console.log('D')
} else {
    console.log('F')
}

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
let month = prompt('Enter the month:')

if (['september', 'october', 'november'].includes(month.toLowerCase())) {
    console.log('Autumn')
} else if (['december', 'january', 'february'].includes(month.toLowerCase())) {
    console.log('Winter')
} else if (['march', 'april', 'may'].includes(month.toLowerCase())) {
    console.log('Spring')
} else {
    console.log('Summer')
}

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
let day = prompt('Enter the day:')

if (['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].includes(day.toLowerCase())) {
    console.log('Working day')
} else {
    console.log('Weekend day')
}