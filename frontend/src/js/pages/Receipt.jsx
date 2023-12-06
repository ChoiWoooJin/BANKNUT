import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import MainBtn from "../components/MainBtn";

function Receipt() {

  const [balance, setBalance] = useState(0)
  const navigate = useNavigate();
  const atmNumber = localStorage.getItem('atmNum')
  const type = sessionStorage.getItem('type');
  const account = sessionStorage.getItem('account');
  const password = sessionStorage.getItem('password');
  const depositCash = sessionStorage.getItem('depositCash');
  const withdrawCash = sessionStorage.getItem('withdrawCash');
  const [Cash, setCash] = useState(0)
  const [afterBalance, setAfterBalance] = useState(0)

  const onMove = (params, e) => {
    console.log(params);
    console.log(type)
    const fetchData = async () => {
      // 입금 요청 
      axios.post(`https://j9c206.p.ssafy.io/api/${type}?atmId=${atmNumber}`, JSON.stringify(
        {
          amount: Cash,
          password: password,
          accountNumber: account
        }), { headers: { "Content-Type": 'application/json' } })
        .then(function (error) {
          sessionStorage.clear()
          navigate(`/${params}`);
          console.log('success')
        })
        .catch(function (error) {
          console.log()
        })


    }
    fetchData()
    e.preventDefault();
  };

  useEffect(() => {
    const fetchData2 = async () => {
      const response = await axios.get(`https://j9c206.p.ssafy.io/api/account/balance?accountNum=${account}`)
      setBalance(response.data.balance)
    }
    fetchData2()
    if (type === "deposit") {
      setCash(parseInt(depositCash));
      setAfterBalance(parseInt(depositCash))
      console.log()
    } else {
      setCash(parseInt(withdrawCash));
      setAfterBalance(parseInt(withdrawCash) * -1)
    }
  }, [])


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
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                src="./public/정리2.png"
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
                  명세표 출력 선택
                </h1>
                <div
                  style={{ borderBottom: "2px solid #FFFFFF", width: "400px" }}
                ></div>
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
                      width: "700px",
                      fontSize: "35px",
                      color: "#3C3C3C",
                      fontWeight: "800",
                      letterSpacing: "6px",
                      textShadow: "14px 16px 16px rgba(0, 0, 0, 0.30)",
                      textAlign: "center",
                      marginTop: "30px",
                    }}
                  >
                    <div>요청하신 거래가 완료 되었습니다.</div>
                    <div style={{ height: "100px", background: "#D9D9D9", marginTop: "40px", display: "flex", flexDirection: "column", justifyContent: "center", }}>
                      <div>
                        <span>거래금액 :</span>
                        <span style={{ color: "#348AB8" }}>*{Cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                        <span>원</span>
                      </div>
                    </div>
                    <div style={{ height: "30px", marginTop: "40px", display: "flex", flexDirection: "column", justifyContent: "center", }}>
                      <div>
                        <span>거래 후 잔액 :</span>
                        <span style={{ color: "#348AB8" }}>*{(balance + afterBalance).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                        <span>원</span>
                      </div>
                    </div>
                    <div style={{ height: "100px", background: "#D9D9D9", marginTop: "40px", display: "flex", flexDirection: "column", justifyContent: "center", }}>
                      <div>
                        <span>수수료 :</span>
                        <span style={{ color: "#348AB8" }}>*0</span>
                        <span>원</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* 키패드 */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  onClick={(e) => {
                    onMove("main", e);
                  }}
                  style={{
                    width: "500px",
                    height: "200px",
                    backgroundColor: "#9AC4B3",
                    color: "white",
                    borderRadius: "30px",
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
                    명세표 출력
                  </h1>
                </div>
                <div
                  onClick={(e) => {
                    onMove("main", e);
                  }}
                  style={{
                    width: "500px",
                    height: "200px",
                    backgroundColor: "#D5B18E",
                    color: "white",
                    borderRadius: "30px",
                    textAlign: "center",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    marginTop: "50px"
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
                    명세표 생략
                  </h1>
                </div>
              </div>
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
            <MainBtn />
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
export default Receipt;
