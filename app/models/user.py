from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .user_team import user_team


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    projects = db.relationship("Project", back_populates="user")
    tasks = db.relationship("Task", back_populates="user")
    comments = db.relationship("Comment", back_populates="user")
    teams = db.relationship("Team", secondary=user_team,
                            back_populates="users")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
          "id": self.id,
          "username": self.username,
          "email": self.email
        }

    def to_dict_safe(self):
        return {
          "id": self.id,
          "username": self.username,
        }
