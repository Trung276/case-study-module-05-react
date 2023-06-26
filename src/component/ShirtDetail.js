import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SHIRT_MANAGEMENT_API } from "../constant/AppConstant";
import "bootstrap/dist/css/bootstrap.min.css";

function ShirtDetail() {
  const { shirtId } = useParams();
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

  function getShirts() {
    window.location.href = "/";
  }

  function removeShirt() {
    if (shirtId) {
      axios
        .delete(`${SHIRT_MANAGEMENT_API}/products/${shirtId}`)
        .then((res) => {
          alert(`Remove book ${JSON.stringify(res.data)} successfully!!!`);
          // (<window className="location"></window>).href = "/";
          getShirts();
        })
        .catch((err) => {
          throw err;
        });
    }
  }

  return (
    <div className="container">
      <h1 className="mb-4">Shirt Details</h1>
      <p>
        <b>Name:</b> {shirt.name}
      </p>
      <p>
        <b>Price:</b> {shirt.price}
      </p>
      <p>
        <b>Stock:</b> {shirt.stock}
      </p>
      <p>
        <b>Description:</b> {shirt.description}
      </p>
      <button
        type="button"
        className="btn btn-primary mr-2"
        onClick={getShirts}
      >
        Back
      </button>
      <button type="button" className="btn btn-danger" onClick={removeShirt}>
        Remove
      </button>
    </div>
  );
}

export default ShirtDetail;
