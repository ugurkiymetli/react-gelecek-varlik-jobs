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
    // {
    //   title: "İncele",
    //   dataIndex: "action",
    //   render: (record) => ({
    //     /* <Box>
    //       <Link to={`/${record.id}`}>
    //         <Button>İncele</Button>
    //       </Link>
    //     </Box> */
    //   }),
    // },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <Box>
          <Link to={`/${record.id}`}>
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
