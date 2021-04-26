# from werkzeug.security import generate_password_hash
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io',
                password='password')

    db.session.add(demo)

    db.session.commit()

    user1 = User(
        username="Curtis Hand",
        email="Marcelle_Kerluke@yahoo.com",
        password="boUQdnFJn6XgJyh"
    )


    db.session.add(user1)

    user2 = User(
        username="Lavina Hane",
        email="Harry7@yahoo.com",
        password="OxKFtCBGYU7aj91"
    )

    db.session.add(user2)

    user3 = User(
        username="Jeffry Murazik",
        email="Kieran_Shields40@yahoo.com",
        password="ZAjeGMdrGBiyQUG"
    )

    db.session.add(user3)

    user4 = User(
        username="Candelario Larkin",
        email="Bethany.Rau50@hotmail.com",
        password="UX3dUNVLNJmwJEK"
    )

    db.session.add(user4)

    user5 = User(
        username="Tamara Gottlieb",
        email="Alexandrea.McDermott@gmail.com",
        password="0Cd8K6VoBH2NuPa"
    )

    db.session.add(user5)

    user6 = User(
        username="Winnifred Crooks",
        email="Rowena39@gmail.com",
        password="2nxJDlZ6AjDehm2"
    )

    db.session.add(user6)

    user7 = User(
        username="Janae Hintz",
        email="Cathrine_Weber82@gmail.com",
        password="LqYa0h2rTA3aIsn"
    )

    db.session.add(user7)

    user8 = User(
        username="Jalen Kiehn",
        email="Laura_Hane@gmail.com",
        password="2Rd7pWa9u9ZuqTv"
    )

    db.session.add(user8)

    user9 = User(
        username="Lacy Howe",
        email="Chandler_Wisozk58@hotmail.com",
        password="c8DZw8dHeWyPhVg"
    )

    db.session.add(user9)

    user10 = User(
        username="Nikko Kovacek",
        email="Myah_Kreiger37@gmail.com",
        password="zXFxZ0hnMVRkaXd"
    )

    db.session.add(user10)

    user11 = User(
        username="Viviane Kovacek",
        email="Elsie51@gmail.com",
        password="xU0YjH1Xzw0n9Bs"
    )

    db.session.add(user11)

    user12 = User(
        username="Deja Botsford",
        email="Dedric_Swift39@yahoo.com",
        password="AwLGciaSX8UMPn2"
    )

    db.session.add(user12)

    user13 = User(
        username="Carmella Abbott",
        email="Eileen.Leannon@yahoo.com",
        password="pSFssg8qOBu6m1Q"
    )

    db.session.add(user13)

    user14 = User(
        username="Rogelio Moen",
        email="Alessandro_Windler27@hotmail.com",
        password="zhn_QqyrSYU5fY8"
    )

    db.session.add(user14)

    user15 = User(
        username="Clotilde Shanahan",
        email="Orpha.Senger20@gmail.com",
        password="GD9glYp72t0IbHP"
    )

    db.session.add(user15)

    user16 = User(
        username="Bernard Morar",
        email="Cesar.Kemmer@gmail.com",
        password="R1pDPDYNC6X_3d8"
    )

    db.session.add(user16)

    user17 = User(
        username="Judy O'Keefe",
        email="Declan71@yahoo.com",
        password="QxmZHXI8awQEpuL"
    )

    db.session.add(user17)

    user18 = User(
        username="Dan Crona",
        email="Rene69@gmail.com",
        password="UB5X_GjsTAa6Mmc"
    )

    db.session.add(user18)

    user19 = User(
        username="Alek Schamberger",
        email="Deon9@yahoo.com",
        password="OAo1vL2TZ9b_ukR"
    )

    db.session.add(user19)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
