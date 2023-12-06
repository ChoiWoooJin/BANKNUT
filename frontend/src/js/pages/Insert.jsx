import React from "react";
import { useNavigate } from "react-router-dom";
import MainBtn from "../components/MainBtn";
import BackBtn from "../components/BackBtn";

function Insert() {
  const navigate = useNavigate();
  const type = sessionStorage.getItem('type')
  const onMove = (params, e) => {
    console.log(params);
    if (type === 'register') {
      navigate('/account')
    } else {
      navigate(`/${params}`);
    }
    e.preventDefault();
  };

  return (
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
                  통장이나 카드를 넣어주세요.
                </h1>
                <div
                  style={{ borderBottom: "2px solid #FFFFFF", width: "650px" }}
                ></div>
              </div>
              <div
                onClick={(e) => {
                  onMove("account-input", e);
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
                  계좌번호 입력
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
                src="./public/통카3.png"
                style={{ marginTop: "50px", width: "700px", height: "400px" }}
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
                  불법 복제 주의 !!
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
                    marginTop: "40px",
                  }}
                >
                  <span>투입구를 확인하시고, </span>
                  <span style={{ color: "#F00" }}>
                    다른 부착물이 있는 경우{" "}
                  </span>
                  <span>사용을 중단하시고, </span>
                  <span style={{ color: "#F00" }}>영업점에 신고</span>
                  <span>해주시기 바랍니다.</span>
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
            <MainBtn />
            <BackBtn />
          </div>
          <img
            src="./public/banknut_logo.png"
            style={{ width: "110px", height: "110px" }}
          ></img>
        </div>
      </div>
    </div>
  );
}
export default Insert;
