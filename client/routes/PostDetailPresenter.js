import React from "react";

class PostDetailPresenter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.post) {
      return <p>error</p>;
    }
    const { _id: postId, title, description, image, text } = this.props.post;

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
      </div>
    );
  }
}

export default PostDetailPresenter;
