from flask import Blueprint, jsonify, session, request, redirect
from flask_login import login_required
# from app.forms import ProjectForm
from app.models import Project, Task, Team, User

project_routes = Blueprint('projects', __name__)


@project_routes.route("/", methods=["GET", "POST"])
@login_required
def projects():
    projects = Project.query.filter(
        Project.user_id == session["_user_id"]).all()
    if request.method == "POST":
        req = request.form
        new_project = Project(
            user_id=session["_user_id"],
            team_id=req.get("team"),
            title=req.get("title")
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
        return redirect("/")
    print(project)
    return project.to_dict() if project else {"Project": "Null"}
