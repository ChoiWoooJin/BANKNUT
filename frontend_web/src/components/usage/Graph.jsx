import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {useEffect, useState} from 'react'
import axios from 'axios'
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);


function Graph(props) {
    
    const [labels, setLabels] = useState([])
    const [val_lst , setValLst] = useState([])
    const [inputDate, setInputDate] = useState('')
    const today = new Date()
    const TodayDate = today.toISOString().slice(0,10)
    const [requestDate, setRequestDate] = useState(TodayDate)
    const time = props.time
    const ATMnum = props.ATMnum
    

    const changeDate = event => {
        setInputDate(event.target.value)
    }
    const changeRequestDate = (param) => {
        if (param.length === 7) {
            setRequestDate(param + '-01')
        } else if (param.length === 4) {
            setRequestDate(param + '-01-01')
        } else if (param.length === 10) {
            setRequestDate(param)
        }
    }



    useEffect(() => {
        const fetchData = async() => {
            const response = await axios.get(`/api/atm/usage?atmNum=${ATMnum}&selectDate=${time}&referenceDate=${requestDate}`)
            setValLst(response.data.usageData)
            
        }
        fetchData()

        const timeLabels = ['0시', '1시', '2시', '3시', '4시', '5시', '6시', '7시', '8시', '9시', '10시', '11시', '12시', '13시', '14시', '15시', '16시', '17시', '18시', '19시', '20시', '21시', '22시', '23시']
        const dateLabels = ['1일', '2일', '3일', '4일', '5일', '6일', '7일', '8일', '9일', '10일', '11일', '12일', '13일', '14일', '15일', '16일', '17일', '18일', '19일', '20일', '21일', '22일', '23일', '24일', '25일', '26일', '27일', '28일', '29일', '30일', '31일']
        const monthLabels = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
        if (time === 'time') {
            setLabels(timeLabels)
        } else if ( time === 'date'){
            setLabels(dateLabels)
        } else if (time === 'month'){
            setLabels(monthLabels)
        }

    }, [time, ATMnum, requestDate]) 
    
    let data = {
        labels : labels,
        datasets : [
            {
                label: '사용량',
                borderColor: '#4385F5',
                backgroundColor : "#4385F5",
                data: val_lst,
                borderWidth : 1
              },
        ]
    }
    const options = {}
    return (
        <div style={{width : "100%", height : "100%", display : "flex", justifyContent : "space-evenly", alignItems : "center", flexFlow : "column"}}>


            <div style={{ width:"100%", textAlign : "left", paddingLeft : "130px"}}>
                <div style={{fontSize : "30px", color : "#4385F5", fontWeight : "bold"}}>ATM번호 : {ATMnum}</div>
                <div>{requestDate}</div>
                <div className="flex">
                    <div>{time === 'time'
                        ? <div>
                            <input onChange={changeDate} type="date"/>
                        </div>
                        :  <div>{time === 'date'
                            ? <div>
                                <input onChange={changeDate} type="month"/>
                            </div>
                            : <div>
                                <input onChange={changeDate} type="number" min="1900" max="2099" step="1"/>
                            </div>
                        }</div>

                        }</div>
                        <button onClick={() => changeRequestDate(inputDate)}>검색</button>
                </div>
                
            </div>
            <div style={{width : "900px", height : "450px"}}>
                <Bar data = {data} options = {options} />
            </div>
            

        </div>
    );
  } export default Graph
  