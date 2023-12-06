import React from "react";

function Keypad(props) {

  const inputNum = (param) => {
    if (props.inputVal * 10 + param <= props.limitVal) {
      props.setInput(props.inputVal * 10 + param)
    } else{
      alert('입력할 수 있는 값을 넘었습니다.')
    }
    
    
  }
  const clearEntry = () => {
    props.setInput(parseInt(props.inputVal / 10))
  }
  const AllClear = () => {
    props.setInput(0)
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              width: "110px",
              height: "110px",
              background: "rgba(3, 121, 217, 0.30)",
              borderRadius: "15px",
              margin: "10px",
            }}
            onClick={() => {inputNum(1)}}
          >
            <div
              style={{
                width: "110px",
                height: "110px",
                color: "#FFF",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                fontSize: "80px",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              1
            </div>
          </div>
          <div
            style={{
              width: "110px",
              height: "110px",
              background: "rgba(3, 121, 217, 0.30)",
              borderRadius: "15px",
              margin: "10px",
            }}
            onClick={() => {inputNum(2)}}
          >
            <div
              style={{
                width: "110px",
                height: "110px",
                color: "#FFF",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                fontSize: "80px",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              2
            </div>
          </div>
          <div
            style={{
              width: "110px",
              height: "110px",
              background: "rgba(3, 121, 217, 0.30)",
              borderRadius: "15px",
              margin: "10px",
            }}
            onClick={() => {inputNum(3)}}
          >
            <div
              style={{
                width: "110px",
                height: "110px",
                color: "#FFF",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                fontSize: "80px",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              3
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              width: "110px",
              height: "110px",
              background: "rgba(3, 121, 217, 0.30)",
              borderRadius: "15px",
              margin: "10px",
            }}
            onClick={() => {inputNum(4)}}
          >
            <div
              style={{
                width: "110px",
                height: "110px",
                color: "#FFF",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                fontSize: "80px",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              4
            </div>
          </div>
          <div
            style={{
              width: "110px",
              height: "110px",
              background: "rgba(3, 121, 217, 0.30)",
              borderRadius: "15px",
              margin: "10px",
            }}
            onClick={() => {inputNum(5)}}
          >
            <div
              style={{
                width: "110px",
                height: "110px",
                color: "#FFF",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                fontSize: "80px",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              5
            </div>
          </div>
          <div
            style={{
              width: "110px",
              height: "110px",
              background: "rgba(3, 121, 217, 0.30)",
              borderRadius: "15px",
              margin: "10px",
            }}
            onClick={() => {inputNum(6)}}
          >
            <div
              style={{
                width: "110px",
                height: "110px",
                color: "#FFF",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                fontSize: "80px",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              6
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              width: "110px",
              height: "110px",
              background: "rgba(3, 121, 217, 0.30)",
              borderRadius: "15px",
              margin: "10px",
            }}
            onClick={() => {inputNum(7)}}
          >
            <div
              style={{
                width: "110px",
                height: "110px",
                color: "#FFF",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                fontSize: "80px",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              7
            </div>
          </div>
          <div
            style={{
              width: "110px",
              height: "110px",
              background: "rgba(3, 121, 217, 0.30)",
              borderRadius: "15px",
              margin: "10px",
            }}
            onClick={() => {inputNum(8)}}
          >
            <div
              style={{
                width: "110px",
                height: "110px",
                color: "#FFF",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                fontSize: "80px",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              8
            </div>
          </div>
          <div
            style={{
              width: "110px",
              height: "110px",
              background: "rgba(3, 121, 217, 0.30)",
              borderRadius: "15px",
              margin: "10px",
            }}
            onClick={() => {inputNum(9)}}
          >
            <div
              style={{
                width: "110px",
                height: "110px",
                color: "#FFF",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                fontSize: "80px",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              9
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              width: "110px",
              height: "110px",
              background: "rgba(224, 134, 141, 0.90)",
              borderRadius: "15px",
              margin: "10px",
            }}
            onClick={clearEntry}
          >
            <div
              style={{
                width: "110px",
                height: "110px",
                color: "#FFF",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                fontSize: "50px",
                fontWeight: "400",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              지움
            </div>
          </div>
          <div
            style={{
              width: "110px",
              height: "110px",
              background: "rgba(3, 121, 217, 0.30)",
              borderRadius: "15px",
              margin: "10px",
            }}
          >
            <div
              style={{
                width: "110px",
                height: "110px",
                color: "#FFF",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                fontSize: "80px",
                fontWeight: "400",
                textAlign: "center",
              }}
              onClick={() => {inputNum(0)}}
            >
              0
            </div>
          </div>
          <div
            style={{
              width: "110px",
              height: "110px",
              background: "rgba(224, 178, 134, 0.90)",
              borderRadius: "15px",
              margin: "10px",
            }}
          >
            <div
              style={{
                width: "110px",
                height: "110px",
                color: "#FFF",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                fontSize: "50px",
                fontWeight: "400",
                textAlign: "center",
                marginTop: "20px",
              }}
              onClick={AllClear}
            >
              정정
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Keypad;
