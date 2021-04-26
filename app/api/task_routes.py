from flask import Blueprint, jsonify, session, request
from app.models import Task, db
from app.forms import TaskForm, DeleteForm
from flask_login import login_required

task_routes = Blueprint('tasks', __name__)


@task_routes.route('/', methods=["GET"])
def teams():
    tasks = Task.query.all()
    task_list = [task.to_dict() for task in tasks]
    return task_list


@task_routes.route('/', methods=["POST"])
@login_required
def make():
    form = TaskForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit_on_submit():
        task = Task(
            title=form.data['title'],
            project_id=form.data['project_id'],
            user_id=form.data['user_id'],
            due_date=form.data['due_date'],
            description=form.data['description'],
            complete=form.data['complete']
        )
        db.session.add(task)
        db.session.commit()
        return task.to_dict()
    return {'errors': form.errors}


@task_routes.route('/<int:id>', methods=["GET"])
def task(id):
    task = Task.query.get(id)

    return task.to_dict()


@task_routes.route('/<int:id>', methods=["PUT"])
@login_required
def edit(id):
    form = TaskForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        task = Task.query.get(id)
        task.project_id = form.data['project_id']
        task.user_id = form.data['user_id']
        task.due_date = form.data['due_date']
        task.description = form.data['description']
        task.complete = form.data['complete']
        db.session.commit()
        return task.to_dict()
    return {'errors': form.errors}


@task_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete(id):
    # I don't know how to handle csrf outside the forms, so for now
    # I'm kludging with a delete form
    form = DeleteForm
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit_on_submit():
        task = Task.query.get(id)
        db.session.delete(task)
        db.session.commit()
        return {'id': id}
    return {'errors': form.errors}
