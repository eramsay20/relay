from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField
from wtforms.validators import DataRequired


class CommentForm(FlaskForm):
    user_id = IntegerField('.', validators=[DataRequired()])
    task_id = IntegerField('.', validators=[DataRequired()])
    comment = TextAreaField("comment", validators=[DataRequired()])
