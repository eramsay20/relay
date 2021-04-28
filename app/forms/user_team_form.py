from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired
from app.models import user_team


class UserTeamForm(FlaskForm):
    team_id = IntegerField("team_id", validators=[DataRequired()])
    user_id = IntegerField("user_id", validators=[DataRequired()])
