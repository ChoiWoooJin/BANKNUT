import SettleDetail from './SettleDetail'
import { useState } from 'react'

function Settlement() {

    const [balanceFirst, setBalanceFirst] = useState(0)
    const [balanceSecond, setBalanceSecond] = useState(0)
    const [balanceThird, setBalanceThird] = useState(0)
    return (
        <div className="full_style flex_mid">
            
            <div style={{width : "1000px", display : "flex", justifyContent : "space-between"}}>
                {/* ATM1 */}
                <div style={{width : "250px"}}>
                    <div className="flex" style={{justifyContent : "space-between"}}>
                        <h2 style={{color : "white"}}>
                            ATM1
                        </h2>
                        <div className="flex_mid" >{ (balanceFirst <= 10000000)
                        ? <div style={{color : "yellow", fontWeight : "bold"}}><h3>현금 부족</h3></div>
                        : <div></div>
                        }</div>
                    </div>
                    
                    <hr/>
                    <SettleDetail atmNum={1} setBalance={setBalanceFirst}/>
                </div>
                {/* ATM2 */}
                <div style={{width : "250px"}}>
                    <div className="flex" style={{justifyContent : "space-between"}}>
                        <h2 style={{color : "white"}}>
                            ATM2
                        </h2>
                        <div className="flex_mid" >{ (balanceSecond <= 10000000)
                            ? <div style={{color : "yellow", fontWeight : "bold"}}><h3>현금 부족</h3></div>
                            : <div></div>
                        }</div>
                    </div>
                    <hr/>
                    <SettleDetail atmNum={2} setBalance={setBalanceSecond}/>
                    
                </div>
                {/* ATM3 */}
                <div style={{width : "250px"}}>
                    <div className="flex" style={{justifyContent : "space-between"}}>
                        <h2 style={{color : "white"}}>
                            ATM3
                        </h2>
                        <div className="flex_mid" >{ (balanceThird <= 10000000)
                            ? <div style={{color : "yellow", fontWeight : "bold"}}><h3>현금 부족</h3></div>
                            : <div></div>
                        }</div>
                    </div>
                    <hr/>
                    <SettleDetail atmNum={3} setBalance={setBalanceThird}/>
                </div>
            </div>
        </div>
    );
  } export default Settlement;
  