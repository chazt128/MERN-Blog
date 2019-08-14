import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../../redux/actions";
import EditPost from "../EditPost";
import DeletePost from "../DeletePost";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Spinner,
  Alert,
  Input
} from "reactstrap";
import "./styles.css";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const error = useSelector(state => state.error);
  const message = useSelector(state => state.message);
  const loading = useSelector(state => state.loading);
  const [filter, setFilter] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    dispatch(loadPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   filterPosts(filter);
  //       // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  const loadingCard = () => (
    <Card className="card">
      <CardBody>
        <CardTitle>
          <h3>Loading your journal...</h3>
        </CardTitle>
        <CardText>
          Hang tight
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

  const noPostsCard = () => (
    <Card className="card">
      <CardBody>
        <CardTitle>
          <h3>
            No posts to display{" "}
            <span role="img" aria-label="sad">
              😕
            </span>
          </h3>
        </CardTitle>
        <CardText></CardText>
      </CardBody>
    </Card>
  );

  const filterPosts = text => {
    const currentlyFiltered = posts.filter(post => {
      const postDetails = `${post.title} ${post.content}`;
      return postDetails.toLowerCase().includes(text.toLowerCase());
    });
    setFilter(text);
    setFilteredPosts(() => currentlyFiltered);
  };

  const displayFilteredPosts = () =>
    filteredPosts.map(post => {
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
            <br />
            <CardText className="card-text">{content}</CardText>
            <div className="card-edit">
              <EditPost className="post-btn" buttonLabel="Edit" post={post} />
              <DeletePost className="post-btn" id={_id} />
            </div>
          </CardBody>
        </Card>
      );
    });

  const displayAllPosts = () =>
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
            <br />
            <CardText className="card-text">{content}</CardText>
            <div className="card-edit">
              <EditPost className="post-btn" buttonLabel="Edit" post={post} />
              <DeletePost className="post-btn" id={_id} />
            </div>
          </CardBody>
        </Card>
      );
    });

  let noPostsToShow =
    !loading &&
    (posts.length === 0 || (filter !== "" && filteredPosts.length === 0));
  let showAll = posts.length > 0 && filter === "";
  let showFiltered = filteredPosts.length > 0 && filter !== "";
  console.log("FILTERED", filteredPosts);
  return (
    <div className="post-list">
      <Input
        type="text"
        name="filter"
        id="filter"
        bsSize="lg"
        placeholder="Search for post..."
        value={filter}
        onChange={e => filterPosts(e.target.value)}
      ></Input>
      {message && <Alert color="success">{message}</Alert>}
      {error && <Alert color="danger">{error}</Alert>}
      {loading && loadingCard()}
      {noPostsToShow && noPostsCard()}
      {showAll && displayAllPosts()}
      {showFiltered && displayFilteredPosts()}
    </div>
  );
};

export default PostList;
