import React from "react";
import "./index.css";
import "./App.css";

import InputContainer from "./components/InputContainer";

const App = () => {
  return (
    <>
      <h1 className="app-name w-[300px] h-fit relative z-10 bg-[rgba(0,0,0,0.2)] p-2 mb-2 rounded-lg backdrop-blur-md text-center text-xl font-normal">Weather App</h1>
      <main className="main-container w-[300px] h-[400px] relative z-10 bg-[rgba(0,0,0,0.2)] p-5 rounded-md backdrop-blur-md shadow-lg">       
        <InputContainer /> 
      </main>
    </>
  );
};

export default App;
