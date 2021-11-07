import React from "react";
import { usePost } from "../../context/PostsContext";
import { useParams } from "react-router-dom";
import { Heading, Box, Text, Button } from "@chakra-ui/react";
import { Card } from "react-bootstrap";
function PostDetail() {
  const { posts } = usePost();
  const { post_id } = useParams();
  const post = posts[post_id - 1];
  /* console.log("post id:", post_id); */
  /* const date = new Date(post.date);
  console.log(date); */
  return (
    <>
      <Card style={{ borderColor: "#f5a623" }} className="text-center m-3 p-1">
        <Card.Header>
          <Heading as="h4" size="md">
            İş İlanı
          </Heading>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <Heading as="h5" size="sm">
              {post.title}
            </Heading>
          </Card.Title>
          <Card.Subtitle className="text-muted">
            Şehir: {post.city}
          </Card.Subtitle>
          <hr />
          <Card.Text className="mt-2">{post.description}</Card.Text>
          <Button
            mt="2"
            color="#fff"
            backgroundColor="#f5a623"
            variant="outline"
          >
            Başvur
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted mt-2">
          {post.poster} - {post.date}
        </Card.Footer>
      </Card>
    </>
  );
}

export default PostDetail;
