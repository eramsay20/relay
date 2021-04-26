const faker = require('faker')

// const randomNumber = (num) => Math.floor(Math.random() * Math.floor(num) + 1)

// num == number of members for a given team number, all will have 1 project they created
const seed_projects = (num) => {
    let i = 1
    let j = 1
    let k = 1
    console.log(`def seed_projects(): `)
    while (j <= 6){
        let i = 1
        while (i <= num) {
            const string = `
            p1_user${k} = Project(user_id=${k}, team_id=${j}, title='${faker.lorem.words(3)}', complete=False)`

            console.log(string)
            console.log("")
            console.log(`db.session.add(p1_user${k})`)
            console.log("")
            i++
            k++
        }
        i = 1;
        j++
    }
    console.log(`db.session.commit()`)
    console.log("")
    console.log("")
    console.log(`
    def undo_projects():
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
    db.session.commit()`)
};

seed_projects(5)

// COMMAND:   ' node seed-data-gen.js'