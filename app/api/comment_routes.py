from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import db, Comment, User

comment_routes = Blueprint("comments", __name__)


def delete_comment(comment):
    db.session.delete(comment)
    db.session.commit()
    user = User.query.get(session["_user_id"]).username
    return {comment.id: {**comment.to_dict(), **{"user": user}}}


@comment_routes.route("/", methods=["POST"])
@login_required
def comments():
    body = request.get_json()
    new_comment = Comment(
        user_id=session["_user_id"],
        task_id=body.get("task_id"),
        comment=body.get("comment")
    )
    user = User.query.get(session["_user_id"]).username
    db.session.add(new_comment)
    db.session.commit()
    return {new_comment.id: {**new_comment.to_dict(), **{"user": user}}}


@comment_routes.route("/<int:id>", methods=["GET", "DELETE", "PUT"])
@login_required
def comment(id):
    comment, name = (db.session.query(Comment, User.username).join(User).
                     filter(Comment.id == id).first())
    if request.method == "DELETE":
        db.session.delete(comment)
        db.session.commit()
        return {comment.id: {**comment.to_dict(), **{"user": name}}}
    elif request.method == "PUT":
        body = request.get_json()
        comment.comment = body.get("comment")
        db.session.commit()
        return {comment.id: {**comment.to_dict(), **{"user": name}}}
    else:
        return ({comment.id: {**comment.to_dict(), **{"user": name}}}
                if comment else {"Comment": "Null"})
