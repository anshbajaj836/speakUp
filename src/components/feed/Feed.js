import React from "react";
import "./Feed.css";
import Post from "./Post/Post";
import TweetBox from "./SpeakupBox/SpeakUpBox";
import db from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";

function Feed({ input }) {
  const [posts] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Latest Talks</h2>
      </div>

      <TweetBox input={input} />

      {posts?.docs.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          timestamp={post.data().timestamp}
          displayName={post.data().displayName}
          username={post.data().username}
          verified={post.data().verified}
          text={post.data().text}
          avatar={post.data().avatar}
          image={post.data().image}
          uid={post.data().uid}
          likes={post.data().likes}
        />
      ))}
    </div>
  );
}

export default Feed;
