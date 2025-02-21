import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConfigurationForm from "./ConfigurationForm";
import SharedDedicatedResponse from "./SharedDedicatedResponse";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ConfigurationForm />} />
          <Route path="result" element={<SharedDedicatedResponse/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
