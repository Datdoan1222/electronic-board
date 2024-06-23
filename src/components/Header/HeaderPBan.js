import React from "react";
import styled from "styled-components";
import { CgScreen } from "react-icons/cg";
import { Image } from "antd";
function HeaderPBan({ pbName, timeEnd, userName, onBtnPost, onBtnPreview }) {
  return (
    <HeaderContainer>
      <div className="phongban_name">
        <span className="name">{pbName}</span>
        <span className="note">
          Lần cập nhập cuối {timeEnd} PM Bởi {userName}
        </span>
      </div>
      <div className="item_right">
        <div className="item preview">
          <button className="btn_preview" onClick={onBtnPreview}>
            Xem trước
            <CgScreen style={{ paddingLeft: 10 }} size={35} />
          </button>
        </div>
        <div className="item post">
          <button className="btn_post" onClick={onBtnPost}>
            Đăng
          </button>
        </div>
      </div>
    </HeaderContainer>
  );
}
export default HeaderPBan;
const HeaderContainer = styled.div`
  padding: 10px 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1.5px solid #a1a2a2;
  .phongban_name {
    display: flex;
    flex-direction: column;
    flex: 2;
  }
  .phongban_name .name {
    font-size: 24px;
  }
  .phongban_name .note {
    font-size: 12px;
    color: #a1a2a2;
  }
  .item_right {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
  .item_right .item {
    margin: 0 10px;
    font-size: 16px;
  }
  .item_right button {
    height: 39px;
    border-radius: 10px;
  }
  .item_right .btn_preview {
    width: 169px;
  }
  .item_right .btn_post {
    width: 124px;
    background-color: #e61d23;
    color: #f1f1f1;
  }
  //
`;
