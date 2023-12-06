import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Choice() {
  const navigate = useNavigate();

  const onMove = (params, e) => {
    console.log(params);

    navigate(`/${params}`);
    e.preventDefault();
  };

  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        width: "1475px",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div
        onClick={(e) => {
          onMove("insert", e);
        }}
      >
        <img
          src={hover ? "./public/통카2.png" : "./public/통카1.png"}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          style={{ width: "400px", height: "350px" }}
        ></img>
        <h1
          style={{
            textShadow: "14px 8px 16px rgba(0, 0, 0, 0.30)",
            fontSize: "50px",
            color: "rgba(0, 0, 0, 0.76)",
            fontWeight: "800",
          }}
        >
          통장 및 카드
        </h1>
      </div>
      <div style={{ borderLeft: "2px solid #FFFFFF", height: "450px" }}></div>
      <div
        onClick={(e) => {
          onMove("account", e);
        }}
      >
        <img
          src={hover2 ? "./public/faceid2.png" : "./public/faceid.png"}
          onMouseOver={() => setHover2(true)}
          onMouseOut={() => setHover2(false)}
          style={{ width: "350px", height: "350px" }}
        ></img>
        <h1
          style={{
            textShadow: "14px 8px 16px rgba(0, 0, 0, 0.30)",
            fontSize: "50px",
            color: "rgba(0, 0, 0, 0.76)",
            fontWeight: "800",
          }}
        >
          FACE ACCOUNT
        </h1>
      </div>
    </div>
  );
}
export default Choice;
