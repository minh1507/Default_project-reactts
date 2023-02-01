import React, { useState, useReducer, useEffect } from "react";
import { connect } from "react-redux";
import MainCard from "../General/MainCard";
import bg40 from "assets/img/Gioi-thieu.png";
import { InitState, Item } from "./InitState";
import { Actions } from "./Action";
import { Reducer } from "./Reducer";
const { v4: uuidv4 } = require("uuid");
import { String } from "common/String";
import OwlCarousel from "react-owl-carousel";
import ba1 from "assets/img/ba2.jpg";

interface Props {}

const KienThuc = (props: Props) => {
  const [change, setChange] = useState(1);
  const [state, dispatch] = useReducer(Reducer, InitState);

  const changeUl = (num: number) => {
    setChange(num);
  };

  const DanhSachTinTuc = [
    { TieuDe: "Bai1", MoTa: "Bai2" },
    { TieuDe: "Bai1", MoTa: "Bai2" },
    { TieuDe: "Bai1", MoTa: "Bai2" },
    { TieuDe: "Bai1", MoTa: "Bai2" },
    { TieuDe: "Bai1", MoTa: "Bai2" },
    { TieuDe: "Bai1", MoTa: "Bai2" },
    { TieuDe: "Bai1", MoTa: "Bai2" },
    { TieuDe: "Bai1", MoTa: "Bai2" },
    { TieuDe: "Bai1", MoTa: "Bai2" },
    { TieuDe: "Bai1", MoTa: "Bai2" },
    { TieuDe: "Bai1", MoTa: "Bai2" },
    { TieuDe: "Bai1", MoTa: "Bai2" },
  ];
  // const customDiv = styled.div``;

  useEffect(() => {
    Actions.GetDSNhomTinTucPortal(
      "61e2c71d-0e59-4cf8-8c63-25888f6be8b6",
      dispatch
    );
  }, []);
  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  };

  const blog = DanhSachTinTuc && (
    <>
      <OwlCarousel
        className="owl-theme mt-3"
        autoplay
        loop
        nav
        center
        items={DanhSachTinTuc ? DanhSachTinTuc.length : 4}
        responsive={responsive}
      >
        {DanhSachTinTuc &&
          DanhSachTinTuc.map((item: any) => (
            <div
              key={uuidv4()}
              className="item card_carosel"
              // style={{
              //   backgroundColor: "#1e1e1e",
              //   height: "100% !important"
              // }}
            >
              <div>
                <img
                  className="chaos-kt"
                  src={bg40}
                  height="180px"
                  style={{ borderRadius: 5 }}
                />
                <div>
                  <h6 className="mt-1 card-title cursor-pointer">
                    {item.TieuDe}
                  </h6>
                  <p className="owl_text" style={{ wordWrap: "break-word" }}>
                    {item.MoTa}
                  </p>
                  {/* <div className="d-flex justify-content-center align-items-center">
                    <button
                      className="header_btn bg-danger text-light mt-3"
                    >
                      Xem chi tiết
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
      </OwlCarousel>
    </>
  );

  return (
    <div style={{ backgroundColor: "#f5f5fa" }}>
      <div className="wrapper_img">
        <img className="mb-3" src={bg40} width="100%" height="auto" />
        <h1 className="reszex">KIẾN THỨC</h1>
      </div>
      <div className="container-xl pb-3">
        <div className="container-khoa-hoc mb-1 wrapper_kien_thuc_office">
          <div className="menu-khoa-hoc">
            {state.DataItem &&
              state.DataItem.map((value: Item) => (
                <div className="item-menu-khoa-hoc">{value.Ten}</div>
              ))}
          </div>
        </div>
        <div className="kt-contain-head mb-3">
          <div className="kt-head-left" style={{ cursor: "pointer" }}>
            <img
              src="https://media.vov.vn/sites/default/files/styles/large/public/2021-12/v10c.jpg"
              className="img-head-left"
            />
            <div className="full-kt-box">
              <h3 style={{ fontSize: "1.5rem" }}>
                Cháy lớn tại dãy xưởng tạm, lực lượng PCCC & CNCH Hà Nội căng
                mình dập lửa trong giá lạnh{" "}
              </h3>
              <p>
                Khoảng 20h30, một vụ hỏa hoạn đã xảy ra tại làng Ngọc Trục (Đại
                Mỗ, Nam Từ Liêm, Hà Nội), thời tiết hanh khô và giá rét khiến
                công việc chữa cháy vô cùng vất vả.
              </p>
            </div>
          </div>

          <div className="kt-head-right">
            <div className="img-head-righta" style={{ cursor: "pointer" }}>
              <img
                src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/10/14/base64-16341571948261078837500.png"
                className="img-head-right"
              />
              <div className="img-head-rightab">ok</div>
            </div>

            <div className="img-head-righta" style={{ cursor: "pointer" }}>
              <img
                src="https://s1.media.ngoisao.vn/resize_580/news/2022/09/04/dan-tinh-ran-ran-truoc-buc-anh-quy-tu-dan-nam-than-dinh-dam-cua-showbiz-viet-cach-day-8-nam-1-ngoisaovn-w999-h511.jpeg"
                className="img-head-right"
              />
            </div>
          </div>
        </div>
        <img className=" kh-cdnb1x" src={ba1} width="100%" height="auto" />
        {blog}
        <div className="d-flex kt-contain-main mt-3">
          <div className="kt-left-contain">
            <div className="card border-popse" style={{ maxWidth: "100%" }}>
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/1/30/photo-1-1675049066382717747176.jpg"
                    className="img-kh-cls "
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body card-bodys">
                    <h5 className="card-title">
                      Hai đối tượng vác dao vào tận nhà dân truy sát
                    </h5>
                    <p className="card-text popse-khso-p">
                      <small className="text-muted">20/12/2023 8:00 Tối</small>
                    </p>

                    <p className="card-text posp-khso text-dark">
                      Tác giả: Hoàng Dương
                    </p>
                    <p className="card-text posp-khso mb-1">
                      Do mâu thuẫn cá nhân, anh T. bị hai đối tượng mang dao vào
                      tận nhà truy sát. Hai đối tượng đã hành hung và đâm bị
                      thương khiến anh T. phải đi cấp cứu trong đêm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-popse" style={{ maxWidth: "100%" }}>
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/1/29/photo-1-1675003064458937811576.jpg"
                    className="img-kh-cls "
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body card-bodys">
                    <h5 className="card-title">
                      Câu đố Tiếng Việt: "Con gì hay gây tai họa, làm ảnh hưởng
                      đến người khác?"
                    </h5>
                    <p className="card-text popse-khso-p">
                      <small className="text-muted">20/12/2023 8:00 Tối</small>
                    </p>

                    <p className="card-text posp-khso text-dark">
                      Tác giả: Hoàng Dương
                    </p>
                    <p className="card-text posp-khso mb-1">
                      Nếu bạn đang căng thẳng thì hãy thử giải ngay câu đố vui
                      sau đây. Chắc chắn, câu đố sẽ đem đến cho bạn những giây
                      phút thư giãn cùng tiếng cười sảng khoái.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-popse" style={{ maxWidth: "100%" }}>
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/1/29/photo-1-16749989389431750670835.jpg"
                    className="img-kh-cls "
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body card-bodys">
                    <h5 className="card-title">
                      Mỹ nhân lai đối đầu Ba Trà ở Chị Chị Em Em 2: Từng là
                      người khiến Minh Hằng “nể phục”, được Vũ Ngọc Đãng “săn
                      đón” từ năm 3 tuổi
                    </h5>
                    <p className="card-text popse-khso-p">
                      <small className="text-muted">20/12/2023 8:00 Tối</small>
                    </p>

                    <p className="card-text posp-khso text-dark">
                      Tác giả: Hoàng Dương
                    </p>
                    <p className="card-text posp-khso mb-1">
                      Chị Chị Em Em 2 là bộ phim điện ảnh Việt đang rất được
                      công chúng quan tâm. Phim xoay quanh cuộc đời của 2 đại mỹ
                      nhân trứ danh Sài thành xưa là Ba Trà và Tư Nhị do Minh
                      Hằng và Ngọc Trinh đảm nhận. Ngoài 2 nữ chính, một cái tên
                      nữa cũng rất được chú ý sau Chị Chị Em Em là Emma Lê, một
                      mỹ nhân lai đảm nhận vai diễn thuộc hội phản diện, đối đầu
                      với "cô Ba" Minh Hằng. Cụ thể trong phim cô hóa thân vào
                      nhân vật Lucie Huệ - người chị em nhưng luôn sẵn sàng đấu
                      khẩu với Ba Trà, liên tục thốt ra những lời cạnh khóe sâu
                      cay khiến đối phương cứng họng.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-popse" style={{ maxWidth: "100%" }}>
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/1/29/photo-1-16749989389431750670835.jpg"
                    className="img-kh-cls "
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body card-bodys">
                    <h5 className="card-title">
                      Mỹ nhân lai đối đầu Ba Trà ở Chị Chị Em Em 2: Từng là
                      người khiến Minh Hằng “nể phục”, được Vũ Ngọc Đãng “săn
                      đón” từ năm 3 tuổi
                    </h5>
                    <p className="card-text popse-khso-p">
                      <small className="text-muted">20/12/2023 8:00 Tối</small>
                    </p>

                    <p className="card-text posp-khso text-dark">
                      Tác giả: Hoàng Dương
                    </p>
                    <p className="card-text posp-khso mb-1">
                      Chị Chị Em Em 2 là bộ phim điện ảnh Việt đang rất được
                      công chúng quan tâm. Phim xoay quanh cuộc đời của 2 đại mỹ
                      nhân trứ danh Sài thành xưa là Ba Trà và Tư Nhị do Minh
                      Hằng và Ngọc Trinh đảm nhận. Ngoài 2 nữ chính, một cái tên
                      nữa cũng rất được chú ý sau Chị Chị Em Em là Emma Lê, một
                      mỹ nhân lai đảm nhận vai diễn thuộc hội phản diện, đối đầu
                      với "cô Ba" Minh Hằng. Cụ thể trong phim cô hóa thân vào
                      nhân vật Lucie Huệ - người chị em nhưng luôn sẵn sàng đấu
                      khẩu với Ba Trà, liên tục thốt ra những lời cạnh khóe sâu
                      cay khiến đối phương cứng họng.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-popse" style={{ maxWidth: "100%" }}>
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/1/29/photo-1-16749989389431750670835.jpg"
                    className="img-kh-cls "
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body card-bodys">
                    <h5 className="card-title">
                      Mỹ nhân lai đối đầu Ba Trà ở Chị Chị Em Em 2: Từng là
                      người khiến Minh Hằng “nể phục”, được Vũ Ngọc Đãng “săn
                      đón” từ năm 3 tuổi
                    </h5>
                    <p className="card-text popse-khso-p">
                      <small className="text-muted">20/12/2023 8:00 Tối</small>
                    </p>

                    <p className="card-text posp-khso text-dark">
                      Tác giả: Hoàng Dương
                    </p>
                    <p className="card-text posp-khso mb-1">
                      Chị Chị Em Em 2 là bộ phim điện ảnh Việt đang rất được
                      công chúng quan tâm. Phim xoay quanh cuộc đời của 2 đại mỹ
                      nhân trứ danh Sài thành xưa là Ba Trà và Tư Nhị do Minh
                      Hằng và Ngọc Trinh đảm nhận. Ngoài 2 nữ chính, một cái tên
                      nữa cũng rất được chú ý sau Chị Chị Em Em là Emma Lê, một
                      mỹ nhân lai đảm nhận vai diễn thuộc hội phản diện, đối đầu
                      với "cô Ba" Minh Hằng. Cụ thể trong phim cô hóa thân vào
                      nhân vật Lucie Huệ - người chị em nhưng luôn sẵn sàng đấu
                      khẩu với Ba Trà, liên tục thốt ra những lời cạnh khóe sâu
                      cay khiến đối phương cứng họng.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-popse" style={{ maxWidth: "100%" }}>
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/1/29/photo-1-16749989389431750670835.jpg"
                    className="img-kh-cls "
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body card-bodys">
                    <h5 className="card-title">
                      Mỹ nhân lai đối đầu Ba Trà ở Chị Chị Em Em 2: Từng là
                      người khiến Minh Hằng “nể phục”, được Vũ Ngọc Đãng “săn
                      đón” từ năm 3 tuổi
                    </h5>
                    <p className="card-text popse-khso-p">
                      <small className="text-muted">20/12/2023 8:00 Tối</small>
                    </p>

                    <p className="card-text posp-khso text-dark">
                      Tác giả: Hoàng Dương
                    </p>
                    <p className="card-text posp-khso mb-1">
                      Chị Chị Em Em 2 là bộ phim điện ảnh Việt đang rất được
                      công chúng quan tâm. Phim xoay quanh cuộc đời của 2 đại mỹ
                      nhân trứ danh Sài thành xưa là Ba Trà và Tư Nhị do Minh
                      Hằng và Ngọc Trinh đảm nhận. Ngoài 2 nữ chính, một cái tên
                      nữa cũng rất được chú ý sau Chị Chị Em Em là Emma Lê, một
                      mỹ nhân lai đảm nhận vai diễn thuộc hội phản diện, đối đầu
                      với "cô Ba" Minh Hằng. Cụ thể trong phim cô hóa thân vào
                      nhân vật Lucie Huệ - người chị em nhưng luôn sẵn sàng đấu
                      khẩu với Ba Trà, liên tục thốt ra những lời cạnh khóe sâu
                      cay khiến đối phương cứng họng.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-popse" style={{ maxWidth: "100%" }}>
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/1/29/photo-1-16749989389431750670835.jpg"
                    className="img-kh-cls "
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body card-bodys">
                    <h5 className="card-title">
                      Mỹ nhân lai đối đầu Ba Trà ở Chị Chị Em Em 2: Từng là
                      người khiến Minh Hằng “nể phục”, được Vũ Ngọc Đãng “săn
                      đón” từ năm 3 tuổi
                    </h5>
                    <p className="card-text popse-khso-p">
                      <small className="text-muted">20/12/2023 8:00 Tối</small>
                    </p>

                    <p className="card-text posp-khso text-dark">
                      Tác giả: Hoàng Dương
                    </p>
                    <p className="card-text posp-khso mb-1">
                      Chị Chị Em Em 2 là bộ phim điện ảnh Việt đang rất được
                      công chúng quan tâm. Phim xoay quanh cuộc đời của 2 đại mỹ
                      nhân trứ danh Sài thành xưa là Ba Trà và Tư Nhị do Minh
                      Hằng và Ngọc Trinh đảm nhận. Ngoài 2 nữ chính, một cái tên
                      nữa cũng rất được chú ý sau Chị Chị Em Em là Emma Lê, một
                      mỹ nhân lai đảm nhận vai diễn thuộc hội phản diện, đối đầu
                      với "cô Ba" Minh Hằng. Cụ thể trong phim cô hóa thân vào
                      nhân vật Lucie Huệ - người chị em nhưng luôn sẵn sàng đấu
                      khẩu với Ba Trà, liên tục thốt ra những lời cạnh khóe sâu
                      cay khiến đối phương cứng họng.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-popse" style={{ maxWidth: "100%" }}>
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/1/29/photo-1-16749989389431750670835.jpg"
                    className="img-kh-cls "
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body card-bodys">
                    <h5 className="card-title">
                      Mỹ nhân lai đối đầu Ba Trà ở Chị Chị Em Em 2: Từng là
                      người khiến Minh Hằng “nể phục”, được Vũ Ngọc Đãng “săn
                      đón” từ năm 3 tuổi
                    </h5>
                    <p className="card-text popse-khso-p">
                      <small className="text-muted">20/12/2023 8:00 Tối</small>
                    </p>

                    <p className="card-text posp-khso text-dark">
                      Tác giả: Hoàng Dương
                    </p>
                    <p className="card-text posp-khso mb-1">
                      Chị Chị Em Em 2 là bộ phim điện ảnh Việt đang rất được
                      công chúng quan tâm. Phim xoay quanh cuộc đời của 2 đại mỹ
                      nhân trứ danh Sài thành xưa là Ba Trà và Tư Nhị do Minh
                      Hằng và Ngọc Trinh đảm nhận. Ngoài 2 nữ chính, một cái tên
                      nữa cũng rất được chú ý sau Chị Chị Em Em là Emma Lê, một
                      mỹ nhân lai đảm nhận vai diễn thuộc hội phản diện, đối đầu
                      với "cô Ba" Minh Hằng. Cụ thể trong phim cô hóa thân vào
                      nhân vật Lucie Huệ - người chị em nhưng luôn sẵn sàng đấu
                      khẩu với Ba Trà, liên tục thốt ra những lời cạnh khóe sâu
                      cay khiến đối phương cứng họng.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-popse" style={{ maxWidth: "100%" }}>
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/1/29/photo-1-16749989389431750670835.jpg"
                    className="img-kh-cls "
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body card-bodys">
                    <h5 className="card-title">
                      Mỹ nhân lai đối đầu Ba Trà ở Chị Chị Em Em 2: Từng là
                      người khiến Minh Hằng “nể phục”, được Vũ Ngọc Đãng “săn
                      đón” từ năm 3 tuổi
                    </h5>
                    <p className="card-text popse-khso-p">
                      <small className="text-muted">20/12/2023 8:00 Tối</small>
                    </p>

                    <p className="card-text posp-khso text-dark">
                      Tác giả: Hoàng Dương
                    </p>
                    <p className="card-text posp-khso mb-1">
                      Chị Chị Em Em 2 là bộ phim điện ảnh Việt đang rất được
                      công chúng quan tâm. Phim xoay quanh cuộc đời của 2 đại mỹ
                      nhân trứ danh Sài thành xưa là Ba Trà và Tư Nhị do Minh
                      Hằng và Ngọc Trinh đảm nhận. Ngoài 2 nữ chính, một cái tên
                      nữa cũng rất được chú ý sau Chị Chị Em Em là Emma Lê, một
                      mỹ nhân lai đảm nhận vai diễn thuộc hội phản diện, đối đầu
                      với "cô Ba" Minh Hằng. Cụ thể trong phim cô hóa thân vào
                      nhân vật Lucie Huệ - người chị em nhưng luôn sẵn sàng đấu
                      khẩu với Ba Trà, liên tục thốt ra những lời cạnh khóe sâu
                      cay khiến đối phương cứng họng.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-popse" style={{ maxWidth: "100%" }}>
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/1/29/photo-1-16749989389431750670835.jpg"
                    className="img-kh-cls "
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body card-bodys">
                    <h5 className="card-title">
                      Mỹ nhân lai đối đầu Ba Trà ở Chị Chị Em Em 2: Từng là
                      người khiến Minh Hằng “nể phục”, được Vũ Ngọc Đãng “săn
                      đón” từ năm 3 tuổi
                    </h5>
                    <p className="card-text popse-khso-p">
                      <small className="text-muted">20/12/2023 8:00 Tối</small>
                    </p>

                    <p className="card-text posp-khso text-dark">
                      Tác giả: Hoàng Dương
                    </p>
                    <p className="card-text posp-khso mb-1">
                      Chị Chị Em Em 2 là bộ phim điện ảnh Việt đang rất được
                      công chúng quan tâm. Phim xoay quanh cuộc đời của 2 đại mỹ
                      nhân trứ danh Sài thành xưa là Ba Trà và Tư Nhị do Minh
                      Hằng và Ngọc Trinh đảm nhận. Ngoài 2 nữ chính, một cái tên
                      nữa cũng rất được chú ý sau Chị Chị Em Em là Emma Lê, một
                      mỹ nhân lai đảm nhận vai diễn thuộc hội phản diện, đối đầu
                      với "cô Ba" Minh Hằng. Cụ thể trong phim cô hóa thân vào
                      nhân vật Lucie Huệ - người chị em nhưng luôn sẵn sàng đấu
                      khẩu với Ba Trà, liên tục thốt ra những lời cạnh khóe sâu
                      cay khiến đối phương cứng họng.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center mt-3">
              <nav aria-label="Page navigation example ">
                <ul className="pagination">
                  <li className="page-item ">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="kt-right-contain d-flex flex-column gap-2">
            <div className="img-contain-right-box-class">
              <img
                className="img-kt-right"
                src="https://images.pexels.com/photos/4050325/pexels-photo-4050325.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <img
                className="img-kt-right"
                src="https://images.pexels.com/photos/4050325/pexels-photo-4050325.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(KienThuc);
