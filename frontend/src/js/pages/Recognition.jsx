import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackBtn from "../components/BackBtn";
import MainBtn from "../components/MainBtn";
import Photo2 from './Photo2'

function Recognition() {
  const navigate = useNavigate();
  const possible = sessionStorage.getItem('possible')
  const [faceBool, setFaceBool] = useState(false)
  console.log(possible)
  const onMove = (params, e) => {
    if (possible === 'true') {
      navigate(`/${params}`);
      e.preventDefault();
    } else {
      alert('얼굴 인식에 실패했습니다.')
      navigate(`/main`);
      e.preventDefault();
    }

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
                style={{ width: "150px", height: "150px" }}
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
                  FACE ACCOUNT 인증
                </h1>
                <div
                  style={{ borderBottom: "2px solid #FFFFFF", width: "300px" }}
                ></div>
              </div>
              <div
                onClick={(e) => {
                  onMove("password", e);
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
                  marginTop: "10px",
                }}
              >
                <h1
                  style={{
                    margin: "0px",
                    textShadow: "14px 16px 16px rgba(0, 0, 0, 0.30)",
                    fontSize: "40px",
                    fontWeight: "800",
                    letterSpacing: "5px",
                  }}
                >
                  비밀번호
                </h1>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "1475px",
                justifyContent: "space-around",
              }}
            >
              <Photo2 style={{ position: "absolute", zIndex: "100" }} />
              <div
                style={{
                  width: "600px",
                  height: "470px",
                  borderRadius: "15px",
                  borderTop: "32px solid #0F3F54",
                  background:
                    "radial-gradient(70% 70% at 50% 0%, #FFF 0%, #E4E4E4 100%)",
                  boxShadow: "10px 10px 4px 0px rgba(255, 255, 255, 0.50)",
                }}
              >
                <div
                  style={{
                    width: "600px",
                    fontSize: "50px",
                    color: "#F9A000",
                    fontWeight: "800",
                    letterSpacing: "6px",
                    textShadow: "14px 16px 16px rgba(0, 0, 0, 0.30)",
                    textAlign: "center",
                    marginTop: "20px",
                  }}
                >
                  얼굴을 인식해주세요
                </div>
                <div
                  style={{
                    width: "550px",
                    height: "150px",
                    fontSize: "30px",
                    color: "#3C3C3C",
                    fontWeight: "800",
                    letterSpacing: "6px",
                    textAlign: "center",
                    textShadow: "10px 10px 16px rgba(0, 0, 0, 0.30)",
                    margin: "0 auto",
                    marginTop: "30px",
                  }}
                >
                  <span style={{ color: "#F00" }}>삐 소리</span>
                  <span>가 날 때까지 가만히 있어주세요. </span>
                  <span style={{ color: "#F00" }}>신분증 사진과 일치</span>
                  <span>를 파악하는 중입니다.</span>
                  <span style={{ color: "#F00" }}>
                    얼굴인식 방해 요소는 벗어주세요!!
                  </span>
                </div>
                <img
                  src="./public/mask.png"
                  style={{ width: "580px", marginLeft: "10px" }}
                />
              </div>
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
            <MainBtn />
            <BackBtn />
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
export default Recognition;
