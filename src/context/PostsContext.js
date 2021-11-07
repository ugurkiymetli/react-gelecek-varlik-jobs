import { createContext, useContext, useState } from "react";
import posts from "../local-json/posts.json";
const PostsContext = createContext();
const initalValues = posts;
const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState(initalValues);
  const values = { posts, setPosts };

  return (
    <PostsContext.Provider value={values}>{children}</PostsContext.Provider>
  );
};

const usePost = () => useContext(PostsContext);

export { PostProvider, usePost };
