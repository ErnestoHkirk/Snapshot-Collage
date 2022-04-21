import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayPage from "./pages/DisplayPage";
import ErrorPage from "./pages/ErrorPage";
import Header from "./Header";
import HomePage from "./pages/HomePage";
import ImageSearch from "./pages/ImageSearch";

const App = () => {
  const [images, setImages] = useState([]);

  function onGenerate(param) {
    setImages(param);
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/image-search"
          element={<ImageSearch onGenerate={onGenerate} />}
        />
        <Route
          path="/display-collection"
          element={<DisplayPage images={images} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
