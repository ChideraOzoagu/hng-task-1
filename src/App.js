import Home from "./components/Home";
import Error from "./components/Error";
import Contact from "./components/Contact";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
