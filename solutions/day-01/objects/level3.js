// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
let personAccount = {
    firstName: 'Tomas',
    lastName: 'Dal Verme',
    incomes: [
        {
            income: 1000,
            description: 'aaaaaaaaa'
        },
        {
            income: 500,
            description: 'bbbbbb'
        },
    ],
    expenses: [
        {
            expense: 150,
            description: 'cccccc'
        },
        {
            expense: 200,
            description: 'ddddd'
        },
    ],
    totalIncome: function () { 
        let total = 0
        for (let i = 0; i < this.incomes.length; i++) {
            total += this.incomes[i].income
        }

        return total
    },
    totalExpense: function () {
        let total = 0
        for (let i = 0; i < this.expenses.length; i++) {
            total += this.expenses[i].expense
        }

        return total
    },
    accountInfo: function () {
        return `${this.firstName} ${this.lastName}. Total incomes: ${this.totalIncome()}. Total expenses: ${this.totalExpense()}. Balance: ${this.accountBalance()}`
    },
    addIncome: function (income, description) {
        this.incomes.push( { income, description } )
    },
    addExpense: function (expense, description) {
        this.expenses.push( { expense, description } )
    },
    accountBalance: function () {
        return this.totalIncome() - this.totalExpense()
    }
}

personAccount.addIncome(100, 'ttttttttttttt')
personAccount.addExpense(50, 'ttttttttttttt')
console.log(personAccount.accountInfo())

// 2. Questions: 2, 3 and 4 are based on the following two arrays:users and products ()
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false,
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true,
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true,
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false,
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false,
    },
    ]

    const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
        ],
        likes: [],
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy'],
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy'],
    },
]

// 2. Imagine you are getting the above users collection from a MongoDB database.
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
let signUp = function ({_id, username, email, password, createdAt, isLoggedIn}) {
    if(users.find((value) => {return username === value.username})) {
        console.log(`User ${username} already exists!`)
    } else {
        users.push({_id, username, email, password, createdAt, isLoggedIn})
        console.log(`User ${username} successfully created.`)
    }
}

signUp({
    _id: 'tm13dv',
    username: 'Tomas',
    email: 'tomas@tomas.com',
    password: '123456',
    createdAt: '06/08/2022 16:06 PM',
    isLoggedIn: true,
},)

// b. Create a function called signIn which allows user to sign in to the application
let signIn = function({username, password}) {
    let user = users.find((value) => {return username === value.username})

    if (user) {
        if (user.password === password){
            user.isLoggedIn = true
            console.log('User successfully signed in.')
        } else {
            console.log('Username or password incorrect!')
        }
    } else {
        console.log('User doesn\'t exist!')
    }
}

signIn({username: 'Tomas', password: '123456'})

// 3. The products array has three elements and each of them has six properties.
// a. Create a function called rateProduct which rates the product
let rateProduct = function ({productId, userId, rate}) {
    let product = products.find((value) => {return productId === value._id})
    
    if (product) {
        product.ratings.push({userId, rate})
        console.log(`Rating added.`)
    } else {
        console.log(`Product ${productId} doesn\'t exist!`)
    }
}

rateProduct({productId: 'aegfal', 'rate': 4.5, userId: 'ghderc'})

// b. Create a function called averageRating which calculate the average rating of a product
let averageRating = function ({productId}) {
    let product = products.find((value) => {return productId === value._id})
    
    if (product) {
        let sum = 0

        for (let i = 0; i < product.ratings.length; i++) {
            sum += product.ratings[i].rate
        }
        
        return sum / product.ratings.length
    } else {
        console.log(`Product ${productId} doesn\'t exist!`)
    }
}

console.log(averageRating({productId: 'eedfcf'}))

// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
let likeProduct = function ( { userId, productId } ) {
    let product = products.find((value) => {return productId === value._id})

    if (product) {
        if (product.likes.includes(userId)) {
            product.likes = product.likes.filter((value) => {return value !== userId})
            console.log('Like removed.')
        } else {
            product.likes.push(userId)
            console.log('Like added.')
        }
    }
}

likeProduct({userId: 'zwf8md', productId: 'hedfcg'})
likeProduct({userId: 'fg12cy', productId: 'aegfal'})