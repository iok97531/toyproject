import React from "react";
import CommentForm from "../../component/CommentForm";
import Comment from "../../component/Comment/Comment";
import Header from "../../component/Header";
import { Button } from "semantic-ui-react";
import { Meteor } from "meteor/meteor";

class PostDetailPresenter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.post) {
      return <p>error</p>;
    }
    const {
      onToggle,
      post: { _id: postId, title, description, image, text },
    } = this.props;

    const isFav = false;

    return (
      <div>
        <Header />
        <div className={"post-page"}>
          <div className={"post-detail"}>
            <p className={"title"}>{title}</p>
            <p className={"description"}>{description}</p>
            <p>{image}</p>
            <p>{text}</p>
            <p>{Meteor.user().username}</p>
          </div>
          <div>
            <CommentForm postId={postId} />
            <Button onClick={onToggle}>{isFav ? "on" : "off"}</Button>
            <div>
              {this.props.comments.map((comment) => (
                <Comment key={comment._id} text={comment.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostDetailPresenter;
