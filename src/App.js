import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import FinanceApi from "./Components/FinanceApi";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/finance" element={<FinanceApi />} />
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
    </>
  );
}

export default App;
