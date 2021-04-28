from flask import Blueprint, jsonify, session, request
from app.models import Team, User, user_team, db
from app.forms import TeamForm, DeleteForm, UserTeamForm
from flask_login import login_required

team_routes = Blueprint('teams', __name__)


@team_routes.route('/', methods=["Get"])
def teams():
    teams = Team.query.all()
    mutated_teams = []
    print('###############', teams)
    for team in teams:
        users = [user.to_dict() for user in team.users]
        team_dict = team.to_dict()
        users_string = 'users'
        team_dict[users_string] = users
        mutated_teams.append(team_dict)

    teams = mutated_teams
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
        body = request.get_json()
        team = Team(
            title=form.data['title']
        )
        db.session.add(team)
        db.session.commit()
        user_ids = body['users']
        for user_id in user_ids:
            user = User.query.get(user_id)
            user.teams.append(team)
        users = [user.to_dict() for user in team.users]
        team_dict = team.to_dict()
        users_string = 'users'
        team_dict[users_string] = users
        return team.to_dict()
    return {'errors': form.errors}


# @team_routes.route('<int:team_id>/users/<int:user_id>', methods=["POST"])
# @login_required
# def make_join(team_id, user_id):
#     form = TeamForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         print('-------------------------', form.data)
#         team = user_team(
#             team_id=form.data['team_id'],
#             user_id=form.data['user_id'],
#         )
#         print(team)
#         db.session.add(team)
#         db.session.commit()
#         return team.to_dict()
#     return {'errors': form.errors}


@team_routes.route('/<int:id>', methods=["GET"])
def team(id):
    team = Team.query.get(id)
    users = [user.to_dict() for user in team.users]
    team_dict = team.to_dict()
    users_string = 'users'
    team_dict[users_string] = users
    return team_dict


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
