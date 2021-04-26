from app.models import db, Task


def seed_tasks():

    task1 = Task(
        project_id=1,
        complete=False,
        title="test task",
        user_id=1,
        due_date=None,
        description=None
    )

    db.session.add(task1)


def undo_tasks():
    db.session.execute('TRUNCATE tasks RESTART IDENTITY CASCADE;')
    db.session.commit()
