import React from "react";
import { Table } from "antd";
import { Heading, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { usePost } from "../../context/PostsContext";
function AllPosts() {
  const { posts } = usePost();
  const columns = [
    {
      title: "İlan Numarası",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "İlan Tarihi",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Pozisyon Adı",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Şehir",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "İlanı yayınlayan",
      dataIndex: "poster",
      key: "poster",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <Box>
          <Link to={`/gelecek-varlik-hr/${record.id}`}>
            <Button colorScheme="gray" variant="outline">
              İncele
            </Button>
          </Link>
        </Box>
      ),
    },
  ];
  return (
    <div>
      <Heading>Açık Pozisyonlar</Heading>
      <Table dataSource={posts} columns={columns} rowKey="id"></Table>
    </div>
  );
}

export default AllPosts;
