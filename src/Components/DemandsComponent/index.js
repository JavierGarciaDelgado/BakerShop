import { Form, Row, Col, CloseButton } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { getUserEmail, getUserId } from "../../Config/firebase";
import axios from "axios";
import "./demandsComponent.css";
import { Button } from "react-bootstrap";
import CommentComponent from "../CommentComponent";

function DemandsComponent(props) {
  const [newComment, setNewComment] = useState({
    comment: "",
    userUID: getUserId(),
    email: getUserEmail(),
    demandId: props.demandId,
    user: props.user,
    title: "",
    price: "",
    link: "",
  });
  const [demandComments, setDemandComments] = useState([]);
  const [useControl, setUseControl] = useState("1");
  const [useDelete, setUseDelete] = useState(1);

  const deleteComments = (id) => {
    if (window.confirm("Do you really want to delete?")) {
      axios.delete(`http://localhost:5000/api/Comment/${id}`);
      setUseDelete(useDelete + 1);
    }
  };

  const PostComment = () => {
    axios.post(`http://localhost:5000/api/Comment/newComment`, newComment);
    alert("comment posted");
    setUseControl(useControl + 1);
  };

  const changeHandler = (e) => {
    setNewComment((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };

  const allFit = () => {
    if (newComment.comment == "") {
      return true;
    } else {
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
            {props.title}
            <span className="dateDemand">{props.dateOfUpload}</span>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              <b>Description of the product:</b> {props.description}
            </p>
            <p>
              <b>Type of product: </b>
              {props.type}
            </p>
            <p>
              <b>Origin: </b> {props.origin}
            </p>
            <p className="mb-5">
              <b>Offer:</b>
              {props.price}€/per Kg
            </p>

            {props.user !== getUserId() ? (
              <span>
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
                        placeholder="Introduce the link of your product offer like this 61d722dca771390d12108c4b"
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
              </span>
            ) : (
              ""
            )}
            <div>
              {demandComments.map((comment) => {
                let button =
                  comment.userUID == getUserId() ||
                  comment.user == getUserId() ? (
                    <Button
                      value={comment._id}
                      onClick={(e) => deleteComments(e.target.value)}
                      className="deleteButtonPosition"
                    >
                      <i class="bi bi-trash"></i>
                    </Button>
                  ) : (
                    ""
                  );
                return (
                  <Col sm key={comment._id}>
                    {button}
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
                );
              })}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default DemandsComponent;
