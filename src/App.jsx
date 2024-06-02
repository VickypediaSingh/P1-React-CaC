import { useState } from "react";

const colors = ["red", "green", "blue"];

function App() {
  const [bgColor, setBgColor] = useState("whitesmoke");

  return (
    <div
      className="w-full h-screen duration-500"
      style={{ backgroundColor: bgColor }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map((color) => (
            <button
              key={color} // Important for accessibility and performance
              onClick={() => setBgColor(color)}
              className={`outline-none px-4 py-1 rounded-full text-black shadow-lg bg-${color}-500`}
              style={{ backgroundColor: color }} // Set background color directly
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
