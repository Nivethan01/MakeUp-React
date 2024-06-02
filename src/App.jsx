import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Course from "./Components/Course";
import Form from "./Components/Form";
import Join from "./Components/Join";
import Cerified from "./Components/Cerified";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Course />
        <Form />
        <Join />
        <Cerified/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
