from .db import db


class Project(db.Model):
    __tablename__ = "projects"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    team_id = db.Column(db.Integer, db.ForeignKey("teams.id"), nullable=True)
    title = db.Column(db.String(255))
    complete = db.Column(db.Boolean, default=False)

    user = db.relationship("User", back_populates="projects")
    team = db.relationship("Team", back_populates="projects")
    tasks = db.relationship("Task", back_populates="project")
