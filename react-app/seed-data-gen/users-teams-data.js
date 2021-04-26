const faker = require('faker')

// const randomNumber = (num) => Math.floor(Math.random() * Math.floor(num) + 1)

const seed_user = (num) => {
    let i = 1
    let j = 1
    console.log(`COPY BELOW HERE`)
    team = ['test', 'onboarding', 'product', 'sales', 'engineering', 'finance', 'hr']

    while(j <= num){
        while (i <= 6) {
            const string = `
            user${j} = User(
            username= "${faker.name.firstName()} ${faker.name.lastName()}",
            email= "${faker.internet.email()}",
            password= "${faker.internet.password()}"
            )`
            console.log(string)
            console.log("")
            console.log(`user${j}.teams.append(${team[i]})`)
            console.log(`db.session.add(user${j})`)
            console.log("")
            i++
            j++
        }
        i = 1
    }
    console.log("")
    console.log("")
};

seed_user(30)

// COMMAND:   ' node users-teams-data.js'