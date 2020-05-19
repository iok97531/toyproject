import React from "react";
import PostCard from "../../components/PostCard";

const FavoritePresenter = ({ posts }) => {
  if (!posts) {
    return null;
  }
  if (!posts.length) {
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
        {posts.map((id) => (
          <PostCard key={id} postId={id} />
        ))}
      </div>
    </div>
  );
};

export default FavoritePresenter;
