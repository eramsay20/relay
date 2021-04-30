from flask_wtf import FlaskForm
from wtforms import StringField, SelectMultipleField
from wtforms.validators import DataRequired
from app.models import User


class TeamForm(FlaskForm):
    title = StringField("Team Title", validators=[DataRequired()])
    users = StringField("users")
