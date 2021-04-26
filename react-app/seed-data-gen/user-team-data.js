const faker = require('faker')

// const randomNumber = (num) => Math.floor(Math.random() * Math.floor(num) + 1)

const seed_user = (num) => {
    let i = 1
    let j = 1
    console.log(`def seed_user_teams(): `)
    while(j <= num){
        while (i <= num) {
            const string = `
            user${i} = user_team(
            team_id= "${faker.name.firstName()} ${faker.name.lastName()}",
            email= "${faker.internet.email()}",
            password= "${faker.internet.password()}"
            )`
            console.log(string)
            console.log("")
            console.log(`db.session.add(user${i})`)
            console.log("")
            i++
        }
        i = 1;
        j++
    }
    console.log(`db.session.commit()`)
    console.log("")
    console.log("")
    console.log(`
    def undo_users():
    db.session.execute('TRUNCATE user_teams RESTART IDENTITY CASCADE;')
    db.session.commit()`)
};

seed_user(6)

// COMMAND:   ' node user-data.js'
