from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired
from app.models import User, Team, Project


class TaskForm(FlaskForm):
    project_id = IntegerField('.', validators=[DataRequired()])
    title = StringField('title', validators=[DataRequired()])
    user_id = IntegerField('user_id')
    due_date = StringField('due_date')
    description = StringField('description')
    complete = StringField('complete')
