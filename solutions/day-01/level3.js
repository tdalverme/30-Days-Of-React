// 1. The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age
ages.sort()
console.log(ages)
console.log('Min:', ages[0])
console.log('Max:', ages[ages.length - 1])

// Find the median age(one middle item or two middle items divided by two)
if (ages.length % 2 == 0) {
    let median = (ages[parseInt(ages.length / 2)] + ages[parseInt(ages.length / 2) - 1]) / 2
    console.log('Median:', median)
} else {
    console.log('Median:', ages[parseInt(ages.length / 2)])
}

// Find the average age(all items divided by number of items)
let sum = 0
for (let i = 0; i < ages.length; i++) {
    sum += ages[i]
}

let average = sum / ages.length
console.log('Average:', average)

// Find the range of the ages(max minus min)
console.log('Range:', ages[ages.length - 1] - ages[0])

// Compare the value of (min - average) and (max - average), use abs() method
console.log('min - average:', Math.abs(ages[0] - average))
console.log('max - average:', Math.abs(ages[ages.length - 1] - average))

// 2. Slice the first ten countries from the countries array
console.log('Slice first 10:', countries.slice(0, 10))

// 3. Find the middle country(ies) in the countries array
if (countries.length % 2 == 0) {
    console.log('Middle countries:', countries[parseInt(countries.length / 2) - 1], '-', countries[parseInt(countries.length / 2)])
} else {
    console.log('Middle country:', countries[parseInt(countries.length / 2)])
}

// 4. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let countries_1 = []
let countries_2 = []

if (countries.length % 2 != 0) {
    countries_1 = countries.slice(0, parseInt(countries.length / 2) + 1)
    countries_2 = countries.slice(parseInt(countries.length / 2) + 1)
} else {
    countries_1 = countries.slice(0, parseInt(countries.length / 2))
    countries_2 = countries.slice(parseInt(countries.length / 2))
}

console.log(countries_1)
console.log(countries_2)