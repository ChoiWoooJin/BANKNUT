import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MainBtn from "../components/MainBtn";
import BackBtn from "../components/BackBtn";
import axios from 'axios'

const PASSWORD_MAX_LENGTH = 4;
// 셔플함수
const shuffle = (nums) => {
  let num_length = nums.length;
  while (num_length) {
    let random_index = Math.floor(num_length-- * Math.random());
    let temp = nums[random_index];
    nums[random_index] = nums[num_length];
    nums[num_length] = temp;
  }
  return nums;
}

function Password() {
  const navigate = useNavigate();
  const type = sessionStorage.getItem('type');
  const possible = sessionStorage.getItem('possible')
  console.log(possible)
  const onMove = (params, e) => {
    console.log(params);

    navigate(`/${params}`);
    e.preventDefault();
  };

  // 비번 셔플
  let nums_init = Array.from({ length: 12 }, (v, k) => k)
  const [nums, setNums] = useState(nums_init)
  const [password, setPassword] = useState("")

  const handlePasswordChange = useCallback(
    (num) => {
      if (password.length === PASSWORD_MAX_LENGTH) {
        return
      }
      setPassword(password + num.toString())
    },
    [password],
  )

  const erasePasswordOne = useCallback(
    (e) => {
      setPassword(password.slice(0, password.length === 0 ? 0 : password.length - 1))
    },
    [password],
  )

  const erasePasswordAll = useCallback((e) => {
    setPassword("")
  }, [])

  const shuffleNums = useCallback(() => {
    let nums_random = Array.from({ length: 12 }, (v, k) => k)
    setNums(shuffle(nums_random))
  }, [])

  const clickNums = useCallback(
    (num) => (e) => {
      handlePasswordChange(num)
    },
    [handlePasswordChange],
  )

  const account = sessionStorage.getItem('account');
  const onClickSubmitButton = (e) => {
    if (password.length !== 4) {
      alert("비밀번호를 입력 후 눌러주세요.")
    } else {
      if (type === 'register') {
        navigate('/main')
      } else if (type === 'clear') {
        navigate('/clear-check')
      } else {
        const fetchData = async () => {
          axios.post('https://j9c206.p.ssafy.io/api/account/login', JSON.stringify(
            {
              "accountNum": account,
              "password": password
            }), { headers: { "Content-Type": 'application/json' } })
            .then(function (response) {
              sessionStorage.setItem('password', password);
              navigate(`/amount-${type}`)
            })
            .catch(function (error) {
              alert('비밀번호가 틀렸습니다.')
              sessionStorage.clear();
              navigate('/main')
            })
          }
          fetchData()
      }
      
    }
  }

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
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <div style={{ display: "flex" }}>
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
                    비밀번호를 입력해 주세요.
                  </h1>
                  <div
                    style={{ borderBottom: "2px solid #FFFFFF", width: "650px" }}
                  ></div>
                </div>
              </div>
              <div style={{ marginRight: "130px" }}>
                <div
                  onClick={onClickSubmitButton}
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
                      fontSize: "50px",
                      color: "#3C3C3C",
                      fontWeight: "800",
                      letterSpacing: "6px",
                      textShadow: "14px 16px 16px rgba(0, 0, 0, 0.30)",
                      textAlign: "center",
                      marginTop: "20px",
                    }}
                  >
                    비밀번호를 눌러 주세요.
                  </div>
                  <div
                    style={{
                      width: "680px",
                      height: "100px",
                      fontSize: "36px",
                      color: "#3C3C3C",
                      fontWeight: "800",
                      letterSpacing: "6px",
                      textAlign: "center",
                      textShadow: "10px 10px 16px rgba(0, 0, 0, 0.30)",
                      margin: "0 auto",
                      marginTop: "40px",
                    }}
                  >
                    <span style={{ color: "#F00" }}>
                      (비밀번호가 타인에게 노출되지 않도록 각별히 주의하여
                      주십시오.)
                    </span>
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
                  <span
                    style={{
                      textShadow: "14px 8px 16px rgba(0, 0, 0, 0.30)",
                      fontSize: "50px",
                      color: "rgba(0, 0, 0, 0.76)",
                      fontWeight: "800",
                    }}>
                    비밀번호:
                  </span>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    style={{
                      marginLeft: "30px",
                      backgroundColor: 'inherit',
                      fontSize: "100px",
                      color: "rgba(0, 0, 0, 0.76)",
                      fontWeight: "800",
                      textAlign: 'center',
                      width: "200px",
                      outline: "none",
                      border: "none"
                    }} />
                </div>
              </div>

              {/* 키패드 */}
              <div style={{ display: "flex", flexWrap: "wrap", width: "600px" }}>
                {nums.map((n, i) => {
                  const Basic_button = (
                    n < 10 ?
                      (
                        <div
                          value={n}
                          onClick={clickNums(n)}
                          key={n}
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
                          >
                            {n}
                          </div>
                        </div>
                      ) : (
                        <div
                          value={n}
                          onClick={clickNums(n)}
                          key={n}
                          style={{
                            width: "110px",
                            height: "110px",
                            background: "rgba(3, 121, 217, 0.30)",
                            borderRadius: "15px",
                            margin: "10px",
                          }}
                        >
                          <img
                            src="./public/nut.png"
                            style={{ width: "110px", height: "110px" }}
                          />
                        </div>
                      )
                  )
                  return (
                    <React.Fragment key={i}>
                      {Basic_button}

                    </React.Fragment>
                  )
                })}
                {/* 키패드 마지막줄 */}
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    style={{
                      width: "240px",
                      height: "110px",
                      background: "rgba(196, 224, 155, 0.50)",
                      borderRadius: "15px",
                      margin: "10px",
                    }}
                    onClick={shuffleNums}
                  >
                    <div
                      style={{
                        width: "240px",
                        height: "110px",
                        color: "#FFF",
                        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        fontSize: "80px",
                        fontWeight: "400",
                        textAlign: "center",
                      }}
                    >
                      재배열
                    </div>
                  </div>
                  <div
                    style={{
                      width: "110px",
                      height: "110px",
                      background: "rgba(224, 134, 141, 0.90)",
                      borderRadius: "15px",
                      margin: "10px",
                    }}
                    onClick={erasePasswordOne}
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
                      background: "rgba(224, 178, 134, 0.90)",
                      borderRadius: "15px",
                      margin: "10px",
                    }}
                    onClick={erasePasswordAll}
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
                      정정
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
            <MainBtn />
            <BackBtn />
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
export default Password;