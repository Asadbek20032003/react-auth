import { Button, Modal } from "react-bootstrap";

import { modalClose } from "../../store/modal/modalAction";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers } from "../../store/crud/crudAction";
import { useNavigate } from "react-router-dom";

const Modals = () => {
  const { user, shows } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCLose = () => {
    dispatch(modalClose());
  };

  const handleDelete = (id) => {
    dispatch(deleteUsers(id));
    shows.show = false;
    navigate(`/products`);
  };

  return (
    <Modal show={shows.show}>
      <Modal.Header className="modal-header" closeButton onClick={() => handleCLose()}>
        <Modal.Title> Qayta ko`rib chiqing </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Bu malumotlarni ro`yxatdan o`chirib tashlashingizga ishonchingiz komilmi?
        <br />
        <b>Id: {user.readProduct.id}</b>
        <br />
        <b>Title: {user.readProduct.title}</b>
        <br />
        <b>Brand: {user.readProduct.brand}</b>
        <br />
        <b>Category: {user.readProduct.category}</b>
        <br />
        <b>Rating: {user.readProduct.rating}</b>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-danger ms-2" onClick={() => handleDelete(user.readProduct.id)}>
          Delete
        </Button>
        <Button color="primary" onClick={() => handleCLose()}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modals;
