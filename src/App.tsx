import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import ConfigurationForm from "./ConfigurationForm";
// import SharedDedicatedResponse from "./SharedDedicatedResponse";
import CardComponent from "./Form";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ConfigurationForm />} />
          <Route path="result" element={<CardComponent/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
