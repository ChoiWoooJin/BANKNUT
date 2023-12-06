import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from 'react'
import axios from 'axios'
import './Settlement.css'
ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

function Settlement(props) {

    const labels = ['입금', '출금']
    const [val_lst, setValLst] = useState([0, 0])
    const [Data, setData] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`api/atm/balance-details?atmId=${props.atmNum}`)
            setData(response.data)
            setValLst([response.data.totalDepositAmount, response.data.totalWithdrawalAmount])
            props.setBalance(response.data.atmCurrentBalance)
        }
        fetchData()
    }, [props])


    let data = {
        labels : labels,
        datasets : [
            {
                label: '사용량',
                borderColor: ['#38B6FF','#004AAD'],
                backgroundColor : ["#38B6FF",'#004AAD'],
                data: val_lst,
                borderWidth : 1
              },
        ]
    }
    const options = {}

    return (
        <div>
            <div style={{paddingTop : "10px"}}>
                <h3 style={{color : "white"}}>잔액조회</h3>
                <div className="shadow box-border" style={{backgroundColor : "white"}}>
                    <div style={{paddingBottom : "10px", display : "flex", justifyContent : "space-between"}}>
                        <span className="fs-b-15">총 입금액</span>
                        <span className="fs-b-15" style={{color : "blue"}}>{Data.totalDepositAmount}</span>
                    </div>
                    <div style={{paddingBottom : "10px", display : "flex", justifyContent : "space-between"}}>
                        <span className="fs-b-15">총 출금액</span>
                        <span className="fs-b-15" style={{color : "red"}}>{Data.totalWithdrawalAmount}</span>
                    </div>
                    <hr/>
                    <div style={{paddingTop : "10px", display : "flex", justifyContent : "space-between"}}>
                        <span className="fs-b-15">잔액</span>
                        <span className="fs-b-15">{Data.atmCurrentBalance}</span>
                    </div>
                </div>
            </div>
            <div style={{paddingTop : "10px"}}>
                <h3 style={{color : "white"}}>차트</h3>
                <div className="box-border shadow flex_mid" style={{backgroundColor : "white"}} >
                    <Doughnut data = {data} options = {options} />
                </div>
            </div>
        </div>
    );
  } export default Settlement;