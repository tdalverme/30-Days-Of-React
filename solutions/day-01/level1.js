// 1. Declare an empty array;
let arr = []

// 2. Declare an array with more than 5 number of elements
arr = [1, 2, 3, 4, 5, 6, 7]

// 3. Find the length of your array
console.log('Length is:', arr.length)

// 4. Get the first item, the middle item and the last item of the array
console.log('First:', arr[0])
console.log('Middle:', arr[parseInt(arr.length / 2)])
console.log('Last:', arr[arr.length - 1])

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, 'hello world', true, {name: 'vito', lastName: 'corleone'}, [1, 2, 3], 0.5]

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 7. Print the array using console.log()
console.log(itCompanies)

// 8. Print the number of companies in the array
console.log('Number of campanies:', itCompanies.length)

// 9. Print the first company, middle and last company
console.log('First:', itCompanies[0])
console.log('Middle:', itCompanies[parseInt(itCompanies.length / 2)])
console.log('Last:', itCompanies[itCompanies.length - 1])

// 10. Print out each company
console.log(itCompanies.join(', '))

// 11. Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase())
}

// console.log(itCompanies.join(', ').toUpperCase())

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let str = ''
for (let i = 0; i < itCompanies.length - 1; i++) {
    str += itCompanies[i]
    str += ', '
}

console.log(str + 'and ' + itCompanies[itCompanies.length - 1] + ' are big IT companies.')

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const company = 'Facebook'

if(itCompanies.includes(company)) {
    console.log('The company is in the array!')
} else {
    console.log('The company is NOT in the array!')
}

// 14. Filter out companies which have more than one 'o' without the filter method
let result = []

for (let i = 0; i < itCompanies.length; i++) {
    if (itCompanies[i].toLowerCase().indexOf('o') == itCompanies[i].toLowerCase().lastIndexOf('o')) {
        result.push(itCompanies[i])
    }
}

console.log(result)

// 15. Sort the array using sort() method
console.log('Sorted:', itCompanies.sort())

// 16. Reverse the array using reverse() method
console.log('Reversed:', itCompanies.reverse())

// 17. Slice out the first 3 companies from the array
console.log('Slice first 3:', itCompanies.slice(0, 3))

// 18. Slice out the last 3 companies from the array
console.log('Slice last 3:', itCompanies.slice(itCompanies.length - 3))

// 19. Slice out the middle IT company or companies from the array
let aux_arr = itCompanies.slice()
console.log('Slice middle company:', aux_arr.splice(parseInt(itCompanies.length / 2), 1))

// 20. Remove the first IT company from the array
aux_arr = itCompanies.slice()
aux_arr.shift()
console.log('Remove first:', aux_arr)

// 21. Remove the middle IT company or companies from the array
aux_arr = itCompanies.slice()
aux_arr.splice(parseInt(itCompanies.length / 2), 1)
console.log('Remove middle company:', aux_arr)

// 22. Remove the last IT company from the array
aux_arr = itCompanies.slice()
aux_arr.pop()
console.log('Remove last:', aux_arr)

// 23. Remove all IT companies
aux_arr = itCompanies.slice()
aux_arr.splice(0, aux_arr.length)
console.log('Remove all:', aux_arr)