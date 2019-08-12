import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../../redux/actions";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Spinner,
  Alert
} from "reactstrap";
import "./styles.css";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(loadPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts.length]);

  const loadingCard = () => (
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
        <Spinner type="grow" color="dark" />
        <Spinner type="grow" color="dark" />
        <Spinner type="grow" color="dark" />
      </CardBody>
    </Card>
  );

  const displayPosts = () =>
    posts.map(post => {
      const { _id, title } = post;
      let { date, content } = post;
      date = new Date(date).toDateString();

      return (
        <Card className="card" key={_id}>
          <CardBody>
            <CardTitle>
              <h3>{title}</h3>
            </CardTitle>
            <CardSubtitle>
              <small>{date}</small>
            </CardSubtitle>
            <CardText className="card-text">{content}</CardText>
          </CardBody>
        </Card>
      );
    });

  return (
    <div className="post-list">
      {error && <Alert color="danger">{error}</Alert>}
      {posts.length === 0 && !error && loadingCard()}
      {posts.length > 0 && displayPosts()}
    </div>
  );
};

export default PostList;
