/*DEL 2!!!!!!!!!!

Under Headern ska jag lägga 2 delar bredvid varandra i en grid eller
flexbox.
- En lidta med inlägg (Posts) i mitten
-Component 2 till höger (Se <buttoncomponent)

*/

import React from "react";
import Post from "./Post";

const PostList = () => {
  const posts = [
    {
      id: 1,
      title: "My First Post",
      body: "This is the body to my first post.",
    },
    {
      id: 2,
      title: "My Second Post",
      body: "This is the body to my second post.",
    },
    {
      id: 3,
      title: "My Third Post",
      body: "This is the body to my third post.",
    },
  ];

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};
export default PostList;
