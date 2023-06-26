import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShirtList from "./component/ShirtList";
import ShirtDetail from "./component/ShirtDetail";
import ShirtAdd from "./component/ShirtAdd";
import ShirtEdit from "./component/ShirtEdit";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShirtList />} />
        <Route path={`/products/:shirtId`} element={<ShirtDetail />} />
        <Route path={"/products/add"} element={<ShirtAdd />} />
        <Route path={`/products/edit/:shirtId`} element={<ShirtEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
