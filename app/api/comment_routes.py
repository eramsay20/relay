from flask import Blueprint, jsonify, session, request, redirect
from flask_login import login_required
from app.models import db, Comment, User

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


@comment_routes.route("/<int:id>", methods=["GET", "DELETE", "PUT"])
@login_required
def comment(id):
    comment, name = (db.session.query(Comment, User.username).join(User).
                     filter(Comment.id == id).first())
    if request.method == "DELETE":
        db.session.delete(comment)
        db.session.commit()
        return {name: comment.to_dict()}
    elif request.method == "PUT":
        body = request.get_json()
        comment.comment = body.get("comment")
        db.session.commit()
        return redirect("/api/comments/")
    else:
        return ({name: comment.to_dict()} if comment else {"Comment": "Null"})
