from flask.cli import AppGroup
from .users import seed_users, undo_users
from .teams import seed_teams, undo_teams
from .projects import seed_projects, undo_projects
from .tasks import seed_tasks, undo_tasks
from .comments import seed_comments, undo_comments
# from .user_teams import seed_user_teams, undo_user_teams

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_teams()
    seed_projects()
    seed_tasks()
    seed_comments()
    # seed_user_teams()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_teams()
    undo_projects()
    undo_tasks()
    undo_comments()
    # undo_user_teams()
    # Add other undo functions here
