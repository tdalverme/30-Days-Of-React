const usuarios = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
  
// 1. Find the person who has many skills in the users object.
let maxSkills = 0
let maxPerson = undefined
let maxPersonName = ''

for (const [key, value] of Object.entries(usuarios)) {
    if (value.skills.length > maxSkills) {
        maxPerson = value
        maxPersonName = key
        maxSkills = value.skills.length
    }
}

console.log(`${maxPersonName} knows ${maxPerson.skills}`)

// 2. Count logged in users,count users having greater than equal to 50 points from the following object.
let loggedInUsers = 0
let moreThan50PointsUsers = 0

for (const [_, value] of Object.entries(usuarios)) {
    if (value.isLoggedIn) {
        loggedInUsers++
    }

    if (value.points >= 50) {
        moreThan50PointsUsers++
    }
}

console.log('Logged in users:', loggedInUsers)
console.log('Number of users with more than 50 points:', moreThan50PointsUsers)

// 3. Find people who are MERN stack developer from the users object
for (const [key, value] of Object.entries(usuarios)) {
    let mernStack = ['MongoDB', 'Express', 'Node', 'React']
    let isMernDev = mernStack.every((val) => {
        return value.skills.indexOf(val) !== -1
    })
    
    if (isMernDev) {
        console.log(`${key} is a MERN stack developer`)
    }
}

// 4. Set your name in the users object without modifying the original users object
let copyUsers = Object.assign({}, usuarios)

copyUsers['Tomas'] = { 
    email: 'tomas@tomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
    age: 24,
    isLoggedIn: true,
    points: 60
}

console.log(usuarios)
console.log(copyUsers)
console.log(copyUsers['Tomas'])

// 5. Get all keys or properties of users object
console.log(Object.keys(usuarios))

// 6. Get all the values of users object
console.log(Object.values(usuarios))

// 7. Use the countries object to print a country name, capital, populations and languages.
const countries = [
    {
        name: 'Argentina',
        capital: 'Buenos Aires',
        population: 45000000,
        languages: ['Spanish']   
    },
    {
        name: 'Brazil',
        capital: 'Brasilia',
        population: 100000000,
        languages: ['Portuguese']   
    },
    {
        name: 'Canada',
        capital: 'Ottawa',
        population: 33000000,
        languages: ['French', 'English']   
    },
]

countries.forEach((value) => {
    console.log(value.name)
    console.log(value.capital)
    console.log(value.population)
    console.log(value.languages)
})