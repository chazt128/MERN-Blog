import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../../redux/actions";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import "./styles.css";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(loadPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts.length]);

  return (
    <div className="post-list">
      {posts.length === 0 && !error && (
        <Card className="card">
          <CardBody>
            <CardTitle>
              <h3>Loading Posts...</h3>
            </CardTitle>
            <CardText>
              We're fetching them
              <span role="img" aria-label="smile">
                😃
              </span>
            </CardText>
          </CardBody>
        </Card>
      )}
      {posts.length > 0 &&
        posts.map(post => (
          <Card className="card" key={post._id}>
            <CardBody>
              <CardTitle>
                <h3>{post.title}</h3>
              </CardTitle>
              <CardText>{post.content}</CardText>
            </CardBody>
          </Card>
        ))}
      {error && (
        <Card className="card">
          <CardBody>
            <CardTitle>
              <h3>Error</h3>
            </CardTitle>
            <CardText>{error}</CardText>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default PostList;
