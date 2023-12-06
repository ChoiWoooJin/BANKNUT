import './History.css'
import Pagination from '../main/Pagination';
import { useEffect, useState } from 'react'
import axios from 'axios'

function History() {
    const [totalpage, setTotalpage] = useState(1)
    const [nowpage, setNowpage] = useState(0)
    const [atmNum, setAtmNum] = useState(1)
    const [transactionType, setTransactionType] = useState('전체')
    const [DATA, setDATA] = useState([])

    const changeATM = (param) => {
        setAtmNum(param)
    }
    const changeTrans = (param) => {
        setTransactionType(param)
    }
    useEffect(() => {
        const fetchData = async() => {
            let response = null
            if (transactionType === '전체') {
                response = await axios.get(`/api/atm/all-transactions?atmId=${atmNum}&page=${nowpage}`)
            } else {
                response = await axios.get(`/api/atm/all-transactions/type?atmId=${atmNum}&type=${transactionType}&page=${nowpage}`)
            }
            console.log(response)
            setDATA(response.data.content)
            setTotalpage(response.data.totalPages)
        }
        fetchData()
    }, [atmNum, transactionType, nowpage])

    return (
        <div className="full_style flex_mid flex-col">
             <div style={{width : "1000px", display: "flex", alignItems : "center"}}>
                <button onClick={() => changeATM(1)} className="atm-btn"><h2 style={{color : "white"}}>ATM1</h2></button>
                <button onClick={() => changeATM(2)} className="atm-btn"><h2 style={{color : "white"}}>ATM2</h2></button>
                <button onClick={() => changeATM(3)} className="atm-btn"><h2 style={{color : "white"}}>ATM3</h2></button>
                
            </div>
            <div style={{width : "1000px", height : "700px", textAlign : "center"}}>
        
                <div className="full_style flex_mid shadow flex-col" style={{backgroundColor : "white", borderRadius : "20px", justifyContent : "left"}}>
                    <div style={{width : "900px", display : "flex", alignItems : "center", justifyContent : "left", marginTop : "25px", marginBottom:"25px"}}>
                        <button onClick={() => changeTrans('이체')} className="fs-20 trans-btn" style={{color : "red", fontWeight : "bold"}}>이체</button>
                        <button onClick={() => changeTrans('입금')} className="fs-20 trans-btn" style={{color : "green", fontWeight : "bold"}}>입금</button>
                        <button onClick={() => changeTrans('출금')} className="fs-20 trans-btn" style={{color : "violet", fontWeight : "bold"}}>출금</button>
                        <button onClick={() => changeTrans('전체')} className="fs-20 trans-btn" style={{fontWeight : "bold"}}>전체</button>
                    </div>

                    <table style={{width : "900px", borderCollapse: "collapse", textAlign : "center"}}>
                        <thead>
                            <tr>
                            <th className="th_200">No</th>
                            <th className="th_200">이름</th>
                            <th className="th_400">계좌 번호</th>
                            <th className="th_400">일자</th>
                            <th className="th_200">구분</th>
                            <th className="th_200">금액</th>
                            </tr>
                        </thead>
                        <tbody> 
                            {DATA.map((dummy)=>(
                                <tr key={dummy.transactionId}>
                                    <td style={{paddingTop : "5px", height : "17px"}}>{dummy.transactionId}</td>
                                    <td>{dummy.name}</td>
                                    <td>{dummy.accountNumber.toString().replace(/\B(?=(\d{4})+(?!\d))/g, '-')}</td>
                                    <td>{dummy.transactionDate.slice(0,10) + " " +dummy.transactionDate.slice(11,19)}</td>
                                    <td style={{fontWeight : "bold"}}>{dummy.transactionType === '입금'
                                    ? <div style={{color : "green", fontWeight : "bold"}}>{dummy.transactionType}</div>
                                    : (<div> {dummy.transactionType ==='출금'
                                        ? <div style={{color : "violet", fontWeight : "bold"}}>{dummy.transactionType}</div>
                                        : <div style={{color : "red", fontWeight : "bold"}}>{dummy.transactionType}</div>
                                        }

                                    </div>)
                                        }

                                    </td>
                                    <td>{dummy.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
            </div>
            <Pagination setNowpage={setNowpage} totalpage={totalpage} nowpage={nowpage}/>
        </div>
    );
  } export default History;
  