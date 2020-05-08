import React from "react";

class PostDetailPresenter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.post) {
      return <p>error</p>;
    }
    const {
      _id: postId,
      title,
      description,
      image,
      text,
      onSubmit,
      onToggle,
    } = this.props.post;

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
        <form onSubmit={onSubmit}>
          <input type="text" name="text" />
          <input type="submit" name="submit" />
        </form>
        <button onClick={onToggle}>{isFav ? "on" : "off"}</button>
      </div>
    );
  }
}

export default PostDetailPresenter;
