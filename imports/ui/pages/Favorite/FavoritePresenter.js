import React from "react";
import PostCard from "../../components/PostCard";

const FavoritePresenter = (props) => {
  if (!props.posts) {
    return null;
  }
  if (!props.posts.length) {
    return (
      <div>
        <h1>No Favorite Posts</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Favorite</h1>
      <div className={"post-card-container"}>
        {props.posts.map((post) => (
          <PostCard
            key={post._id}
            postId={post._id}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritePresenter;
