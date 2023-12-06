import React from "react";
import { useNavigate } from "react-router-dom";
import MainBtn from "../components/MainBtn";

function Register() {
  const navigate = useNavigate();

  const onMove = (params, e) => {
    console.log(params);

    navigate(`/${params}`);
    e.preventDefault();
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
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
                src="./public/faceid.png"
                style={{ width: "200px", height: "200px" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h1
                  style={{
                    textShadow: "14px 8px 16px rgba(0, 0, 0, 0.30)",
                    fontSize: "50px",
                    color: "rgba(0, 0, 0, 0.76)",
                    fontWeight: "800",
                  }}
                >
                  FACE ACCOUNT 등록 절차
                </h1>
                <div
                  style={{ borderBottom: "2px solid #FFFFFF", width: "425px" }}
                ></div>
              </div>
            </div>
            <img
              src="./public/facestart2.png"
              style={{ width: "1455px", height: "300px", marginLeft: "30px" }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <span
                style={{
                  width: "330px",
                  fontSize: "40px",
                  color: "white",
                  textShadow: "14px 16px 16px rgba(0, 0, 0, 0.30)",
                  fontWeight: "800",
                }}
              >
                1. 통장이나 카드를 넣어주세요.
              </span>
              <span
                style={{
                  width: "330px",
                  fontSize: "40px",
                  color: "white",
                  textShadow: "14px 16px 16px rgba(0, 0, 0, 0.30)",
                  fontWeight: "800",
                }}
              >
                2. 계좌번호를 입력해 주세요.
              </span>
              <span
                style={{
                  width: "330px",
                  fontSize: "40px",
                  color: "white",
                  textShadow: "14px 16px 16px rgba(0, 0, 0, 0.30)",
                  fontWeight: "800",
                }}
              >
                3. 비밀번호를 입력해 주세요.
              </span>
              <span
                style={{
                  width: "330px",
                  fontSize: "40px",
                  color: "white",
                  textShadow: "14px 16px 16px rgba(0, 0, 0, 0.30)",
                  fontWeight: "800",
                }}
              >
                4. 얼굴 인증을 진행해 주세요.
              </span>
            </div>
          </div>
        </div>
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
            <div
              onClick={(e) => {
                onMove("insert", e);
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
                등록하기
              </h1>
            </div>
          </div>
          <img
            src="./public/banknut_logo.png"
            style={{ width: "110px", height: "110px" }}
          ></img>
        </div>
      </div>
    </>
  );
}
export default Register;
