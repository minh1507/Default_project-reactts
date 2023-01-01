import React, { useState } from 'react'
import { connect } from "react-redux";
import MainCard from '../general/MainCard';
import bg40 from 'assets/img/bg40.png'

interface Props {

}

const KienThuc = (props: Props) => {  
  const [change, setChange] = useState(1)

  const changeUl = (num: number) => {
    setChange(num)
  }

  return(
    <div>
      <img src={bg40} width="100%" height="auto" />
      <div className="mt-5" style={{textAlign: 'center'}}>
        <ul id="menu_bar" style={{listStyle: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
          <li>
            <h6 style={{margin: 0}} onClick={() => {changeUl(1)}} className={`${change == 1 ? 'menu_active' : 'menu_unactive'}`}>All</h6>
          </li>
          <li>
            <h6 style={{margin: 0}} onClick={() => {changeUl(2)}} className={`${change == 2 ? 'menu_active' : 'menu_unactive'}`}>Kỹ thuật chạy bộ</h6>
          </li>
          <li>
            <h6 style={{margin: 0}} onClick={() => {changeUl(3)}} className={`${change == 3 ? 'menu_active' : 'menu_unactive'}`}>Chấn thương</h6>
          </li>
          <li>
            <h6 style={{margin: 0}} onClick={() => {changeUl(4)}} className={`${change == 4 ? 'menu_active' : 'menu_unactive'}`}>Chỉnh dáng chạy bộ</h6>
          </li>
        
        </ul>

       <MainCard/>

      </div>
    </div>
    )
}
const mapState = ({ ...state }) => ({

});
const mapDispatchToProps = {
};

export default connect(mapState, mapDispatchToProps)(KienThuc);