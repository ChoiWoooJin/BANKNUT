import './Login.css'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
function Login() {
    sessionStorage.setItem('admin' , false)
    const navigate = useNavigate()
    const [adminID, setAdminID] = useState('')
    const [adminPassword, setAdimnPassword] = useState('')
    const changeID = (e) => {
        setAdminID(e.target.value)
    }
    const changePassword = (e) => {
        setAdimnPassword(e.target.value)
    }
    
    const onLogin = () => {
        const fetchData = async() => {
            axios.post(`/api/admin/login`, JSON.stringify(
            {
                adminId: adminID,
                password: adminPassword
            }), { headers: { "Content-Type": 'application/json' } })
            .then(function(error){
                sessionStorage.setItem('admin' , true)
                navigate('/abnormal')
            })
            .catch(function(error){
                alert('아이디 혹은 비밀번호가 틀렸습니다.')
            })
        }
        fetchData()

        
    }
    const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
          onLogin(); // Enter 입력이 되면 클릭 이벤트 실행
        }
    };



    return (
      <div className="full_style flex_mid">
        <div style={{textAlign : "center", width : "400px", position : "relative"}}>
            <img alt="logo" src="./banknut_logo.png" style={{height : "250px", width : "250px", position : "relative", zIndex : "2", top : "-45px"}}/>
            <div className="flex_mid" style={{position : "absolute", top : "130px", backgroundColor : "#0B374A", width : "100%", height : "250px", borderRadius : "50px "}}>
                <div style={{fontSize : "25px", position : "absolute", zIndex : "4"}}>
                    <div className="flex_mid" style={{textAlign : "center", color : "white", justifyContent : "space-between"}}>
                        <div>
                            ID :
                        </div>
                        <div style={{marginLeft : "10px"}}>
                            <input onChange={changeID} type="text" style={{ width : "180px", height : "25px", textAlign : "right"}}/>
                        </div>
                    </div>
                    <div className="flex_mid" style={{textAlign : "center", color : "white", justifyContent : "space-between"}}>
                        <div >
                            Password :
                        </div>
                        
                        <div style={{marginLeft : "10px"}}>
                            <input onChange={changePassword} onKeyPress={handleOnKeyPress} type="password" style={{width : "180px", height : "25px", textAlign : "right"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{position : "relative", zIndex : "3", textAlign : "right", paddingRight : "50px", paddingTop : "50px"}}>
                <button onClick={onLogin} style={{backgroundColor : "#0B374A", border : "0px", color : "white", fontSize : "20px"}}>LOGIN</button>
            </div>
        </div>
      </div>
    );
  } export default Login;
  
  