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

seed_user(29)

// COMMAND:   ' node user-data.js'
// OUTPUT...

// def seed_users():

// user1 = User(
//     username = "Lindsey Mills",
//     email = "Mariam37@yahoo.com",
//     password = "Jc6qlklWOmGXYnI"
// )

// db.session.add(user1)


// user2 = User(
//     username = "Ali Predovic",
//     email = "Keanu_Runolfsdottir85@hotmail.com",
//     password = "o0YFk88YvPEBk2C"
// )

// db.session.add(user2)


// user3 = User(
//     username = "Boris Padberg",
//     email = "Cicero30@gmail.com",
//     password = "GjG4Kjgle38aKBa"
// )

// db.session.add(user3)


// user4 = User(
//     username = "Alvera Conroy",
//     email = "Noe94@hotmail.com",
//     password = "nOjBpwxBj42uaTy"
// )

// db.session.add(user4)


// user5 = User(
//     username = "Hilma Kris",
//     email = "Evangeline_Durgan@yahoo.com",
//     password = "t2MzqXst0jsvbLR"
// )

// db.session.add(user5)


// user6 = User(
//     username = "Ashly Dare",
//     email = "Markus.Barton22@hotmail.com",
//     password = "vpEBRJdSXo624mS"
// )

// db.session.add(user6)


// user7 = User(
//     username = "Dorthy Shields",
//     email = "Ricky.Beier@hotmail.com",
//     password = "2DN96TsG90VXNeb"
// )

// db.session.add(user7)


// user8 = User(
//     username = "Arch Kohler",
//     email = "Mason_Nicolas79@yahoo.com",
//     password = "cpCSoHu0sJib0kL"
// )

// db.session.add(user8)


// user9 = User(
//     username = "Claudie Konopelski",
//     email = "Meghan.Mayer@yahoo.com",
//     password = "g63z46xQ57yjZZs"
// )

// db.session.add(user9)


// user10 = User(
//     username = "Nathan Davis",
//     email = "Serena.Koepp@hotmail.com",
//     password = "gX7iQG7pwCX3Oo_"
// )

// db.session.add(user10)


// user11 = User(
//     username = "Lysanne Schinner",
//     email = "Lauriane60@gmail.com",
//     password = "RocliLeTgyTSEsj"
// )

// db.session.add(user11)


// user12 = User(
//     username = "Melyna Stehr",
//     email = "Velva.Stiedemann36@hotmail.com",
//     password = "Z6uROTQT_Qxb2LD"
// )

// db.session.add(user12)


// user13 = User(
//     username = "Marta Kunze",
//     email = "Brionna.Pfeffer93@gmail.com",
//     password = "FkgGxxL6S8vB4Ky"
// )

// db.session.add(user13)


// user14 = User(
//     username = "Jalen Lubowitz",
//     email = "Bryana72@yahoo.com",
//     password = "STKqzMGa06m_9xz"
// )

// db.session.add(user14)


// user15 = User(
//     username = "Ricky Lubowitz",
//     email = "Buck.Rowe90@yahoo.com",
//     password = "aHh6s7bA4CB3YjU"
// )

// db.session.add(user15)


// user16 = User(
//     username = "Natalie Dach",
//     email = "Robb_Schuster69@yahoo.com",
//     password = "w0avzdCprw0KKQ3"
// )

// db.session.add(user16)


// user17 = User(
//     username = "Hipolito Sipes",
//     email = "Maud.Gibson70@yahoo.com",
//     password = "HrpznDevwZ5VAGL"
// )

// db.session.add(user17)


// user18 = User(
//     username = "Maiya Krajcik",
//     email = "Parker_Quitzon@yahoo.com",
//     password = "mCcmF0x5w8pc4qU"
// )

// db.session.add(user18)


// user19 = User(
//     username = "Donnell Corwin",
//     email = "Lucio_Bauch@hotmail.com",
//     password = "XKBhzuhSaC2CWwA"
// )

// db.session.add(user19)


// user20 = User(
//     username = "Joseph Nienow",
//     email = "Rasheed.Brakus56@yahoo.com",
//     password = "RHZVnoXYEg3fzgz"
// )

// db.session.add(user20)


// user21 = User(
//     username = "Johan McCullough",
//     email = "Alberta_Wuckert83@yahoo.com",
//     password = "KGXhSiYaFDyzFkb"
// )

// db.session.add(user21)


// user22 = User(
//     username = "Allie Cummings",
//     email = "Margot.MacGyver10@gmail.com",
//     password = "ygcX0Vow77mqqdu"
// )

// db.session.add(user22)


// user23 = User(
//     username = "Lew Moen",
//     email = "Emelia_Terry97@gmail.com",
//     password = "GwrsdwO9tiBVDHw"
// )

// db.session.add(user23)


// user24 = User(
//     username = "Teresa Kiehn",
//     email = "Ellie20@gmail.com",
//     password = "fJb7jrW3yhotC_d"
// )

// db.session.add(user24)


// user25 = User(
//     username = "Alana Pagac",
//     email = "Evangeline71@yahoo.com",
//     password = "FfnYNEe1wvXmiTu"
// )

// db.session.add(user25)


// user26 = User(
//     username = "Shakira McDermott",
//     email = "Gordon_Grant@yahoo.com",
//     password = "_0pF7H1DfFiC1Ru"
// )

// db.session.add(user26)


// user27 = User(
//     username = "Alyce Watsica",
//     email = "Pete12@gmail.com",
//     password = "XCmwC9tkqk5tsMg"
// )

// db.session.add(user27)


// user28 = User(
//     username = "Ena Bernhard",
//     email = "Rahsaan_Schuppe@gmail.com",
//     password = "6rja2vrEgL9BaIR"
// )

// db.session.add(user28)


// user29 = User(
//     username = "Isabella Schulist",
//     email = "Conner15@gmail.com",
//     password = "Sc_vnwxIhsVv1W1"
// )

// db.session.add(user29)

// db.session.commit()



// def undo_users():
// db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
// db.session.commit()