from app.models import db, Project


def seed_projects():

    demo = User(user_id='Demo', email='demo@aa.io',
                password='password')
    db.session.add(demo)
    db.session.commit()
