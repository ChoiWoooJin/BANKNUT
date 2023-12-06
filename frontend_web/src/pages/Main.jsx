import './Main.css'

import Navbar from '../components/main/Navbar'
import Abnormal from '../components/abnormal/Abnormal'
import AbnormalDetail from '../components/abnormal/AbnormalDetail'
import History from '../components/history/History'
import Settlement from '../components/settlement/Settlement'
import Usage from '../components/usage/Usage'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
function Main(props) {

    const adminBoolen = sessionStorage.getItem('admin')
    const navigate = useNavigate()

    useEffect(() => {
      if (adminBoolen === "false") {
        alert('로그인 해주세요')
        navigate('/')
      }
    }, [adminBoolen , navigate])
    
  let content = null
  const page = props.page
  if (page === 'abnormal') {
    content = <Abnormal/>  
  } else if (page === 'detail') {
    content = <AbnormalDetail/>
  } else if (page === 'history') {
    content = <History/>
  } else if (page === 'settlement') {
    content = <Settlement/>
  } else if (page === 'usage') {
    content = <Usage/>
  }

  return (
    <div className="full_style flex">
        <Navbar/>
        <div className="full_style">
          {content}
        </div>
    </div>
  );
} export default Main;

