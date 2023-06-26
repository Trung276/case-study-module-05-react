import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SHIRT_MANAGEMENT_API } from "../constant/AppConstant";

function ShirtList() {
  const { shirtId } = useParams();
  const [shirts, setShirt] = useState([]);

  useEffect(() => {
    axios
      .get(`${SHIRT_MANAGEMENT_API}/products`)
      .then((res) => {
        setShirt(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, [shirts, shirtId]);

  function handleCreate() {
    window.location.href = "/products/add";
  }

  return (
    <div>
      <div className="d-flex bd-highlight">
        <h1 className="p-2 w-100 bd-highlight text-center">Shirt List</h1>
        <div
          className="btn-group p-2 flex-shrink-1 bd-highlight"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleCreate}
          >
            Create new shirt
          </button>
        </div>
      </div>
      <table className="table" border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th colSpan={2}>
              <div className={"text-center"}>Action</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {shirts.map((shirt) => (
            <tr key={shirt.id}>
              <td>{shirt.name} </td>
              <td>{shirt.price} </td>
              <td>{shirt.stock} </td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() =>
                    (window.location.href = `/products/${shirt.id}`)
                  }
                >
                  Detail
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() =>
                    (window.location.href = `/products/edit/${shirt.id}`)
                  }
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShirtList;
