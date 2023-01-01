import React from 'react'
import { connect } from "react-redux";
import bg7 from 'assets/img/bg7.png'
import { useHistory } from 'react-router-dom';


interface Props {
  paths: string,
  general: any
}

const MainCard = (props: Props) => {  
    const history = useHistory();

    const goToPage = () => {
      history.push(props.paths);
    }
    
    return(
        
        <div className="main_sub_detal">
          <div className="container mt-5 mb-5">
            <span className="mb-3 nav_in" style={{padding: '5px 5px', backgroundColor: 'pink', width: '40px', height: '40px', borderRadius: '5px 5px', cursor: 'pointer'}}>
              <i className="bi bi-list-ul" style={{fontSize: '1.5rem'}} />
            </span>
            <div className="row row-cols-1 row-cols-md-5 g-3 justify-content-center">
              <div className="col " style={{minWidth: '200px'}}>
                <div className="card card_main_container" style={{cursor: 'pointer'}}>
                  <img src={bg7} className="card-img-top" alt="..." />
                  <div className="card-body" style={{textAlign: 'start'}}>
                    <h5 className="text-danger card-title">GIÁO ÁN CHỈNH DÁNG</h5>
                    <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>25/12/2022
                      at
                      8pm</p>
                    <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>Mr Long
                    </p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button onClick={() => {goToPage()}} className="header_btn bg-danger text-light mt-3" style={{width: '120px'}}>Xem
                          chi
                          tiết</button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col " style={{minWidth: '200px'}}>
                <div className="card card_main_container" style={{cursor: 'pointer'}}>
                  <img src={bg7} className="card-img-top" alt="..." />
                  <div className="card-body" style={{textAlign: 'start'}}>
                    <h5 className="text-danger card-title">GIÁO ÁN CHỈNH DÁNG</h5>
                    <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>25/12/2022
                      at
                      8pm</p>
                    <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>Mr Long
                    </p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button onClick={() => {goToPage()}} className="header_btn bg-danger text-light mt-3" style={{width: '120px'}}>Xem
                          chi
                          tiết</button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col " style={{minWidth: '200px'}}>
                <div className="card card_main_container" style={{cursor: 'pointer'}}>
                  <img src={bg7} className="card-img-top" alt="..." />
                  <div className="card-body" style={{textAlign: 'start'}}>
                    <h5 className="text-danger card-title">GIÁO ÁN CHỈNH DÁNG</h5>
                    <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>25/12/2022
                      at
                      8pm</p>
                    <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>Mr Long
                    </p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button onClick={() => {goToPage()}} className="header_btn bg-danger text-light mt-3" style={{width: '120px'}}>Xem
                          chi
                          tiết</button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col " style={{minWidth: '200px'}}>
                <div className="card card_main_container" style={{cursor: 'pointer'}}>
                  <img src={bg7} className="card-img-top" alt="..." />
                  <div className="card-body" style={{textAlign: 'start'}}>
                    <h5 className="text-danger card-title">GIÁO ÁN CHỈNH DÁNG</h5>
                    <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>25/12/2022
                      at
                      8pm</p>
                    <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>Mr Long
                    </p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button onClick={() => {goToPage()}} className="header_btn bg-danger text-light mt-3" style={{width: '120px'}}>Xem
                          chi
                          tiết</button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col " style={{minWidth: '200px'}}>
                <div className="card card_main_container" style={{cursor: 'pointer'}}>
                  <img src={bg7} className="card-img-top" alt="..." />
                  <div className="card-body" style={{textAlign: 'start'}}>
                    <h5 className="text-danger card-title">GIÁO ÁN CHỈNH DÁNG</h5>
                    <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>25/12/2022
                      at
                      8pm</p>
                    <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>Mr Long
                    </p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button onClick={() => {goToPage()}} className="header_btn bg-danger text-light mt-3" style={{width: '120px'}}>Xem
                          chi
                          tiết</button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col " style={{minWidth: '200px'}}>
                <div className="card card_main_container" style={{cursor: 'pointer'}}>
                  <img src={bg7} className="card-img-top" alt="..." />
                  <div className="card-body" style={{textAlign: 'start'}}>
                    <h5 className="text-danger card-title">GIÁO ÁN CHỈNH DÁNG</h5>
                    <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>25/12/2022
                      at
                      8pm</p>
                    <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>Mr Long
                    </p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button onClick={() => {goToPage()}} className="header_btn bg-danger text-light mt-3" style={{width: '120px'}}>Xem
                          chi
                          tiết</button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col " style={{minWidth: '200px'}}>
                <div className="card card_main_container" style={{cursor: 'pointer'}}>
                  <img src={bg7} className="card-img-top" alt="..." />
                  <div className="card-body" style={{textAlign: 'start'}}>
                    <h5 className="text-danger card-title">GIÁO ÁN CHỈNH DÁNG</h5>
                    <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>25/12/2022
                      at
                      8pm</p>
                    <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>Mr Long
                    </p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button onClick={() => {goToPage()}} className="header_btn bg-danger text-light mt-3" style={{width: '120px'}}>Xem
                          chi
                          tiết</button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col " style={{minWidth: '200px'}}>
                <div className="card card_main_container" style={{cursor: 'pointer'}}>
                  <img src={bg7} className="card-img-top" alt="..." />
                  <div className="card-body" style={{textAlign: 'start'}}>
                    <h5 className="text-danger card-title">GIÁO ÁN CHỈNH DÁNG</h5>
                    <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>25/12/2022
                      at
                      8pm</p>
                    <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>Mr Long
                    </p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button onClick={() => {goToPage()}} className="header_btn bg-danger text-light mt-3" style={{width: '120px'}}>Xem
                          chi
                          tiết</button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col " style={{minWidth: '200px'}}>
                <div className="card card_main_container" style={{cursor: 'pointer'}}>
                  <img src={bg7} className="card-img-top" alt="..." />
                  <div className="card-body" style={{textAlign: 'start'}}>
                    <h5 className="text-danger card-title">GIÁO ÁN CHỈNH DÁNG</h5>
                    <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>25/12/2022
                      at
                      8pm</p>
                    <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>Mr Long
                    </p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button onClick={() => {goToPage()}} className="header_btn bg-danger text-light mt-3" style={{width: '120px'}}>Xem
                          chi
                          tiết</button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col " style={{minWidth: '200px'}}>
                <div className="card card_main_container" style={{cursor: 'pointer'}}>
                  <img src={bg7} className="card-img-top" alt="..." />
                  <div className="card-body" style={{textAlign: 'start'}}>
                    <h5 className="text-danger card-title">GIÁO ÁN CHỈNH DÁNG</h5>
                    <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>25/12/2022
                      at
                      8pm</p>
                    <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>Mr Long
                    </p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button onClick={() => {goToPage()}} className="header_btn bg-danger text-light mt-3" style={{width: '120px'}}>Xem
                          chi
                          tiết</button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    )
}
const mapState = ({ ...state }) => ({

});
const mapDispatchToProps = {
};

export default connect(mapState, mapDispatchToProps)(MainCard);