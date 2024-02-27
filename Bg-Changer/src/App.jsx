import { useState } from "react";
// import "./App.css";

function App() {
  const [color, setColor] = useState("skyblue");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          className="outline-none px-4 py-1
          rounded-full "
          onClick={()=>setColor("red")}
          style={{backgroundColor:"Red"}}
          >Red</button>
          <button
          className="outline-none px-4 py-1
          rounded-full "
          onClick={()=>setColor("blue")}
          style={{backgroundColor:"blue"}}
          >blue</button>
          <button
          className="outline-none px-4 py-1
          rounded-full "
          onClick={()=>setColor("green")}
          style={{backgroundColor:"green"}}
          >green</button>
          <button
          className="outline-none px-4 py-1
          rounded-full "
          onClick={()=>setColor("yellow")}
          style={{backgroundColor:"yellow"}}
          >yellow</button>
          <button
          className="outline-none px-4 py-1
          rounded-full "
          onClick={()=>setColor("orange")}
          style={{backgroundColor:"orange"}}
          >orange</button>
          <button
          className="outline-none px-4 py-1
          rounded-full "
          onClick={()=>setColor("pink")}
          style={{backgroundColor:"pink"}}
          >pink</button>
          <button
          className="outline-none px-4 py-1
          rounded-full "
          onClick={()=>setColor("lavender")}
          style={{backgroundColor:"lavender"}}
          >lavender</button>
          <button
          className="outline-none px-4 py-1
          rounded-full "
          onClick={()=>setColor("olive")}
          style={{backgroundColor:"olive"}}
          >olive</button>


          
        </div>
      </div>
    </div>
  );
}

export default App;
