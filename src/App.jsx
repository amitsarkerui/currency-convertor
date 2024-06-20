import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";

function App() {
  const currency = useCurrencyInfo("usd");

  return (
    <div className="bg-[url('./assets/bg/currency-bg.jpg')] w-full h-screen bg-cover bg-bottom">
      <div className="w-full h-screen backdrop-blur-sm bg-gray-950 bg-opacity-60 flex justify-center items-center">
        <div className="bg-[#180D3A] bg-opacity-90 w-full p-6 max-w-xl text-white rounded-xl border-2 border-gray-700">
          <InputBox />
          <div className="mx-auto text-center mt-7 mb-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-10 inline bg-green-500 p-2 rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
              />
            </svg>
          </div>
          <InputBox />
        </div>
      </div>
    </div>
  );
}

export default App;
