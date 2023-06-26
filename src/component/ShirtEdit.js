import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SHIRT_MANAGEMENT_API } from "../constant/AppConstant";

function ShirtEdit() {
  const { shirtId } = useParams();
  const isCreate = !shirtId;
  const [shirt, setShirt] = useState({});

  useEffect(() => {
    if (shirtId) {
      axios
        .get(`${SHIRT_MANAGEMENT_API}/products/${shirtId}`)
        .then((res) => {
          setShirt(res.data);
        })
        .catch((err) => {
          throw err;
        });
    }
  }, [shirtId]);

  function handleChange(event) {
    setShirt({
      ...shirt,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    axios
      .put(`${SHIRT_MANAGEMENT_API}/products/${shirtId}`, shirt)
      .then((res) => {
        alert(
          `${isCreate ? "Create" : "Edit"} shirt ${JSON.stringify(
            res.data
          )} successfully!!!`
        );
        window.location.href = "/";
      })
      .catch((err) => {
        throw err;
      });
  }

  function getShirts() {
    window.location.href = "/";
  }

  return (
    <div>
      <h1 className="text-center">Shirt Edit</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="Id" className="form-label">
            ID
          </label>
          <input
            readOnly
            type="text"
            className="form-control"
            id="Id"
            value={shirt.id || ""}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            name={"name"}
            type="text"
            className="form-control"
            id="name"
            value={shirt.name || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">
            Stock
          </label>
          <input
            name={"stock"}
            type="text"
            className="form-control"
            id="quantity"
            value={shirt.stock || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            name={"description"}
            type="text"
            className="form-control"
            id="description"
            value={shirt.description || ""}
            onChange={handleChange}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={getShirts}>
          Back
        </button>
        &nbsp;
        <button
          type="button"
          className="btn  btn-success"
          onClick={handleSubmit}
        >
          Edit
        </button>
      </form>
    </div>
  );
}

export default ShirtEdit;
