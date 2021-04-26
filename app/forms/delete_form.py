from flask_wtf import Form
from wtforms import SubmitField


class DeleteForm(Form):
    delete = SubmitField('Delete')