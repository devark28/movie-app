import React from "react";
import "./index.css";
// import "./App.css";
import Navigation from "./components/navigation";
import Layout from "./components/layout";

function App() {
  return (
    <div className="flex flex-col p-2 h-screen w-full">
      <div className="flex flex-col size-full">
        <div
          className="flex data-[panel-group-direction=vertical]:flex-col gap-x-1 z-0 size-full"
          style={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
            overflow: "hidden",
            width: "100%",
          }}
        >
          <Navigation />
          <div
            class="relative flex w-px items-center z-0 justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&amp;[data-panel-group-direction=vertical]>div]:rotate-90"
            role="separator"
            style={{
              touchAction: "none",
              userSelect: "none",
            }}
            tabindex="0"
          ></div>
          <Layout />
        </div>
      </div>
    </div>
  );
}

export default App;
