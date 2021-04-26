const faker = require('faker')

// const randomNumber = (num) => Math.floor(Math.random() * Math.floor(num) + 1)

const seed_tasks = (num) => {
    let i = 1
    let j = 1
    console.log(`def seed_tasks(): `)
    while (j <= num) {
        while (i <= 5) {
            const string = `
            p${j}_task${i} = Task(
            project_id=${j},
            complete=False,
            title='${faker.lorem.words(5)}',
            user_id=None,
            due_date=None,
            description=None
            )`
            console.log(string)
            console.log("")
            console.log(`db.session.add(p${j}_task${i})`)
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
    def undo_tasks():
    db.session.execute('TRUNCATE tasks RESTART IDENTITY CASCADE;')
    db.session.commit()`)
};

seed_tasks(30)

// COMMAND:   ' node task-data.js'
