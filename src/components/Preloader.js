import React from "react";
import { Circles } from "react-loader-spinner"; 
function Preloader({ load }) {
  return (
    <div
      style={{
        display: load ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#000",
        zIndex: 9999,
      }}
    >
      <Circles
        height={80}
        width={80}
        color="#00BFFF"
        ariaLabel="loading"
        visible={true}
      />
    </div>
  );
}

export default Preloader;
