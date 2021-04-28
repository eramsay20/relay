from flask import Blueprint, jsonify, session, request
from app.models import Team, user_team, db
from app.forms import TeamForm, DeleteForm, UserTeamForm
from flask_login import login_required

team_routes = Blueprint('teams', __name__)


@team_routes.route('/', methods=["Get"])
def teams():
    teams = Team.query.all()
    teams = [team.to_dict() for team in teams]
    team_dict = {}
    i = 0
    while i < len(teams):
        key = teams[i]['id']
        team_dict[key] = teams[i]
        i += 1
    return team_dict


@team_routes.route('/', methods=["POST"])
@login_required
def make():
    form = TeamForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        print('-------------------------', form.data)
        team = Team(
            title=form.data['title']
        )
        print(team)
        db.session.add(team)
        db.session.commit()
        return team.to_dict()
    return {'errors': form.errors}


@team_routes.route('<int:team_id>/users/<int:user_id>', methods=["POST"])
@login_required
def make_join(team_id, user_id):
    form = TeamForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        print('-------------------------', form.data)
        team = user_team(
            team_id=form.data['team_id'],
            user_id=form.data['user_id'],
        )
        print(team)
        db.session.add(team)
        db.session.commit()
        return team.to_dict()
    return {'errors': form.errors}


@team_routes.route('/<int:id>', methods=["GET"])
def team(id):
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
@login_required
def edit(id):
    form = TeamForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        team = Team.query.get(id)
        team.title = form.data['title']
        db.session.commit()
        return team.to_dict()
    return {'errors': form.errors}


@team_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete(id):
    team = Team.query.get(id)
    db.session.delete(team)
    db.session.commit()
    return {'id': id}
    return {'errors': form.errors}


# @team_routes.route('<int:team_id>/users/<int:user_id>', methods=["DELETE"])
# @login_required
# def delete_join(team_id):
#     join = user_team.query.filter_by(team_id=team_id and user_id=user_id)
#     db.session.delete(team)
#     db.session.commit()
#     return {'team_id': team_id, 'user_id'}
#     return {'errors': form.errors}
