import React from "react";
import { useNavigate } from "react-router-dom";

function MainBtn() {

  const navigate = useNavigate();
  const onMove = (params, e) => {
    console.log(params);
    sessionStorage.clear()
    navigate(`/${params}`);
    e.preventDefault();
  };

  return(
    <>
      <div
            onClick={(e) => {
              onMove("main", e);
            }}
            style={{
              width: "370px",
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
              메인으로
            </h1>
          </div>
    </>
  )
} export default MainBtn