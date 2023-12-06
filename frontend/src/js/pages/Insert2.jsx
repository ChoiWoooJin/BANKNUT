import React from "react";
import { useNavigate } from "react-router-dom";
import BackBtn from "../components/BackBtn";
import MainBtn from "../components/MainBtn";

function Insert2() {
  const navigate = useNavigate();

  const onMove = (params, e) => {
    console.log(params);

    navigate(`/${params}`);
    e.preventDefault();
  };

  return (
    <div>
      <div>
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
                    신분증을 넣어주세요.
                  </h1>
                  <div
                    style={{
                      borderBottom: "2px solid #FFFFFF",
                      width: "480px",
                    }}
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
                <img
                  src="./public/insertid.png"
                  style={{ marginTop: "30px", width: "400px", height: "500px" }}
                />
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
                      fontSize: "60px",
                      color: "#F9A000",
                      fontWeight: "800",
                      letterSpacing: "6px",
                      textShadow: "14px 16px 16px rgba(0, 0, 0, 0.30)",
                      textAlign: "center",
                      marginTop: "20px",
                    }}
                  >
                    신분증 인증 주의
                  </div>
                  <div
                    style={{
                      width: "550px",
                      height: "300px",
                      fontSize: "45px",
                      color: "#3C3C3C",
                      fontWeight: "800",
                      letterSpacing: "6px",
                      textAlign: "center",
                      textShadow: "10px 10px 16px rgba(0, 0, 0, 0.30)",
                      margin: "0 auto",
                      marginTop: "50px",
                    }}
                  >
                    <span>신분증은 </span>
                    <span style={{ color: "#F00" }}>
                      주민등록증, 운전면허증
                    </span>
                    <span>만 가능하며, </span>
                    <span style={{ color: "#F00" }}>사진이 훼손</span>
                    <span>되지 않아야 합니다.</span>
                  </div>
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
              <MainBtn/>
              <BackBtn/>
            </div>
            <img
              src="./public/banknut_logo.png"
              style={{ width: "110px", height: "110px" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Insert2;
