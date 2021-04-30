from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, BooleanField, IntegerField
from wtforms.validators import DataRequired
from app.models import Team


class ProjectForm(FlaskForm):
    user_id = IntegerField('.', validators=[DataRequired()])
    title = StringField('title', validators=[DataRequired()])
    team = StringField('team')
    complete = BooleanField('complete', false_values=None)
