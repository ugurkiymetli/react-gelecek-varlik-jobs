import React from "react";
import { usePost } from "../../context/PostsContext";
import { useParams } from "react-router-dom";
import { Heading, Box, Text } from "@chakra-ui/react";

function PostDetail() {
  const { posts } = usePost();
  const { post_id } = useParams();
  const post = posts[post_id - 1];
  console.log("post id:", post_id);
  return (
    <Box width="80%" mx="auto" mt="4">
      <Heading mb="2">İlan Detayı</Heading>
      <Text fontSize="larger" mb="1">
        {post.title}
      </Text>
      <hr />
      <Text fontSize="md">
        {post.poster}-{post.date}
      </Text>
      <Text>Şehir: {post.city} </Text>
      <br />
      <Text>Genel Nitelikleri</Text>
      <Text>{post.description}</Text>
    </Box>
  );
}

export default PostDetail;
