from flask_wtf import FlaskForm
from wtforms import StringField, SelectMultipleField
from wtforms.validators import DataRequired
from app.models import User

# user_list = User.query.first()
# print(user_list)
# user_choices = [(user.id, user.username) for user in user_list]

# hardcoded placeholder until we have seed data
user_choices = [(1, 'username_test')]


class TeamForm(FlaskForm):
    title = StringField("Team Title", validators=[DataRequired()])
    user_id = SelectMultipleField("user_id", coerce=int, choices=user_choices)
