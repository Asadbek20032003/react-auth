import { useDispatch } from "react-redux";
import { showUsers } from "../../store/modal/modalAction";
import { Button } from "react-bootstrap";

const ButtonShow = () => {
  const dispatch = useDispatch();

  const handleShow = (show) => {
    dispatch(showUsers(show));
  };

  return (
    <Button
      className="btn btn-danger ms-2"
      data-bs-toggle="modal"
      data-bs-target="#userForm"
      variant="primary"
      onClick={() => handleShow()}
    >
      Delete
    </Button>
  );
};

export default ButtonShow;
