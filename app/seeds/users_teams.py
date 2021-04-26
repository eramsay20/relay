from app.models import db, Team, user_team, User


def seed_users_teams():
    onboarding = Team(title='Onboarding')
    product = Team(title='Product')
    sales = Team(title='Sales')
    engineering = Team(title='Engineering')
    finance = Team(title='Finance')
    hr = Team(title='HR')

    demo = User(
        username="demo",
        email="demo@aa.io",
        password="password"
    )

    demo.teams.append(onboarding)
    demo.teams.append(product)
    demo.teams.append(sales)
    demo.teams.append(engineering)
    demo.teams.append(finance)
    demo.teams.append(hr)
    db.session.add(demo)

    user1 = User(
        username="Velma Kovacek",
        email="Kiel13@gmail.com",
        password="sb7sThWsBVXGl_R"
    )

    user1.teams.append(onboarding)
    db.session.add(user1)

    user2 = User(
        username="Domingo Shanahan",
        email="Hope.Schiller@yahoo.com",
        password="4R6NNcDjc8UdWdI"
    )

    user2.teams.append(product)
    db.session.add(user2)

    user3 = User(
        username="Serena Reynolds",
        email="Lucas.Morar79@yahoo.com",
        password="7QDKhJO8uvSGC80"
    )

    user3.teams.append(sales)
    db.session.add(user3)

    user4 = User(
        username="Robert D'Amore",
        email="Destinee79@hotmail.com",
        password="pd0A0gD85kZLHmR"
    )

    user4.teams.append(engineering)
    db.session.add(user4)

    user5 = User(
        username="Julien Brakus",
        email="Idella16@yahoo.com",
        password="ofq4OKQAMNrOsZ3"
    )

    user5.teams.append(finance)
    db.session.add(user5)

    user6 = User(
        username="Katherine DuBuque",
        email="Megane.Tremblay@gmail.com",
        password="XTtPT7V6M8ppdPV"
    )

    user6.teams.append(hr)
    db.session.add(user6)

    user7 = User(
        username="Mikel Roberts",
        email="Kaden.Mertz@gmail.com",
        password="9dpuMuEnvdg9jK_"
    )

    user7.teams.append(onboarding)
    db.session.add(user7)

    user8 = User(
        username="Willie Bergstrom",
        email="Zachariah33@gmail.com",
        password="qQfHsfh4bzB6qO0"
    )

    user8.teams.append(product)
    db.session.add(user8)

    user9 = User(
        username="Calista Wolf",
        email="Teresa.Volkman@gmail.com",
        password="CwlPxUvNjiGl9V9"
    )

    user9.teams.append(sales)
    db.session.add(user9)

    user10 = User(
        username="Jake Donnelly",
        email="Agnes70@hotmail.com",
        password="aiqzdZxeCTtg87U"
    )

    user10.teams.append(engineering)
    db.session.add(user10)

    user11 = User(
        username="Marjolaine Jacobi",
        email="Citlalli_Schmitt70@yahoo.com",
        password="QEonXk0JeaJbAXp"
    )

    user11.teams.append(finance)
    db.session.add(user11)

    user12 = User(
        username="Zakary Emard",
        email="Quinton.Langworth@yahoo.com",
        password="tY4Il5pyMnjx3uO"
    )

    user12.teams.append(hr)
    db.session.add(user12)

    user13 = User(
        username="Joe Schuster",
        email="Tyrese60@hotmail.com",
        password="Wi8u1ZeZDStXqLB"
    )

    user13.teams.append(onboarding)
    db.session.add(user13)

    user14 = User(
        username="Kristopher Dickens",
        email="Rodolfo.Jacobson32@yahoo.com",
        password="x3H8Gd4kIjTe_LG"
    )

    user14.teams.append(product)
    db.session.add(user14)

    user15 = User(
        username="Katherine Kreiger",
        email="Mavis64@hotmail.com",
        password="ztVLn0lsV14Ive5"
    )

    user15.teams.append(sales)
    db.session.add(user15)

    user16 = User(
        username="Neva Zieme",
        email="Guadalupe.Mitchell0@gmail.com",
        password="_Tx_W2JsvwyQEVC"
    )

    user16.teams.append(engineering)
    db.session.add(user16)

    user17 = User(
        username="Marcel Haley",
        email="Daisha.Senger62@yahoo.com",
        password="psOYyrfmn9JN5oo"
    )

    user17.teams.append(finance)
    db.session.add(user17)

    user18 = User(
        username="Eryn Keebler",
        email="Antone89@gmail.com",
        password="cgD0TkNfiHukp8N"
    )

    user18.teams.append(hr)
    db.session.add(user18)

    user19 = User(
        username="Jovany Hermann",
        email="Wiley.Gusikowski58@gmail.com",
        password="iP4nHCEN1F6NfCn"
    )

    user19.teams.append(onboarding)
    db.session.add(user19)

    user20 = User(
        username="Jerrod West",
        email="Pearline_Heidenreich28@hotmail.com",
        password="H4BbPibiPhXZjz5"
    )

    user20.teams.append(product)
    db.session.add(user20)

    user21 = User(
        username="Cynthia Muller",
        email="Izabella_Grant@yahoo.com",
        password="J6RsR4uRTfqFSX1"
    )

    user21.teams.append(sales)
    db.session.add(user21)

    user22 = User(
        username="Jedediah Reichel",
        email="Lilly4@yahoo.com",
        password="VEvIZQj9RDQieym"
    )

    user22.teams.append(engineering)
    db.session.add(user22)

    user23 = User(
        username="Margaret Beatty",
        email="Mckayla_Renner30@gmail.com",
        password="_EJa9WoHMBHMLm3"
    )

    user23.teams.append(finance)
    db.session.add(user23)

    user24 = User(
        username="Christian Hammes",
        email="Christine_Metz@yahoo.com",
        password="9ZgVSvWJeGdxzPT"
    )

    user24.teams.append(hr)
    db.session.add(user24)

    user25 = User(
        username="Tia Fisher",
        email="Kristopher.Senger54@yahoo.com",
        password="SYZTH5prF5RBuTj"
    )

    user25.teams.append(onboarding)
    db.session.add(user25)

    user26 = User(
        username="Rogers Ankunding",
        email="Luna.Dach51@yahoo.com",
        password="MXvFsgsndhnR_Sc"
    )

    user26.teams.append(product)
    db.session.add(user26)

    user27 = User(
        username="Floy Rolfson",
        email="Terrance_Rau@hotmail.com",
        password="2ut72Tfyzt2MiuD"
    )

    user27.teams.append(sales)
    db.session.add(user27)

    user28 = User(
        username="Edgar Brown",
        email="Porter.Fay@yahoo.com",
        password="FhnNQWlHk9fo9CU"
    )

    user28.teams.append(engineering)
    db.session.add(user28)

    user29 = User(
        username="Eriberto Ferry",
        email="Zoey36@yahoo.com",
        password="8MNTEoP4SatmSnX"
    )

    user29.teams.append(finance)
    db.session.add(user29)

    user30 = User(
        username="Eloisa Greenholt",
        email="Malachi.Cummerata69@hotmail.com",
        password="TxP1zGts2wP45yK"
    )

    user30.teams.append(hr)
    db.session.add(user30)

    db.session.add(onboarding)
    db.session.add(product)
    db.session.add(sales)
    db.session.add(engineering)
    db.session.add(finance)
    db.session.add(hr)

    db.session.commit()


def undo_users_teams():
    db.session.execute('TRUNCATE users_teams RESTART IDENTITY CASCADE;')
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.execute('TRUNCATE teams RESTART IDENTITY CASCADE;')
    db.session.commit()
