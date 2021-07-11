import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";

import TitleBar from "views/layout/TitleBar";
import SideBar from "views/layout/SideBar";
import StyledCard from "components/StyledCard";
import { getPostById } from "service/posts";
import { responeStatusHandler } from "utils/commonUtils";

const PostDetail = () => {
  const [breadcrump] = useState([
    { title: "Home", path: "/home" },
    { title: "Blog", path: "/blog" },
    { title: "" },
  ]);
  const [loading, setLoading] = useState(true);
  const [postData, setPostData] = useState({});
  const [dummyComment, setDummyComment] = useState([]);
  const { postId } = useParams();
  const [activeId, setActiveId] = useState(0);

  useEffect(() => {
    if (postId) {
      getPostById(postId)
        .then(responeStatusHandler)
        .then((jsonData) => {
          jsonData.img = `/assets/img/dummy${
            Number.parseInt(Math.random() * 6) + 1
          }.jpg`;
          let [, month, day, year] = new Date().toDateString().split(" ");
          jsonData.date = `${day} ${month}, ${year}`;

          breadcrump[2].title = jsonData.title;
          setPostData(jsonData);
          setDummyComment([]);
          setLoading(false);
        })
        .catch(console.error);
    }
  }, [postId, breadcrump]);

  return (
    <div className="content">
      <TitleBar title="Blog Detail" breadcrump={breadcrump} />
      <Container className="mt-3">
        <Row>
          <Col lg={9} className="mt-4">
            {loading || !postData ? (
              <Spinner animation="border" className="mt-4" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              <StyledCard
                img={postData.img}
                title={postData.title}
                date={postData.date}
                text={postData.body}
                notFullHeight
              />
            )}
            <Recommendations />
            <Comments
              postId={postData.id}
              dummyComment={dummyComment}
              activeId={activeId}
              setActiveId={setActiveId}
            />
            <AddComment
              parentId={activeId}
              postId={postData.id}
              callback={(newComment) => {
                setDummyComment([...dummyComment, newComment]);
              }}
            />
          </Col>
          <Col lg={3} className="p-0">
            <SideBar className="sidebar mt-4" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PostDetail;
