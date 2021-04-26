from flask import Blueprint, jsonify, session, request
from app.models import Task, db
from app.forms import TaskForm, DeleteForm
from flask_login import current_user, login_user, logout_user, login_required

task_routes = Blueprint('tasks', __name__)


@task_routes.route('/')
def tasks():
    form = TeamForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit_on_submit():
        team = Team(
            title=form.data['title']
        )
        db.session.add(team)
        db.session.commit()
        return team.to_dict()
    return {'errors': form.errors}


@team_routes.route('/<int:id>', methods=["GET"])
def task(id):
    # in our routes documentation we suggest pulling out task
    # and comment information here. However I am not, because
    # those are attached to project not team, and we should use the project
    # pull for that.

    team = Team.query.get(id)

    # Below in case you guys disagree. Will need to import above
    # project = Project.query.filter_by(team_id=id).all()
    # task = Task.query.filter_by(project_id=project.id).all()
    # comment = Comment.query.filter_by(task_id=task.id).all()

    return team.to_dict()


@team_routes.route('/<int:id>', methods=["PUT"])
def edit(id):
    form = TeamForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit_on_submit():
        team = Team.query.get(id)
        team.title = form.data['title']
        db.session.commit()
        return team.to_dict()
    return {'errors': form.errors}


@team_routes.route('/<int:id>', , methods=["DELETE"])
def delete(id):
    # I don't know how to handle csrf outside the forms, so for now
    # I'm kludging with a delete form
    form = DeleteForm
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit_on_submit():
        task = Task.query.get(id)
        db.session.delete(team)
        db.session.commit(task)
        return {'result': 'deleted!'}
    return {'errors': form.errors}