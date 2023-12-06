import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const atmNumber = localStorage.getItem('atmNum')
  const navigate = useNavigate();

  const onMove = (params, e) => {
    sessionStorage.setItem('type', params);
    navigate(`/${params}`);
    e.preventDefault();
  };

  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);

  return (
    <div style={{ padding: "20px", display: "flex" }}>
      {/* 왼쪽 요소들 */}
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* 로고 */}
        <img
          // onClick={(e) => {
          //   onMove("face-detection", e);
          // }}
          src="./public/banknut_logo.png"
          style={{ width: "200px", height: "200px" }}
        ></img>

        {/* 오만원권 가능 */}
        <div>
          <p
            style={{
              color: "white",
              textAlign: "center",
              textShadow: "14px 8px 16px rgba(0, 0, 0, 0.30)",
              fontWeight: "800",
              letterSpacing: "1px",
            }}
          >
            점 번호 : 0001 기번 : 000{atmNumber}
          </p>
          <div
            style={{
              borderRadius: "10px",
              backgroundColor: "#ECECEC",
              padding: "5px",
              textAlign: "center",
              boxShadow: "6px 10px 10px 0px rgba(255, 255, 255, 0.30)",
            }}
          >
            <h2
              style={{
                color: "#E0B286",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                letterSpacing: "7.2px",
              }}
            >
              오만원권
            </h2>
            <h2
              style={{
                color: "#E0B286",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                letterSpacing: "7.2px",
              }}
            >
              입,출금 가능
            </h2>
            <h2
              style={{
                color: "#E0B286",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                letterSpacing: "3px",
              }}
            >
              [수표 출금 불가]
            </h2>
          </div>
        </div>
      </div>

      {/* 메인버튼 */}
      <div
        style={{
          height: "800px",
          width: "1200px",
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
            style={{
              width: "400px",
              height: "400px",
              borderRight: "1px solid white",
              borderBottom: "1px solid white",
            }}
          >
            <img
              src={hover ? "./public/입금2.png" : "./public/입금1.png"}
              onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)}
              style={{
                display: "block",
                margin: "0 auto",
                width: "350px",
                height: "350px",
              }}
            ></img>
            <h1
              style={{
                margin: "0px",
                textAlign: "center",
                textShadow: "14px 8px 16px rgba(0, 0, 0, 0.30)",
                fontSize: "40px",
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
            style={{
              width: "400px",
              height: "400px",
              borderRight: "1px solid white",
              borderRadius: "0px 0px 0px 20px",
              boxShadow: "0px 16px 4px 0px rgba(255, 255, 255, 0.50)",
            }}
          >
            <img
              src={hover2 ? "./public/이체2.png" : "./public/이체1.png"}
              onMouseOver={() => setHover2(true)}
              onMouseOut={() => setHover2(false)}
              style={{
                display: "block",
                margin: "0 auto",
                width: "350px",
                height: "350px",
              }}
            ></img>
            <h1
              style={{
                margin: "0px",
                textAlign: "center",
                textShadow: "14px 8px 16px rgba(0, 0, 0, 0.30)",
                fontSize: "40px",
                color: "rgba(0, 0, 0, 0.76)",
                fontWeight: "800",
              }}
            >
              이 체
            </h1>
          </div>
        </div>
        {/* 가운데줄 */}
        <div>
          {/* 출금 */}
          <div
            onClick={(e) => {
              onMove("withdraw", e);
            }}
            style={{
              width: "400px",
              height: "400px",
              borderRight: "1px solid white",
              borderBottom: "1px solid white",
            }}
          >
            <img
              src={hover3 ? "./public/출금2.png" : "./public/출금1.png"}
              onMouseOver={() => setHover3(true)}
              onMouseOut={() => setHover3(false)}
              style={{
                display: "block",
                margin: "0 auto",
                width: "350px",
                height: "350px",
              }}
            ></img>
            <h1
              style={{
                margin: "0px",
                textAlign: "center",
                textShadow: "14px 8px 16px rgba(0, 0, 0, 0.30)",
                fontSize: "40px",
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
            style={{
              width: "400px",
              height: "400px",
              borderRight: "1px solid white",
              boxShadow:
                "0px 16px 4px 0px rgba(255, 255, 255, 0.50), 16px 0px 4px 0px rgba(255, 255, 255, 0.50)",
            }}
          >
            <img
              src={hover4 ? "./public/정리2.png" : "./public/정리1.png"}
              onMouseOver={() => setHover4(true)}
              onMouseOut={() => setHover4(false)}
              style={{
                display: "block",
                margin: "0 auto",
                width: "350px",
                height: "350px",
              }}
            ></img>
            <h1
              style={{
                margin: "0px",
                textAlign: "center",
                textShadow: "14px 8px 16px rgba(0, 0, 0, 0.30)",
                fontSize: "40px",
                color: "rgba(0, 0, 0, 0.76)",
                fontWeight: "800",
              }}
            >
              정 리
            </h1>
          </div>
        </div>
        {/* 오른쪽줄 */}
        <div>
          {/* face ID */}
          <div
            onClick={(e) => {
              onMove("register", e);
            }}
            style={{
              width: "398px",
              height: "400px",
              borderBottom: "1px solid white",
              backgroundColor: "#ECECEC",
              borderRadius: "0px 20px 0px 0px",
              boxShadow:
                "0px 16px 4px 0px rgba(255, 255, 255, 0.50), 16px 0px 4px 0px rgba(255, 255, 255, 0.50)",
            }}
          >
            <img
              src={hover5 ? "./public/faceid2.png" : "./public/faceid.png"}
              onMouseOver={() => setHover5(true)}
              onMouseOut={() => setHover5(false)}
              style={{
                display: "block",
                margin: "0 auto",
                width: "350px",
                height: "350px",
              }}
            ></img>
            <h1
              style={{
                margin: "0px",
                textAlign: "center",
                textShadow: "14px 8px 16px rgba(0, 0, 0, 0.30)",
                fontSize: "40px",
                color: "rgba(0, 0, 0, 0.76)",
                fontWeight: "800",
              }}
            >
              FACE ACCOUNT 등록
            </h1>
          </div>
          {/* 화면확대 */}
          <div
          onClick={(e) => {
            onMove("zoom", e);
          }}
            style={{
              width: "398px",
              height: "400px",
              backgroundColor: "#E0868D",
              borderRadius: "0px 0px 20px 0px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow:
                "0px 16px 4px 0px rgba(255, 255, 255, 0.50), 16px 0px 4px 0px rgba(255, 255, 255, 0.50)",
            }}
          >
            <h1
              style={{
                margin: "0px",
                textAlign: "center",
                color: "white",
                textShadow: "14px 16px 16px rgba(0, 0, 0, 0.30)",
                fontSize: "90px",
                fontWeight: "800",
              }}
            >
              화면확대
            </h1>
            <h1
              style={{
                margin: "0px",
                textAlign: "center",
                color: "white",
                textShadow: "14px 16px 16px rgba(0, 0, 0, 0.30)",
                fontSize: "60px",
                fontWeight: "800",
              }}
            >
              (저시력자용)
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
