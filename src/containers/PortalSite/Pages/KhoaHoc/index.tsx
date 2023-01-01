import React, { useState } from 'react'
import { connect } from "react-redux";
import bg40 from 'assets/img/bg40.png'
import MainCard from '../general/MainCard';

interface Props {

}

const KhoaHoc = (props: Props) => {  
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
              <h6 style={{margin: 0}} onClick={() => {changeUl(2)}} className={`${change == 2 ? 'menu_active' : 'menu_unactive'}`}>Khóa học của tôi</h6>
            </li>
            <li>
              <h6 style={{margin: 0}} onClick={() => {changeUl(3)}} className={`${change == 3 ? 'menu_active' : 'menu_unactive'}`}>Cho người mới</h6>
            </li>
            <li>
              <h6 style={{margin: 0}} onClick={() => {changeUl(4)}} className={`${change == 4 ? 'menu_active' : 'menu_unactive'}`}>Cải thiện thành tích</h6>
            </li>
            <li>
              <h6 style={{margin: 0}} onClick={() => {changeUl(5)}} className={`${change == 5 ? 'menu_active' : 'menu_unactive'}`}>Chạy road</h6>
            </li>
            <li>
              <h6 style={{margin: 0}} onClick={() => {changeUl(6)}} className={`${change == 6 ? 'menu_active' : 'menu_unactive'}`}>Chạy trail</h6>
            </li>
            <li>
              <h6 style={{margin: 0}} onClick={() => {changeUl(7)}} className={`${change == 7 ? 'menu_active' : 'menu_unactive'}`}>Chỉnh dáng</h6>
            </li>
            <li>
              <h6 style={{margin: 0}} onClick={() => {changeUl(8)}} className={`${change == 8 ? 'menu_active' : 'menu_unactive'}`}>Ironman</h6>
            </li>
            <li>
              <h6 style={{margin: 0}} onClick={() => {changeUl(9)}} className={`${change == 9 ? 'menu_active' : 'menu_unactive'}`}>Cho trẻ em</h6>
            </li>
            <li>
              <h6 style={{margin: 0}} onClick={() => {changeUl(10)}} className={`${change == 10 ? 'menu_active' : 'menu_unactive'}`}>Combo</h6>
            </li>
          </ul>

         <MainCard paths="/chi-tiet"/>

        </div>
      </div>
    )
}
const mapState = ({ ...state }) => ({

});
const mapDispatchToProps = {
};

export default connect(mapState, mapDispatchToProps)(KhoaHoc);