import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import Pagination from "./Pagination";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/crud/crudAction";
import ModalList from "../mdal/ModalList";
import ButtonShow from "../mdal/Butonshow";
// import ButtonShow from "../mdal/Butonshow";

const ProductList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleRead = (id) => {
    navigate(`/products/read/${id}`);
  };

  const handleUpdate = (id) => {
    navigate(`/products/edit/${id}`);
  };

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
          {user?.data?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
              <td>{item.rating}</td>
              <td>
                <Button className="btn btn-success ms-2" onClick={() => handleRead(item.id)}>
                  Read
                </Button>
                <Button className="btn btn-primary ms-2" onClick={() => handleUpdate(item.id)}>
                  Edit
                </Button>
                <ButtonShow />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ModalList />
      <Pagination />
    </>
  );
};

export default ProductList;
