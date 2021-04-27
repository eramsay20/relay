from flask import Blueprint, jsonify, session, request, redirect
from flask_login import login_required
from app.models import db, Project, Task, Team, User

project_routes = Blueprint('projects', __name__)


@project_routes.route("/", methods=["GET", "POST"])
@login_required
def projects():
    projects = Project.query.filter(
        Project.user_id == session["_user_id"]).all()
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
    return {"projects": [project.to_dict() for project in projects]}


@project_routes.route("/<int:id>", methods=["GET", "DELETE"])
@login_required
def project(id):
    project = Project.query.get(id)
    if request.method == "DELETE":
        db.session.delete(project)
        db.session.commit()
        return {"Project": "NUll"}
    print(project)
    return project.to_dict() if project else {"Project": "Null"}
