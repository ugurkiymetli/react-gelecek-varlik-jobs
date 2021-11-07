import React from "react";
import { usePost } from "../../context/PostsContext";
import { useParams } from "react-router-dom";
import { Heading, Button, useToast } from "@chakra-ui/react";
import { Card } from "react-bootstrap";
function PostDetail() {
  const { posts } = usePost();
  const { post_id } = useParams();
  const post = posts[post_id - 1];
  const toast = useToast();

  return (
    <>
      <Card style={{ borderColor: "#f5a623" }} className="text-center m-3 p-3">
        <Heading mb="2" color="#31405C" as="h2" size="lg">
          İş İlanı
        </Heading>
        <Card.Header>
          <Heading color="#31405C" as="h4" size="md">
            {post.title}
          </Heading>
        </Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Subtitle className="text-muted">
            Şehir: {post.city}
          </Card.Subtitle>
          <hr />
          <Card.Text className="my-4">{post.description}</Card.Text>
          <Button
            color="#fff"
            backgroundColor="#f5a623"
            variant="outline"
            onClick={() => {
              const toastID = 1;
              if (!toast.isActive(toastID)) {
                toast({
                  id: 1,
                  title: "Geliştirilme aşamasında!",
                  description: "Üyelik özellikleri hazırlanıyor.",
                  status: "error",
                  variant: "subtle",
                  duration: 1700,
                  position: "bottom",
                  isClosable: true,
                });
              }
            }}
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
