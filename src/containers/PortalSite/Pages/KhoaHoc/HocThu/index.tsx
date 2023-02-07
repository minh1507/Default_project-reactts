import React, { useState } from 'react'
import { connect } from "react-redux";
import avatar from 'assets/img/ava3.png'
import Comment from '../../General/comment';

interface Props {  
}

const HocThu = (props: Props) => {  
  const [change, setChange] = useState(1);
  const changeContent = (content: number) => {
    setChange(content);
  };  
  const contentTab = () => {
    if (change == 1) {
      return (
        <div className="GiaoAnLyThuyet">
          <div className="accordion mt-2" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                  <div>
                    <p>1. xcvxcvcxcvxcvcx</p>
                    <span><i className="bi bi-play-circle text-danger"></i>&ensp;12:30</span>
                  </div>
                  <div>
                    <p>2. xcvxcvcxcvxcvcx</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  Accordion Item #2
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  Accordion Item #3
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (change == 2) {
      return (
        <div>2</div>
      );
    }
  };
    return(
      <>
        <div className="row" style={{background: "#1c1d1f"}}>
          <div className="col-sm-12">
            <div className="container">
              <div className="Card-Hoc-Header">
                <h1 className="text-center">Tieu de khoa hoc</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-4">
            <div className="col-sm-8">
              <div className="Card-Hoc">
                <iframe
                  width="100%"
                  height="480px"
                  src={"https://www.youtube.com/embed/zgPJMbApf_0"}
                />
              </div>
              <Comment tital='ok'/>
            </div>
            <div className="col-sm-4">

              <div className="Card-Hoc">
                <div className="d-flex gap-4">
                    <p
                      onClick={() => changeContent(1)}
                      className={`${change == 1 ? "doContent" : "unDoContent"}`}
                    >
                      Giáo án lý thuyết
                    </p>
                    <p
                      onClick={() => changeContent(2)}
                      className={`${change == 2 ? "doContent" : "unDoContent"}`}
                    >
                      Giáo án thực hành
                    </p>
                </div>
                  {contentTab()}
              </div>

            </div>
          </div>
        </div>
      </>
    )
}
const mapState = ({ ...state }) => ({

});
const mapDispatchToProps = {
};

export default connect(mapState, mapDispatchToProps)(HocThu);