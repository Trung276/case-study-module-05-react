import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SHIRT_MANAGEMENT_API } from "../constant/AppConstant";

function ShirtAdd() {
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
      .post(`${SHIRT_MANAGEMENT_API}/products`, shirt)
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
    <div className="container">
      <h1>Shirt Add</h1>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            name="name"
            value={shirt.name || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            className="form-control"
            name="price"
            value={shirt.price || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Stock</label>
          <input
            className="form-control"
            name="stock"
            value={shirt.stock || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            className="form-control"
            name="description"
            value={shirt.description || ""}
            onChange={handleChange}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={getShirts}>
          Back
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default ShirtAdd;
