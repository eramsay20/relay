from flask_wtf import FlaskForm
from wtforms import StringField, SelectMultipleField
from wtforms.validators import DataRequired
from app.models import User

user_list = User.query.all()
user_choices = [(user.id, user.username) for user in user_list]


class TeamForm(FlaskForm):
    title = StringField("Team Title", validators=[DataRequired()])
    user_id = SelectMultipleField("user_id", coerce=int choices=user_choices)
