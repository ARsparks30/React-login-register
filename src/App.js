import React from "react";
import "./App.css";
import Login from "./component/Login";
import Register from "./component/Register";
import Chat from "./component/Chat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Login.css";
function App() {
  return (
    <div className="App">
      {/* Your main application component */}
      {/* <h1>Hello, Chat App!</h1> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </div>
      </Router>
      {/* <Router>
        <Routes>
          <Route path="/" component={<Login />} />
          <Route path="/register" component={Register} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
