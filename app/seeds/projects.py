from app.models import db, Project


def seed_projects():

    p1_user1 = Project(user_id=1, team_id=1,
                       title='commodi ut fugiat', complete=False)

    db.session.add(p1_user1)

    p1_user2 = Project(user_id=2, team_id=1,
                    title='adipisci est inventore', complete=False)

    db.session.add(p1_user2)

    p1_user3 = Project(user_id=3, team_id=1,
                    title='occaecati omnis modi', complete=False)

    db.session.add(p1_user3)

    p1_user4 = Project(user_id=4, team_id=1,
                    title='quibusdam provident ullam', complete=False)

    db.session.add(p1_user4)

    p1_user5 = Project(user_id=5, team_id=1,
                    title='sequi rem voluptates', complete=False)

    db.session.add(p1_user5)

    p1_user6 = Project(user_id=6, team_id=2,
                    title='impedit aut quis', complete=False)

    db.session.add(p1_user6)

    p1_user7 = Project(user_id=7, team_id=2,
                    title='ut saepe omnis', complete=False)

    db.session.add(p1_user7)

    p1_user8 = Project(user_id=8, team_id=2,
                    title='atque est porro', complete=False)

    db.session.add(p1_user8)

    p1_user9 = Project(user_id=9, team_id=2,
                    title='nostrum sint eveniet', complete=False)

    db.session.add(p1_user9)

    p1_user10 = Project(user_id=10, team_id=2,
                        title='blanditiis quisquam nihil', complete=False)

    db.session.add(p1_user10)

    p1_user11 = Project(user_id=11, team_id=3,
                        title='nobis sit voluptatem', complete=False)

    db.session.add(p1_user11)

    p1_user12 = Project(user_id=12, team_id=3,
                        title='repudiandae nisi quas', complete=False)

    db.session.add(p1_user12)

    p1_user13 = Project(user_id=13, team_id=3, title='sed ut aut', complete=False)

    db.session.add(p1_user13)

    p1_user14 = Project(user_id=14, team_id=3,
                        title='quod laborum minima', complete=False)

    db.session.add(p1_user14)

    p1_user15 = Project(user_id=15, team_id=3,
                        title='iure amet rerum', complete=False)

    db.session.add(p1_user15)

    p1_user16 = Project(user_id=16, team_id=4,
                        title='perferendis praesentium rerum', complete=False)

    db.session.add(p1_user16)

    p1_user17 = Project(user_id=17, team_id=4,
                        title='impedit blanditiis ut', complete=False)

    db.session.add(p1_user17)

    p1_user18 = Project(user_id=18, team_id=4,
                        title='nihil et voluptates', complete=False)

    db.session.add(p1_user18)

    p1_user19 = Project(user_id=19, team_id=4,
                        title='et nemo autem', complete=False)

    db.session.add(p1_user19)

    p1_user20 = Project(user_id=20, team_id=4,
                        title='et aut ducimus', complete=False)

    db.session.add(p1_user20)

    p1_user21 = Project(user_id=21, team_id=5,
                        title='totam error est', complete=False)

    db.session.add(p1_user21)

    p1_user22 = Project(user_id=22, team_id=5,
                        title='explicabo voluptatem unde', complete=False)

    db.session.add(p1_user22)

    p1_user23 = Project(user_id=23, team_id=5,
                        title='magnam incidunt facilis', complete=False)

    db.session.add(p1_user23)

    p1_user24 = Project(user_id=24, team_id=5, title='culpa id et', complete=False)

    db.session.add(p1_user24)

    p1_user25 = Project(user_id=25, team_id=5,
                        title='dicta id delectus', complete=False)

    db.session.add(p1_user25)

    p1_user26 = Project(user_id=26, team_id=6,
                        title='voluptas perspiciatis quae', complete=False)

    db.session.add(p1_user26)

    p1_user27 = Project(user_id=27, team_id=6,
                        title='quo qui nulla', complete=False)

    db.session.add(p1_user27)

    p1_user28 = Project(user_id=28, team_id=6,
                        title='ut quam pariatur', complete=False)

    db.session.add(p1_user28)

    p1_user29 = Project(user_id=29, team_id=6,
                        title='consequuntur est et', complete=False)

    db.session.add(p1_user29)

    p1_user30 = Project(user_id=30, team_id=6,
                        title='assumenda autem quos', complete=False)

    db.session.add(p1_user30)

    db.session.commit()


def undo_projects():
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
    db.session.commit()
