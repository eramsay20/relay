from app.models import db, Team, user_team


# Adds a demo user, you can add other users here if you want
def seed_user_teams():

    test1 = user_team(1, 1)
    test2 = user_team(1, 2)

    db.session.add(test1)
    db.session.add(test2)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# Uses a raw SQL query to TRUNCATE the users table.


def undo_user_teams():
    db.session.execute('TRUNCATE user_teams RESTART IDENTITY CASCADE;')
    db.session.commit()
