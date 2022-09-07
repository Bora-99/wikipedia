import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Main from "./Main";
import SaveFavorit from "./SaveFavorite";
import SaveContextProvider from "./Context/appContext";

function App() {
  return (
    <Router>
      <SaveContextProvider>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="save" element={<SaveFavorit />} />
        </Routes>
      </SaveContextProvider>
    </Router>
  );
}

export default App;
