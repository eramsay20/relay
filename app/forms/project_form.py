from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, BooleanField, IntegerField
from wtforms.validators import DataRequired
from app.models import Team

team_list = Team.query.all()
team_choices = [(team.id, team.title) for team in team_list]


class ProjectForm(FlaskForm):
    # Integerfields marked '.' should be rendered as hidden fields
    user_id = IntegerField('.', validators=[DataRequired()])
    title = StringField('title', validators=[DataRequired()])
    team = SelectField('team', coerce=int, choices=team_choices)
    complete = BooleanField('complete', false_values=None)
