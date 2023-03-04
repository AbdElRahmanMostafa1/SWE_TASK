import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { getPosts } from "../store/actions/post";
import { Card, Col, Row } from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { allPosts } = useSelector((state: RootState) => state.post);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getPosts(page));
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Row>
      {allPosts.map((post: any) => {
        return (
          <Card className="m-2" style={{ width: "18rem" }} key={post._id}>
            <Card.Img variant="top" src={post.imageUrl} />
            <Card.Body>
              <Card.Text>{post.caption}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </Row>
  );
};

export default Home;
