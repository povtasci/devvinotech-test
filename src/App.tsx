import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./sagas/category/categoryActions";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
