import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function Transfer2() {
  const navigate = useNavigate();
  const atmNumber = localStorage.getItem('atmNum')
  const account = sessionStorage.getItem('account');
  const receive_account = sessionStorage.getItem('receive_account');
  const Cash = sessionStorage.getItem('transferCash');
  const password = sessionStorage.getItem('password');

  const [balance, setBalance] = useState(0)
  const [receiveName, setReceiveName] = useState('')
  const [sendName, setSendName] = useState('')

  const onMove = (params, e) => {
    const fetchData = async () => {
      axios.post(`https://j9c206.p.ssafy.io/api/transfer?atmId=${atmNumber}`, JSON.stringify(
        {
          amount: Cash,
          password: password,
          accountNumber: account,
          receiver: receive_account
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
      console.log(response.data.balance, '--')
      setSendName(response.data.userName)
    }
    const fetchData3 = async () => {
      const response = await axios.get(`https://j9c206.p.ssafy.io/api/account/balance?accountNum=${receive_account}`)
      setReceiveName(response.data.userName)
    }
    fetchData2()
    fetchData3()
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
                src="./public/이체1.png"
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
                  송금
                </h1>
                <div
                  style={{ borderBottom: "2px solid #FFFFFF", width: "100px" }}
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
                    width: "1200px",
                    height: "500px",
                    borderRadius: "15px",
                    borderTop: "32px solid #0F3F54",
                    background:
                      "radial-gradient(70% 70% at 50% 0%, #FFF 0%, #E4E4E4 100%)",
                    boxShadow: "10px 10px 4px 0px rgba(255, 255, 255, 0.50)",
                  }}
                >
                  <div
                    style={{
                      width: "1200px",
                      fontSize: "35px",
                      color: "#3C3C3C",
                      fontWeight: "800",
                      letterSpacing: "6px",
                      textShadow: "14px 16px 16px rgba(0, 0, 0, 0.30)",
                      textAlign: "center",
                      marginTop: "30px",
                    }}
                  >
                    <div>수취인 계좌번호와 내용을 확인하신 후</div>
                    <div>
                      <span>맞으면 </span>
                      <span style={{ color: "#175D8C" }}>[확인]</span>
                      <span>을 틀리면 </span>
                      <span style={{ color: "#FF0007" }}>[취소]</span>
                      <span>를 눌러 주십시오.</span>
                    </div>
                    <div style={{ borderRadius: "30px", border: "3px solid #000", width: "1000px", height: "350px", margin: "0 auto", marginTop: "10px" }}>
                      <div>
                        <span>입금은행 : </span>
                        <span style={{ color: "#348AB8" }}>뱅크넛</span>
                      </div>
                      <div>
                        <span>계좌번호 : </span>
                        <span style={{ color: "#348AB8" }}>{receive_account.toString().replace(/\B(?=(\d{4})+(?!\d))/g, '-')}</span>
                      </div>
                      <div>
                        <span>받으시는 분 : </span>
                        <span style={{ color: "#348AB8" }}>{receiveName}</span>
                      </div>
                      <div>
                        <span>거래금액 : </span>
                        <span style={{ color: "#348AB8" }}>*{Cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                        <span>원</span>
                      </div>
                      <div>
                        <span>거래 후 잔액 : </span>
                        <span style={{ color: "#348AB8" }}>*{(balance - parseInt(Cash)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                        <span>원</span>
                      </div>
                      <div>
                        <span>수수료 : </span>
                        <span style={{ color: "#348AB8" }}>*0</span>
                        <span>원</span>
                      </div>
                      <div>
                        <span>의뢰인 : </span>
                        <span style={{ color: "#348AB8" }}>{sendName}</span>
                      </div>
                    </div>
                  </div>
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
            <div
              onClick={(e) => {
                onMove("main", e);
              }}
              style={{
                width: "370px",
                height: "110px",
                backgroundColor: "#E0868D",
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
                취소
              </h1>
            </div>
            <div
              onClick={(e) => {
                onMove("main", e);
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
                확인
              </h1>
            </div>
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
export default Transfer2;
