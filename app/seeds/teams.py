
# NO LONGER USED ... delete when seeded fully

# from app.models import db, Team, user_team


# # Adds a demo user, you can add other users here if you want
# def seed_teams():

#     onboarding = Team(title='Onboarding')
#     product = Team(title='Product')
#     sales = Team(title='Sales')
#     engineering = Team(title='Engineering')
#     finance = Team(title='Finance')
#     hr = Team(title='HR')

#     db.session.add(onboarding)
#     db.session.add(product)
#     db.session.add(sales)
#     db.session.add(engineering)
#     db.session.add(finance)
#     db.session.add(hr)

#     db.session.commit()


# # Uses a raw SQL query to TRUNCATE the users table.


# def undo_teams():
#     db.session.execute('TRUNCATE teams RESTART IDENTITY CASCADE;')
#     db.session.commit()
