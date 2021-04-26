const faker = require('faker')

// const randomNumber = (num) => Math.floor(Math.random() * Math.floor(num) + 1)

const seed_comments = (num) => {
    let i = 1
    let j = 1
    console.log(`def seed_comments(): `)
    while (j <= num) {
        while (i <= 2) {
            const string = `
            task${j}_comment${i} = Comment(
            user_id=${i}, 
            task_id=${j}, 
            comment='${faker.lorem.words(8)}'
            )`
            console.log(string)
            console.log("")
            console.log(`db.session.add(task${j}_comment${i})`)
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
    def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()`)
};

seed_comments(150)

// COMMAND:   ' node comment-data.js'
