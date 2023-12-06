import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
} from "react-router-dom";

import "../styles/index.css";

import AtmNum from './pages/AtmNum'
import Main from "./pages/Main";
import Clear from "./pages/clear/Clear";
import Deposit from "./pages/deposit/Deposit";
import Transfer from "./pages/transfer/Transfer";
import Withdraw from "./pages/withdraw/Withdraw";
import Register from "./pages/Register";
import Insert from "./pages/Insert";
import Insert2 from "./pages/Insert2";
import Recognition from "./pages/Recognition";
import Recognition2 from "./pages/Recognition2";
import Password from "./pages/Password";
import Photo from "./pages/Photo";
import Photo2 from "./pages/Photo2";
import Account from "./pages/Account";
import AccountInput from "./pages/AccountInput";
import AccountReceive from "./pages/transfer/AccountReceive";
import AmountDeposit from "./pages/deposit/AmountDeposit";
import AmountWithdraw from "./pages/withdraw/AmountWithdraw";
import AmountTransfer from "./pages/transfer/AmountTransfer";
import Amount5 from "./pages/withdraw/Amount5";
import Receipt from "./pages/Receipt";
import Transfer2 from "./pages/transfer/Transfer2";
import Zoom from "./pages/Zoom";
import ClearCheck from "./pages/clear/ClearCheck";

// import FaceDetectionComponent from './pages/FaceDetectionComponent'
function App() {
  return (
    <Router>
      <Routes>
        {/* 기기번호 입력페이지 */}
        <Route path="/" exact element={<AtmNum />} />
        {/* 메인 페이지 */}
        <Route path="/main" element={<Main />} />
        {/* 입금 페이지 */}
        <Route path="/deposit" element={<Deposit />} />
        {/* 출금 페이지 */}
        <Route path="/withdraw" element={<Withdraw />} />
        {/* 이체 페이지 */}
        <Route path="/transfer" element={<Transfer />} />
        {/* 정리 페이지 */}
        <Route path="/clear" element={<Clear />} />
        {/* 등록 페이지 */}
        <Route path="/register" element={<Register />} />
        {/* 인식 페이지 */}
        <Route path="/recognition" element={<Recognition />} />

        <Route path="/recognition2" element={<Recognition2 />} />
        {/* 투입 페이지 */}
        <Route path="/insert" element={<Insert />} />
        {/* 투입 페이지2 */}
        <Route path="/insert2" element={<Insert2 />} />
        {/* 비밀번호 페이지 */}
        <Route path="/password" element={<Password />} />
        {/* 촬영 페이지 */}
        <Route path="/photo" element={<Photo />} />


        {/* 계좌인증 페이지 */}
        <Route path="/account" element={<Account />} />
        {/* 통장대신계좌입력페이지 */}
        <Route path="/account-input" element={<AccountInput />} />
        {/* 이체받을계좌입력페이지 */}
        <Route path="/account-receive" element={<AccountReceive />} />
        {/* 입금 금액 페이지 */}
        <Route path="/amount-deposit" element={<AmountDeposit />} />
        {/* 출금 금액 페이지 */}
        <Route path="/amount-withdraw" element={<AmountWithdraw />} />
        {/* 이체 금액 페이지 */}
        <Route path="/amount-transfer" element={<AmountTransfer />} />
        {/* 5만원권 페이지 */}
        <Route path="/amount5/:balance" element={<Amount5 />} />
        {/* 명세표 페이지 */}
        <Route path="/receipt" element={<Receipt />} />
        {/* 송금확인 페이지 */}
        <Route path="/transfer2" element={<Transfer2 />} />
        {/* 통장정리확인 페이지 */}
        <Route path="/clear-check" element={<ClearCheck />} />
        {/* 화면확대 페이지 */}
        <Route path="/zoom" element={<Zoom />} />
        {/* <Route path="/face-detection" element={<FaceDetectionComponent />}/> */}
      </Routes>
    </Router>
  );
}
export default App;
