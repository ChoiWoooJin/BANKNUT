import './Navbar.css'

import {useNavigate} from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate()

    const moveMenu = (e, param) => {
        navigate(`/${param}`)
    }

    return (
      <div style={{width : "300px", backgroundColor : "white", textAlign : "center", paddingTop : "25px"}}>
          <img alt="logo" src="../banknut_logo.png" style={{width : "150px", height : "150px"}}/>
          <div>
            <div>
                <button onClick={e => moveMenu(e, "abnormal")} className="nav-btn">이상행동</button>
            </div>
            <div>
                <button onClick={e => moveMenu(e, "history")} className="nav-btn">입출금 내역</button>
            </div>
            <div>
                <button onClick={e => moveMenu(e, "usage")} className="nav-btn">사용 통계</button>
            </div>
            <div>
                <button onClick={e => moveMenu(e, "settlement")} className="nav-btn">정산 통계</button>
            </div>
          </div>
      </div>
    );
  } export default Navbar;
  