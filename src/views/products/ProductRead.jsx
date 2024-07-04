import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { readUsers } from "../../store/crud/crudAction";
import { useEffect } from "react";
import Modals from "../mdal/ModalRead";
import ButtonShow from "../mdal/Butonshow";

const ProductRead = () => {
  const params = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  const handleUpdate = (id) => {
    navigate(`/products/edit/${id}`);
  };

  useEffect(() => {
    dispatch(readUsers(params.id));
  }, []);

  console.log(user.readProduct);

  return (
    <>
      <Table striped bordered hover variant="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.readProduct.id}</td>
            <td>{user.readProduct.title}</td>
            <td>{user.readProduct.brand}</td>
            <td>{user.readProduct.category}</td>
            <td>{user.readProduct.rating}</td>
            <td>
              <Button className="btn btn-primary ms-2" onClick={() => handleUpdate(user.readProduct.id)}>
                Edit
              </Button>
              <ButtonShow />
            </td>
          </tr>
        </tbody>
      </Table>
      <Modals />
    </>
  );
};

export default ProductRead;
