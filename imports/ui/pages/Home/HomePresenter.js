import React from "react";
import PostCard from "../../components/PostCard";
import Users from "../../components/Users";
import Chat from "../../components/Chat";

const HomePresenter = ({ posts }) => {
  if (!posts.length) {
    return <p>No Post</p>;
  }

  return (
    <div>
      <div className="social-container">
        <Users />
        <Chat />
      </div>
      <div className={"post-card-container"}>
        {posts.map((post) => (
          <PostCard key={post._id} postId={post._id} />
        ))}
      </div>
    </div>
  );
};

export default HomePresenter;
