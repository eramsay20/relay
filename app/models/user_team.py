from .db import db


user_team = db.Table(
    "users_teams",
    db.Column(
        "team_id",
        db.Integer,
        db.ForeignKey("teams.id"),
        primary_key=True
    ),
    db.Column(
        "user_id",
        db.Integer,
        db.ForeignKey("users.id"),
        primary_key=True
    )
)
