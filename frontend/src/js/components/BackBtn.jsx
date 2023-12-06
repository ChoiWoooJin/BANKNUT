import React from "react";
import { useNavigate } from "react-router-dom";

function BackBtn() {

  const navigate = useNavigate();

  return(
    <>
      <div
        onClick={(e) => {
          navigate(-1);
        }}
        style={{
          width: "200px",
          height: "110px",
          backgroundColor: "#2C64AF",
          color: "white",
          borderRadius: "15px",
          textAlign: "center",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            margin: "0px",
            textShadow: "14px 16px 16px rgba(0, 0, 0, 0.30)",
            fontSize: "80px",
            fontWeight: "800",
            letterSpacing: "5px",
          }}
        >
          이전
        </h1>
      </div>
    </>
  )
} export default BackBtn