import { Card } from "antd";
// import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import { addUser } from "../../store/crud/crudAction";
import { useRef } from "react";
import { Button } from "react-bootstrap";
// import axios from "axios";

const ProductCreat = () => {
  const titleRef = useRef();
  const ratingRef = useRef();
  const categoryRef = useRef();
  const brandRef = useRef();
  // const [title, setTito] = useState('')

  const dispatch = useDispatch();

  // const handleChange = (e) => {
  //   dispatch(changeUser(e.target));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    let product = {
      title: titleRef.current.value,
      rating: ratingRef.current.value,
      category: categoryRef.current.value,
      brand: brandRef.current.value,
    };

    dispatch(addUser(product));
  };

  return (
    <Card>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" ref={titleRef} name="tittle" placeholder="Enter title" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Brand</Form.Label>
          <Form.Control type="text" ref={brandRef} name="brand" placeholder="Enter brand" />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" ref={categoryRef} name="category" placeholder="Enter category" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Enter Rating</Form.Label>
          <Form.Control type="number" ref={ratingRef} name="rating" placeholder="Enter rating" />
        </Form.Group>
        <Button type="submit">
          Saqlash
          {/* <Link className="btn btn-primary"></Link> */}
        </Button>
      </Form>
    </Card>
  );
};

export default ProductCreat;
