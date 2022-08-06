// 1. Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.
let fullName = function (firstName, lastName) {
    return `${firstName} ${lastName}`
}

console.log(fullName('Tomas', 'Dal Verme'))

// 2. Declare a function addNumbers and it takes two two parameters and it returns sum.
let addNumbers = function (num1, num2) {
    return num1 + num2
}

console.log(addNumbers(10, 5))

// 3. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
let areaOfCircle = function (radius) {
    return Math.PI * radius * radius
}

console.log(areaOfCircle(3))

// 4. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
let convertCelciusToFahrenheit = function (celsius) {
    return (celsius * 9/5) + 32
}

console.log(convertCelciusToFahrenheit(37))

// 5. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
let bmi = function (weight, height) {
    return weight / (height * height)
}

let bmiGroup = function (bmi) {
    if (bmi < 18.5) {
        return 'Underweight'
    } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normal weight'
    } else if (bmi >= 25 && bmi < 30) {
        return 'Overweight'
    } else {
        return 'Obese'
    }
}

console.log(bmiGroup(bmi(67, 1.79)))

// 6. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
let checkSeason = function (month) {
    if (['september', 'october', 'november'].includes(month.toLowerCase())) {
        return 'Autumn'
    } else if (['december', 'january', 'february'].includes(month.toLowerCase())) {
        return 'Winter'
    } else if (['march', 'april', 'may'].includes(month.toLowerCase())) {
        return 'Spring'
    } else {
        return 'Summer'
    }
}

console.log(checkSeason('november'))