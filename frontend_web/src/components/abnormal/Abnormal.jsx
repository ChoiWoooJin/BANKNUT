import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Pagination from '../main/Pagination'
import './Abnormal.css'

function Abnormal() {

    const [DATA, setDATA] = useState([])
    const [nowpage, setNowpage] = useState(0)
    const [totalpage, setTotalpage] = useState(1)
    const navigate = useNavigate()
    const moveMenu = (e, param) => {
        navigate(`/abnormal/${param}`)
    }
    const dateChange = (param) => {
        return param.slice(0,10) + ' ' + param.slice(11,13) + ':' + param.slice(14,16) + ':' + param.slice(17,19)
    }
    
    const [todaycnt, setTodayCnt] = useState(0)
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/api/suspicious/list?page=${nowpage}`)
            console.log(response)
            setDATA(response.data.list)
            setTotalpage(response.data.totalPage)
            const Today = new Date()
            const TodayDate = Today.toISOString()
            let cnt = 0
            for (let i = 0; i < response.data.list.length; i++) {
                if (response.data.list[i].date.slice(0,10) === TodayDate.slice(0,10)) {
                    cnt += 1
                }
            }
            setTodayCnt(cnt)
        }
        fetchData();
    }, [nowpage]);
    const Today = new Date()
    const TodayDate = Today.toISOString()
    const vsDate = (param) => {
        
        if (TodayDate.slice(0,10) === param.slice(0,10)) {
            return true
        } else {
            return false
        }
    }
    return (
        <div className="flex_mid full_style" style={{flexFlow : "column"}}>
            <div className="flex" style={{width : "1000px", alignItems : "center"}}>
                <img alt="caution" src="caution.png" style={{width : "60px", height : "50px"}}></img>
                <h2 style={{color : "white"}}>오늘의 이상행동 : {todaycnt}건</h2>
            </div>
            <div style={{width : "1000px", height : "700px", textAlign : "center"}}>
                <div className="full_style flex_mid shadow flex-col" style={{backgroundColor : "white", borderRadius : "20px", justifyContent : "left"}}>
                    <div className="flex_mid" style={{width : "900px", justifyContent : "left", marginTop : "25px", marginBottom:"25px"}}>
                        <div style={{fontSize : "20px", fontWeight : "bold"}}>현재 페이지 : {nowpage + 1}</div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                            <th className="th_200">No.</th>
                            <th className="th_400">일자</th>
                            <th className="th_400">상태</th>
                            <th className="th_200">ATM 번호</th>
                            </tr>
                        </thead>
                        <tbody > 
                            {DATA.map((dummy)=>(
                                <tr key={dummy.suspiciousId} onClick={e => {moveMenu(e, dummy.suspiciousId)}} >
                                    <td className="flex_mid" style={{paddingTop : "5px", height : "17px", position : "relative"}}>{vsDate(dummy.date)
                                    ? <div style={{position : "absolute", color : "red", left : "10px", fontWeight : "bold"}}>new</div>
                                    : null
                                    }{dummy.suspiciousId}</td>
                                    <td >{dateChange(dummy.date)}</td>
                                    <td >{dummy.description === '보이스피싱의심'
                                    ? <div style={{color : "red", fontWeight : "bold"}}>{dummy.description}</div>
                                    : <div style={{color : "green", fontWeight : "bold"}}>{dummy.description}</div>   
                                    }
                                    </td>
                                    <td >{dummy.atm}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Pagination setNowpage={setNowpage} totalpage={totalpage} nowpage={nowpage}/>
        </div>
    );
  } export default Abnormal;