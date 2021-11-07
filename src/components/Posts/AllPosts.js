import React from "react";
import { Table } from "antd";
import { Heading, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { usePost } from "../../context/PostsContext";
import { style } from "./styles.modules.css";
function AllPosts() {
  const { posts } = usePost();
  const columns = [
    {
      title: "İlan No:",
      dataIndex: "id",
      key: "id",
      responsive: ["sm"],
    },
    {
      title: "İlan Tarihi",
      dataIndex: "date",
      key: "date",
      responsive: ["md"],
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
      responsive: ["md"],
    },
    {
      title: "İncele",
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
    <Box mt={4} p="1" overflow="scroll">
      <Heading color="#31405C" textAlign="center">
        Açık Pozisyonlar
      </Heading>
      <Box mx="2" mt="2">
        <Table
          rowClassName={(record, index) =>
            index % 2 === 0 ? "table-row-light" : "table-row-dark"
          }
          bordered
          dataSource={posts}
          columns={columns}
          rowKey="id"
        ></Table>
      </Box>
    </Box>
  );
}

export default AllPosts;
