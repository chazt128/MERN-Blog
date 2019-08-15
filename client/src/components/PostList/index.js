import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadPosts,
  setPostChanged,
  setMessage,
  setError
} from "../../redux/actions";
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
  const postChanged = useSelector(state => state.postChanged);
  const [filter, setFilter] = useState("");
  const [postList, setPostList] = useState([]);

  const filterPosts = text => {
    setFilter(text);
    setPostList(
      posts.filter(post => {
        return (
          post.title.toLowerCase().includes(text.toLowerCase()) ||
          post.content.toLowerCase().includes(text.toLowerCase())
        );
      })
    );
  };

  if (postChanged) {
    if (filter !== "") {
      filterPosts(filter);
    } else {
      setPostList(posts);
    }
    if (postChanged) dispatch(setPostChanged(false));
  }

  useEffect(() => {
    dispatch(loadPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            No posts to display
            <span role="img" aria-label="sad">
              😕
            </span>
          </h3>
        </CardTitle>
        <CardText></CardText>
      </CardBody>
    </Card>
  );

  const displayPosts = () =>
    postList.map(post => {
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

  let noPosts = postList.length === 0 && !loading;
  let isLoading = posts.length === 0 && loading;

  return (
    <div className="post-list">
      <Input
        type="text"
        name="filter"
        id="filter"
        bsSize="lg"
        placeholder="Look up an entry..."
        value={filter}
        onChange={e => filterPosts(e.target.value)}
      />
      <div className="alerts">
        {!message && !error && (
          <Alert color="secondary" className="alert alert-spacer">
            A blank alert for spacing
            <span className="alert-close">&#10005;</span>
          </Alert>
        )}
        {message && (
          <Alert color="success" className="alert">
            {message}
            <span
              className="alert-close"
              onClick={() => dispatch(setMessage(null))}
            >
              &#10005;
            </span>
          </Alert>
        )}
        {error && (
          <Alert color="danger" className="alert">
            {error}
            <span
              className="alert-close"
              onClick={() => dispatch(setError(null))}
            >
              &#10005;
            </span>
          </Alert>
        )}
      </div>
      {isLoading && loadingCard()}
      {noPosts && noPostsCard()}
      {displayPosts()}
    </div>
  );
};

export default PostList;
