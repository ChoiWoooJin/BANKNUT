import './Navbar.css'


function Pagination(props) {
    const nowpage = props.nowpage
    const firstpage = parseInt( props.nowpage / 10 ) * 10
    const changePage = (e, param) => {
        props.setNowpage(param)
    }
    const rendering = () => {
        const result = [];
        if ( firstpage + 10 > props.totalpage ){
            for (let i = firstpage; i < props.totalpage; i++) {
                result.push(<button className="pagination" key={i} onClick={e => changePage(e, i)}>{i + 1}</button>);
              }
        } else {
            for (let i = firstpage; i < firstpage + 10; i++) {
                result.push(<button className="pagination" key={i} onClick={e => changePage(e, i)}>{i + 1}</button>);
              }
        }
        return result;
      };
    const moveOnePage = (idx, param) => {    
        if (param > 0 && idx === -1) {
            props.setNowpage(nowpage + idx)
        }
        if (param < props.totalpage - 1 && idx === 1) {
            props.setNowpage(param + idx)
        }
    }
    const moveTenPage = (idx, param) => {
        if (param > 9 && idx === -1) {
            props.setNowpage(parseInt( (nowpage + 10 * idx) / 10 ) * 10 + 9)
        }
        if (param < (parseInt(props.totalpage / 10) * 10) - 10 && idx === 1) {
            props.setNowpage(parseInt( (nowpage + 10 * idx) / 10 ) * 10)
        }
    }
    return (
      <div className="flex">
        <button onClick={e => moveTenPage(-1, nowpage)} className="pagination movebtn">{'≪'}</button>
        <button onClick={e => moveOnePage(-1, nowpage)} className="pagination movebtn">{'＜'}</button>
        {rendering()}
        <button onClick={e => moveOnePage(1, nowpage)} className="pagination movebtn">{'＞'}</button>
        <button onClick={e => moveTenPage(1, nowpage)} className="pagination movebtn">{'≫'}</button>
      </div>
    );
  } export default Pagination;
  