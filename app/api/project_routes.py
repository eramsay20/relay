from flask import Blueprint, jsonify, session, request, redirect
from flask_login import login_required
from app.models import db, Project, Task, Team, User
from app.api.task_routes import delete_task

project_routes = Blueprint('projects', __name__)


@project_routes.route("/", methods=["GET", "POST"])
@login_required
def projects():
    teams = Team.query.all()
    projects = Project.query.filter(
        Project.user_id == session["_user_id"]).all()
    filter_teams = ([team.to_dict()["id"] for team in teams if
                    int(session["_user_id"]) in [int(user.to_dict()["id"])
                    for user in team.users]])
    my_project = [project.to_dict() for project in projects]
    project_teams = ([Project.query.filter(Project.team_id == id).first()
                     for id in filter_teams if id not in
                     [project["team_id"] for project in my_project]])
    if request.method == "POST":
        body = request.get_json()
        new_project = Project(
            user_id=session["_user_id"],
            team_id=body.get("team", None),
            title=body["title"]
        )
        db.session.add(new_project)
        db.session.commit()
        return new_project.to_dict()
    all_projects = (my_project +
                    [project.to_dict() for project in project_teams])
    print(all_projects)
    return {"projects": all_projects}


@project_routes.route('/<int:id>/tasks', methods=['GET'])
def project_tasks(id):
    tasks = Task.query.filter_by(project_id=id)
    tasks = [task.to_dict() for task in tasks]
    task_dict = {}
    i = 0
    while i < len(tasks):
        key = tasks[i]['id']
        task_dict[key] = tasks[i]
        i += 1
    return task_dict


@project_routes.route("/<int:id>", methods=["GET", "DELETE"])
@login_required
def project(id):
    project = Project.query.get(id)
    if request.method == "DELETE":
        tasks = Task.query.filter_by(project_id=id).all()
        length = len(tasks)
        i = 0
        while i < length:
            delete_task(tasks[i], tasks[i].id)
            i += 1
        db.session.delete(project)
        db.session.commit()
        return {'id': id}
    print(project)
    return project.to_dict() if project else {"Project": "Null"}
