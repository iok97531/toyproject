import React from "react";
import CommentForm from "../../component/CommentForm";
import Comment from "../../component/Comment/Comment";

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
        <h2>PostDetail</h2>

        <div>
          <p>{`Post ID : ${postId}`}</p>
          <p>{title}</p>
          <p>{description}</p>
          <p>{image}</p>
          <p>{text}</p>
        </div>
        <CommentForm postId={postId} />
        <button onClick={onToggle}>{isFav ? "on" : "off"}</button>
        <div>
          {this.props.comments.map((comment) => (
            <Comment key={comment._id} text={comment.text} />
          ))}
        </div>
      </div>
    );
  }
}

export default PostDetailPresenter;
