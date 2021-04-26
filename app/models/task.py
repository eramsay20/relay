from .db import db


class Task(db.Model):
    __tablename__ = 'tasks'

    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"))
    complete = db.Column(db.Boolean, default=False)
    title = db.Column(db.String(255))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=True)
    due_date = db.Column(db.Date, nullable=True)
    description = db.Column(db.Text, nullable=True)

    project = db.relationship("Project", back_populates="tasks")
    user = db.relationship("User", back_populates="tasks")
    comments = db.relationship("Comment", back_populates="task")
