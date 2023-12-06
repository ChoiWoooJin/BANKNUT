import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        {/* 이상행동 */}
        <Route path="/abnormal" element={<Main page={'abnormal'}/>}/>
        {/* 이상행동 디테일 */}
        <Route path="/abnormal/:id" element={<Main page={'detail'}/>}/>
        {/* 입출금내역 */}
        <Route path="/history" element={<Main page={'history'}/>}/>
        {/* 방문 통계 */}
        <Route path="/usage" element={<Main page={'usage'}/>}/>
        {/* 정산 통계  */}
        <Route path="/settlement" element={<Main page={'settlement'}/>}/>
      </Routes>
    </Router>
  );
} export default App;