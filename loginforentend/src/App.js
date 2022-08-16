import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Component/Login";
import Viewuser from "./Component/Viewuser";

function App() {
  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="Viewuser" element={<Viewuser />} />
      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
