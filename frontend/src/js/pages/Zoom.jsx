import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Zoom() {
  const navigate = useNavigate();

  const onMove = (params, e) => {
    console.log(params);

    navigate(`/${params}`);
    e.preventDefault();
  };

  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
      {/* 왼쪽 요소들 */}
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        {/* 로고 */}
        <img
          src="./public/banknut_logo.png"
          style={{ width: "200px", height: "200px" }}
        ></img>

        {/* 오만원권 가능 */}
        <div
          style={{
            color: "white",
            textAlign: "center",
            textShadow: "14px 8px 16px rgba(0, 0, 0, 0.30)",
            fontSize: "60px",
            fontWeight: "800",
            letterSpacing: "1px",
            height: "200px",
            marginTop: "10px",
          }}
        >
          <div>
            점 번호 : 0001
          </div>
          <div>
            기번 : 0001
          </div>
        </div>
        <div
          style={{
            width: "730px",
            height: "170px",
            borderRadius: "10px",
            backgroundColor: "#ECECEC",
            padding: "5px",
            textAlign: "center",
            boxShadow: "6px 10px 10px 0px rgba(255, 255, 255, 0.30)",
          }}
        >
          <div
            style={{
              color: "#E0B286",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              letterSpacing: "3px",
              fontSize: "60px",
              fontWeight: "800"
            }}
          >
            오만원권 입, 출금 가능
          </div>
          <div
            style={{
              color: "#E0B286",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              letterSpacing: "3px",
              fontSize: "60px",
              fontWeight: "800"
            }}
          >
            [수표 출금 불가]
          </div>
        </div>
      </div>

      {/* 메인버튼 */}
      <div
        style={{
          height: "580px",
          width: "1450px",
          backgroundColor: "#86BBE0",
          marginLeft: "20px",
          borderRadius: "20px",
          display: "flex",
        }}
      >
        {/* 왼쪽세로줄 */}
        <div>
          {/* 입금 */}
          <div
            onClick={(e) => {
              onMove("deposit", e);
            }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            style={{
              width: "725px",
              height: "290px",
              borderRight: "1px solid white",
              borderBottom: "1px solid white",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly"
            }}
          >
            <img
              src={hover ? "./public/입금2.png" : "./public/입금1.png"}
              style={{
                display: "block",
                width: "200px",
                height: "200px",
              }}
            ></img>
            <h1
              style={hover ? {
                color: "#E0B286",
                textShadow: "14px 8px 16px rgba(0, 0, 0, 0.30)",
                textAlign: "center",
                fontSize: "200px",
                fontWeight: "800",
              } : {
                textAlign: "center",
                textShadow: "14px 8px 16px rgba(0, 0, 0, 0.30)",
                fontSize: "200px",
                color: "rgba(0, 0, 0, 0.76)",
                fontWeight: "800",
              }}
            >
              입 금
            </h1>
          </div>
          {/* 이체 */}
          <div
            onClick={(e) => {
              onMove("transfer", e);
            }}
            onMouseOver={() => setHover2(true)}
            onMouseOut={() => setHover2(false)}
            style={{
              width: "725px",
              height: "290px",
              borderRight: "1px solid white",
              borderRadius: "0px 0px 0px 20px",
              boxShadow: "0px 16px 4px 0px rgba(255, 255, 255, 0.50)",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly"
            }}
          >
            <img
              src={hover2 ? "./public/이체2.png" : "./public/이체1.png"}
              style={{
                display: "block",
                width: "200px",
                height: "200px",
              }}
            ></img>
            <h1
              style={hover2 ? {
                color: "#E0B286",
                textShadow: "14px 8px 16px rgba(0, 0, 0, 0.30)",
                textAlign: "center",
                fontSize: "200px",
                fontWeight: "800",
              } : {
                textAlign: "center",
                textShadow: "14px 8px 16px rgba(0, 0, 0, 0.30)",
                fontSize: "200px",
                color: "rgba(0, 0, 0, 0.76)",
                fontWeight: "800",
              }}
            >
              이 체
            </h1>
          </div>
        </div>
        {/* 오른쪽줄 */}
        <div>
          {/* 출금 */}
          <div
            onClick={(e) => {
              onMove("withdraw", e);
            }}
            onMouseOver={() => setHover3(true)}
            onMouseOut={() => setHover3(false)}
            style={{
              width: "725px",
              height: "290px",
              borderBottom: "1px solid white",
              borderRadius: "0px 20px 0px 0px",
              boxShadow:
                "16px 0px 4px 0px rgba(255, 255, 255, 0.50)",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly"
            }}
          >
            <img
              src={hover3 ? "./public/출금2.png" : "./public/출금1.png"}
              style={{
                display: "block",
                width: "200px",
                height: "200px",
              }}
            ></img>
            <h1
              style={hover3 ? {
                color: "#E0B286",
                textShadow: "14px 8px 16px rgba(0, 0, 0, 0.30)",
                textAlign: "center",
                fontSize: "200px",
                fontWeight: "800",
              } : {
                textAlign: "center",
                textShadow: "14px 8px 16px rgba(0, 0, 0, 0.30)",
                fontSize: "200px",
                color: "rgba(0, 0, 0, 0.76)",
                fontWeight: "800",
              }}
            >
              출 금
            </h1>
          </div>
          {/* 정리 */}
          <div
            onClick={(e) => {
              onMove("clear", e);
            }}
            onMouseOver={() => setHover4(true)}
            onMouseOut={() => setHover4(false)}
            style={{
              width: "725px",
              height: "290px",
              borderRadius: "0px 0px 20px 0px",
              boxShadow:
                "0px 16px 4px 0px rgba(255, 255, 255, 0.50), 16px 0px 4px 0px rgba(255, 255, 255, 0.50)",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly"
            }}
          >
            <img
              src={hover4 ? "./public/정리2.png" : "./public/정리1.png"}
              style={{
                display: "block",
                width: "200px",
                height: "200px",
              }}
            ></img>
            <h1
              style={hover4 ? {
                color: "#E0B286",
                textShadow: "14px 8px 16px rgba(0, 0, 0, 0.30)",
                textAlign: "center",
                fontSize: "200px",
                fontWeight: "800",
              } : {
                textAlign: "center",
                textShadow: "14px 8px 16px rgba(0, 0, 0, 0.30)",
                fontSize: "200px",
                color: "rgba(0, 0, 0, 0.76)",
                fontWeight: "800",
              }}
            >
              정 리
            </h1>
          </div>
        </div>

      </div>
    </div>
  );
}
export default Zoom;
