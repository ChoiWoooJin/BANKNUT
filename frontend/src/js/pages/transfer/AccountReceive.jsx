import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Keypad from "../../components/Keypad";
import MainBtn from '../../components/MainBtn'
import BackBtn from "../../components/BackBtn";

function AccountReceive() {

  const limitVal = 100000000
  const [account, setAccount] = useState(0)
  const navigate = useNavigate();

  const onMove = (params, account, e) => {
    console.log(params);
    sessionStorage.setItem('receive_account', account);
    navigate(`/${params}`);
    e.preventDefault();
  };

  return (
    <>
      {/* 전체 배열 */}
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
          {/* 제목과 내용 분리 */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* 제목 가로배열 */}
            <div style={{ display: "flex", flexDirection: "row", justifyContent :"space-between" }}>
              <div style={{display : "flex"}}>
                <img
                  src="./public/출금2.png"
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
                    계좌번호 인증
                  </h1>
                  <div
                    style={{ borderBottom: "2px solid #FFFFFF", width: "320px" }}
                  ></div>
                </div>
              </div>
              <div style={{marginRight :"100px"}}>
                <div
                  onClick={(e) => {
                    onMove("transfer2", account, e);
                  }}
                  style={{
                    width: "200px",
                    height: "110px",
                    backgroundColor: "#2C64AF",
                    color: "white",
                    borderRadius: "15px",
                    textAlign: "center",
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
                    확인
                  </h1>
                </div>
              </div>
            </div>
            {/* 내용가로배열 */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "1475px",
                justifyContent: "space-around",
              }}
            >
              {/* 비밀번호 안내창 */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    width: "700px",
                    height: "250px",
                    borderRadius: "15px",
                    borderTop: "32px solid #0F3F54",
                    background:
                      "radial-gradient(70% 70% at 50% 0%, #FFF 0%, #E4E4E4 100%)",
                    boxShadow: "10px 10px 4px 0px rgba(255, 255, 255, 0.50)",
                  }}
                >
                  <div
                    style={{
                      width: "700px",
                      fontSize: "45px",
                      color: "#3C3C3C",
                      fontWeight: "800",
                      letterSpacing: "6px",
                      textShadow: "14px 16px 16px rgba(0, 0, 0, 0.30)",
                      textAlign: "center",
                      marginTop: "60px",
                    }}
                  >
                    <span>본인의 계좌 번호를 누르고 </span>
                    <span style={{ color: "#175D8C" }}>[확인]</span>
                    <span>을 눌러 주십시오.</span>
                  </div>
                </div>
                <div
                  style={{
                    width: "700px",
                    height: "220px",
                    borderRadius: "15px",
                    border: "3px solid #F9A000",
                    background:
                      "radial-gradient(70% 70% at 50% 0%, #FFF 0%, #E4E4E4 100%)",
                    marginTop: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="./public/Vector.png"
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "10px",
                    }}
                  />
                  <div
                    style={{
                      textShadow: "14px 8px 16px rgba(0, 0, 0, 0.30)",
                      fontSize: "50px",
                      color: "rgba(0, 0, 0, 0.76)",
                      fontWeight: "800",
                    }}
                  >
                    계좌번호:
                  </div>
                  <div
                    style={{
                      borderBottom : "1px solid black",
                      width : "300px",
                      textShadow: "14px 8px 16px rgba(0, 0, 0, 0.30)",
                      fontSize: "50px",
                      color: "rgba(0, 0, 0, 0.76)",
                      fontWeight: "800",
                      textAlign : "right"
                    }}>
                  {account.toString().replace(/\B(?=(\d{4})+(?!\d))/g, '-')}
                  </div>
                </div>
              </div>

              {/* 키패드 */}
              <Keypad setInput={setAccount} inputVal={account} limitVal={limitVal}/>
            </div>
          </div>
        </div>
        {/* 아래 로고 및 버튼 */}
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
          />
        </div>
      </div>
    </>
  );
}
export default AccountReceive;
