from flask import Blueprint, jsonify, session, request, redirect
from flask_login import login_required
from app.models import db, Comment

comment_routes = Blueprint("comments", __name__)


def delete_comment(comment):
    db.session.delete(comment)
    db.session.commit()
    return comment.to_dict()


@comment_routes.route("/", methods=["POST"])
@login_required
def comments():
    body = request.get_json()
    new_comment = Comment(
        user_id=session["_user_id"],
        task_id=body.get("task_id"),
        comment=body.get("comment")
    )
    db.session.add(new_comment)
    db.session.commit()
    return new_comment.to_dict()


@comment_routes.route("/<int:id>", methods=["GET", "DELETE"])
@login_required
def comment(id):
    comment = Comment.query.get(id)
    comment_ = (db.session.query(Comment, User.username).join(User).get(id))
    if request.method == "DELETE":
        deleted_comment = delete_comment(comment)
        db.session.delete(comment)
        db.session.commit()
        # return comment.to_dict()
        return {name: comment for comment, name in comment_}
    return ({name: comment.to_dict() for comment, name in comment_}
            if comment else {"Comment": "Null"})
