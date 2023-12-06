import React, { useEffect, useState } from "react";
import axios from 'axios'
import MainBtn from "../../components/MainBtn";
import BookFlip from "./BookFlip";

function ClearCheck() {
  
  const account = sessionStorage.getItem('account')
  const [accountData, setAccountData] = useState([])
  const [accountLen, setAccountLen] = useState(0)
  useEffect(() => {
    
    const fetchData = async () => {
      const response = await axios.get(`https://j9c206.p.ssafy.io/api/transactions/summary?accountNum=${account}`)
      setAccountLen(response.data.length)
      setAccountData(response.data.reverse())
    }
    fetchData()
    
  }, []);
  console.log(accountLen)
  console.log(accountData)
  


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
                src="./public/정리2.png"
                style={{ width: "200px", height: "200px" }}
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
                  통장 정리 확인 페이지
                </h1>
                <div
                  style={{ borderBottom: "2px solid #FFFFFF", width: "600px" }}
                ></div>
              </div>
            </div>
                  {/* 여기 */}
            <div>
            <table style={{width : "900px", borderCollapse: "collapse", textAlign : "center"}}>
                        <thead>
                            <tr>
                            <th className="th_200">No</th>
                            <th className="th_200">이름</th>
                            <th className="th_400">계좌 번호</th>
                            <th className="th_400">일자</th>
                            <th className="th_200">구분</th>
                            </tr>
                        </thead>
                        <tbody> 
                            {accountData.map((dummy)=>(
                                <tr key={dummy.date}>
                                    <td style={{paddingTop : "5px", height : "17px"}}>{dummy.date}</td>
                                    <td>{dummy.sender}</td>
                                    <td>{dummy.receipient}</td>
                                    <td>{dummy.transactionAmount}</td>
                                    <td style={{fontWeight : "bold"}}>{dummy.balance}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
        </div>
        <img
          src="./public/banknut_logo.png"
          style={{ width: "110px", height: "110px" }}
        ></img>
      </div>
    </>
  );
}
export default ClearCheck;
