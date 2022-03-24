import { Form, Row, Col, CloseButton } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { getUserId } from "../../Config/firebase";
import axios from "axios";
import "./demandsComponent.css";
import { Button } from "react-bootstrap";
import CommentComponent from "../CommentComponent";

function DemandsComponent(props) {
  const [newComment, setNewComment] = useState({
    comment: "",
    userUID: getUserId(),
    email: "",
    demandId: props.demandId,
    user: props.user,
    title: "",
    price: "",
    link: "",

  });
  const [demandComments, setDemandComments] = useState([]);
  const [useControl, setUseControl] = useState("1");
  const [useDelete, setUseDelete] = useState(1);

  const deleteProducts = (id) => {
    if (window.confirm("Do you really want to delete?")) {
      console.log(id);
      axios.delete(`http://localhost:5000/api/Comment/${id}`);
      setUseDelete(useDelete + 1);
    }
  };

  const PostComment = () => {
    axios.post(`http://localhost:5000/api/Comment/newComment`, newComment);
    alert("Product posted");
    setUseControl(useControl + 1);
  };

  const changeHandler = (e) => {
    setNewComment((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };

  const allFit = () => {
    if (newComment.comment == "") {
      console.log("está funcionando");
      return true;
    } else {
      console.log("ya no");
      return false;
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/Comment/${props.demandId}`)
      .then((res) => {
        const comments = res.data;
        setDemandComments(comments);
      });
  }, [useDelete, useControl]);

  return (
    <div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {props.type}
            {props.weight}
            {props.description}
            {props.price}
            {props.origin}
            {props.dateOfUpload}///////////////////////////
            {props.demandId}///////////////////////
            {props.user}
          </Accordion.Header>
          <Accordion.Body>
            <Form.Group className="mb-3">
              <Form.Control
                value={newComment.title}
                name="title"
                onChange={(e) => changeHandler(e)}
                placeholder="Title"
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    value={newComment.price}
                    name="price"
                    onChange={(e) => changeHandler(e)}
                    placeholder="Price per kg"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    value={newComment.link}
                    name="link"
                    onChange={(e) => changeHandler(e)}
                    placeholder="Introduce the link of your product offer like this /61d722dca771390d12108c4b"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Control
                value={newComment.comment}
                name="comment"
                onChange={(e) => changeHandler(e)}
                placeholder="Comment"
              />
            </Form.Group>

            <Button
              onClick={(e) => PostComment(e)}
              variant="primary"
              type="submit"
              className="primaryButton"
              disabled={allFit()}
            >
              Submit
            </Button>
            {demandComments.map((comment) => (
              <Col sm key={comment._id}>
                <Button
                  as={CloseButton}
                  value={comment._id}
                  onClick={(e) => deleteProducts(e.target.value)}
                  className="DeleteButton deleteButtonPosition"
                />
                <CommentComponent
                  userUID={comment.userUID}
                  email={comment.email}
                  comment={comment.comment}
                  demandId={comment.demandId}
                  title={comment.title}
                  price={comment.price}
                  link={comment.link}
                  user={comment.user}
                />
              </Col>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default DemandsComponent;
