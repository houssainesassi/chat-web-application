import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./scenes/home/home";
import Login from "./scenes/login/login";
import Profile from "./scenes/profile/profile";

function App() {
  return (
    <div className="App">APP
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/userId" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
