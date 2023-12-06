import Graph from './Graph'
import './Usage.css'
import { useState } from 'react'

function Usage() {

    const [time, setTime] = useState('time')
    const [ATMnum, setATMnum] = useState(1)
    const changeTime = e => {
        setTime(e.target.value)        
    }
    const changeATMnum = e => {
        setATMnum(e.target.value)
    }

    return (
        <div style={{width : "100%", height : "100%", display : "flex", justifyContent : "center", alignItems : "center", flexFlow: "column"}}>
            <div style={{width : "1000px", display : "flex", justifyContent : "space-between", alignItems: "center", color : "white"}}>
                <div style={{display : "flex"}}>
                    <input style={{display : "none"}} onChange={changeATMnum} type="radio" name="ATMnum" value="1" id="ATM1" />
                    <label htmlFor="ATM1"><h2>|ATM1|</h2></label>
                    <input style={{display : "none"}} onChange={changeATMnum} type="radio" name="ATMnum" value="2" id="ATM2" />
                    <label htmlFor="ATM2"><h2>|ATM2|</h2></label>
                    <input style={{display : "none"}} onChange={changeATMnum} type="radio" name="ATMnum" value="3" id="ATM3" />
                    <label htmlFor="ATM3"><h2>|ATM3|</h2></label>
                </div>
                <div style={{display : "flex"}}>
                    <input style={{display : "none"}} onChange={changeTime} type="radio" name="Time" value="time" id="time" />
                    <label htmlFor="time"><h2>|시간대별|</h2></label>
                    <input style={{display : "none"}} onChange={changeTime} type="radio" name="Time" value="date" id="date" />
                    <label htmlFor="date"><h2>|일별|</h2></label>
                    <input style={{display : "none"}} onChange={changeTime} type="radio" name="Time" value="month" id="month" />
                    <label htmlFor="month"><h2>|월별|</h2> </label>
                </div>
            </div>
            <div style={{width : "1000px", height: "700px", backgroundColor : "white", borderRadius : "20px", textAlign : "center", boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.5)"}}>
                
                <Graph time={`${time}`} ATMnum={`${ATMnum}`}/>
            </div>
            <div className="pagination movebtn" style={{color : "white", visibility : "hidden"}}>{time}</div>

        </div>
    );
  } export default Usage;
  