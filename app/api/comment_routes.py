from flask import Blueprint, jsonify, session, request, redirect
from flask_login import login_required
from app.models import db, Comment

comment_routes = Blueprint("comments", __name__)


@comment_routes.route("/", methods=["GET", "POST"])
@login_required
def comments():
    # need to make the task_id dynamic
    comments = Comment.query.filter(
        Comment.task_id == "1").all()
    if request.method == "POST":
        body = request.get_json()
        print(session["_user_id"])
        new_comment = Comment(
            user_id=session["_user_id"],
            task_id=body.get("id", 1),
            comment=body.get("comment")
        )
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict()
    return {"comments": [comment.to_dict() for comment in comments]}


@comment_routes.route("/<int:id>", methods=["GET", "DELETE"])
@login_required
def comment(id):
    comment = Comment.query.get(id)
    if request.method == "DELETE":
        db.session.delete(comment)
        db.session.commit()
        return comment.to_dict()
    return comment.to_dict() if comment else {"Comment": "Null"}
