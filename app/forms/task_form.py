from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SelectField, DateField
from wtforms import IntegerField
from wtforms.validators import DataRequired
from app.models import User, Team, Project


def choice_getter(form):
    project = Project.query.get(form.project_id)
    team_members = User.query.join(Team).filter(
        Team.team_id == project.team_id
    )
    team_choices = [(user.id, user.username) for user in team_members]
    return team_choices


class TaskForm(FlaskForm):
    # Integerfields marked '.' should be rendered as hidden fields
    project_id = IntegerField('.', validators=[DataRequired()])
    title = StringField('title', validators=[DataRequired()])
    team = SelectField('team', coerce=int, choices=choice_getter())
    due_date = DateField('due_date')
    description = TextAreaField('description')
    complete = BooleanField('complete', false_values=None)
