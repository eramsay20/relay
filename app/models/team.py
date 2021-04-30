from .db import db
from .user_team import user_team


class Team(db.Model):
    __tablename__ = 'teams'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)

    projects = db.relationship("Project", back_populates="team")
    users = db.relationship("User", secondary=user_team,
                            back_populates="teams")

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
        }
