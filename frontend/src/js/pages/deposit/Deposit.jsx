import React from "react";
import Choice from "../../components/Choice";
import MainBtn from "../../components/MainBtn";

function Deposit() {

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* 하늘색박스 */}
        <div
          style={{
            height: "700px",
            width: "1475px",
            backgroundColor: "#86BBE0",
            borderRadius: "10px",
            display: "flex",
            margin: "10px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                src="./public/입금2.png"
                style={{ width: "200px", height: "200px", marginLeft: "10px" }}
              ></img>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h1
                  style={{
                    textShadow: "14px 8px 16px rgba(0, 0, 0, 0.30)",
                    fontSize: "50px",
                    color: "rgba(0, 0, 0, 0.76)",
                    fontWeight: "800",
                  }}
                >
                  이용수단을 선택해 주세요.
                </h1>
                <div
                  style={{ borderBottom: "2px solid #FFFFFF", width: "600px" }}
                ></div>
              </div>
            </div>
            <Choice />
          </div>
        </div>
      </div>
      {/* 하단 */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <MainBtn/>
        </div>
        <img
          src="./public/banknut_logo.png"
          style={{ width: "110px", height: "110px" }}
        ></img>
      </div>
    </>
  );
}
export default Deposit;