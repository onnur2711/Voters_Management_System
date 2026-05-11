import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import AddVoter from "./pages/AddVoter";
import AllVoters from "./pages/AllVoters";
import SearchVoter from "./pages/SearchVoter";
import UpdateVoter from "./pages/UpdateVoter";
import DeleteVoter from "./pages/DeleteVoter";
import ReadOneVoter from "./pages/ReadOneVoter";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/add"
          element={<AddVoter />}
        />

        <Route
          path="/allvoters"
          element={<AllVoters />}
        />

        <Route
          path="/search"
          element={<SearchVoter />}
        />

        <Route
          path="/update"
          element={<UpdateVoter />}
        />

        <Route
          path="/delete"
          element={<DeleteVoter />}
        />

        <Route
          path="/readone"
          element={<ReadOneVoter />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;