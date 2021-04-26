const faker = require('faker')

// const randomNumber = (num) => Math.floor(Math.random() * Math.floor(num) + 1)

const seed_user = (num) => {
    let i = 1
    console.log(`def seed_users(): `)

    while (i <= num) {
        const string = `
        user${i} = User(
        username= "${faker.name.firstName()} ${faker.name.lastName()}",
        email= "${faker.internet.email()}",
        password= "${faker.internet.password()}"
        )`
        console.log(string)
        console.log("")
        console.log(`db.session.add(user${i})`)
        console.log("")
        console.log("")
        i++
    }
    console.log(`db.session.commit()`)
    console.log("")
    console.log("")
    console.log(`
    def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()`)
};

seed_user(19)

// COMMAND:   ' node seed-data-gen.js'