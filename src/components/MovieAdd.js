import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function MovieAdd({ movies, setmovies }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newmovie, setnewmovie] = useState({
    name: "",
    posterurl: "",
    description: "",
    rating: "",
  });

  const handleAdd = () => {
    setmovies([...movies, newmovie]);
  };
  return (
    <>
      <Button
        variant="dark"
        style={{ backgroundColor: "red", color: "white", border: "none" }}
        onClick={handleShow}
      >
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter movie name"
                onChange={(e) =>
                  setnewmovie({ ...newmovie, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter movie image"
                onChange={(e) =>
                  setnewmovie({ ...newmovie, posterurl: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter movie description"
                onChange={(e) =>
                  setnewmovie({ ...newmovie, description: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie rate</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter movie rate"
                onChange={(e) =>
                  setnewmovie({ ...newmovie, rating: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleAdd();
              handleClose();
            }}
            style={{ backgroundColor: "red", color: "white", border: "none" }}
          >
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MovieAdd;
