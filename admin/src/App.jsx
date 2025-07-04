import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import Login from "./components/Login/Login";

// export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const backendUrl = "http://localhost:4000"

const App = () => {
  const [token, setToken] = useState("");


  return (
    <div className="app-container">
      {token === "" ? (
        <Login />
      ) : (
        <>
          {" "}
          <div className="app-content">
            <Sidebar />
            <div className="page-content">
              <Routes>
                <Route path="/add" element={<Add />} />
                <Route path="/list" element={<List />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
            </div>
          </div>
        </>
      )}
      {/* <hr className="app-divider" /> */}
    </div>
  );
};

export default App;
