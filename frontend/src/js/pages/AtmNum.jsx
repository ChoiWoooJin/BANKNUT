import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AtmNum() {

  const [atmNumber, setAtmNumber] = useState(null)
  const navigate = useNavigate()
  const InputATM = (e) => {
      console.log(e.target.value)
      localStorage.setItem('atmNum', e.target.value)
      setAtmNumber(e.target.value)
  }
  const onInput = () => {
    if (atmNumber === '1' || atmNumber === '2' || atmNumber === '3') {
        navigate('/main')
    } else {
        console.log("11")
    }
  }
  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      onInput(); // Enter 입력이 되면 클릭 이벤트 실행
    }
};

  return(
    <div style={{width : "100%", height : "100%", display : "flex", flexFlow : "column",justifyContent : "center", alignItems : "center"}}>
      <h1
        style={{
          margin: "0px",
          textAlign: "center",
          textShadow: "14px 8px 16px rgba(0, 0, 0, 0.30)",
          fontSize: "80px",
          color: "rgba(0, 0, 0, 0.76)",
          fontWeight: "800",
          marginTop: "100px",
        }}
      >ATM 번호입력</h1>
      <input type="text" onChange={InputATM} onKeyPress={handleOnKeyPress}
        style={{
          marginLeft: "30px",
          backgroundColor: 'inherit',
          fontSize: "100px",
          color: "white",
          fontWeight: "800",
          textAlign: 'center',
          width: "400px",
          outline: "none",
          border: "3px solid rgba(0, 0, 0, 0.76)",
          borderRadius: "20px",
          marginTop: "100px"
        }}
      />
      <button 
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
          marginTop: "100px",
        }}
        onClick={onInput}>
          <h1
            style={{
              margin: "0 auto",
              textShadow: "14px 16px 16px rgba(0, 0, 0, 0.30)",
              fontSize: "80px",
              fontWeight: "800",
              letterSpacing: "5px",
            }}
          >
            입력
          </h1>
        </button>
      </div>
  )
} export default AtmNum