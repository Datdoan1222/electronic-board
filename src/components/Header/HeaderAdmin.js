import React from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { Image, Input } from "antd";
function HeaderAdmin({ name, addName, onBtnAdd }) {
  return (
    <HeaderContainer>
      <div className="name_contain">
        <span className="name">{name}</span>
      </div>
      <div className="search_contain">
        <Input
          style={{ fontsize: 16 }}
          defaultValue="search"
          size="large"
          prefix={<IoIosSearch size={16} />}
        />
      </div>
      <div className="add_contain">
        <div className="item add">
          <button className="btn_add" onClick={onBtnAdd}>
            Thêm {addName}
          </button>
        </div>
      </div>
    </HeaderContainer>
  );
}
export default HeaderAdmin;
const HeaderContainer = styled.div`
  padding: 20px 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1.5px solid #a1a2a2;
  .name_contain {
    display: flex;
    flex-direction: column;
    flex: 0.6;
  }
  .name_contain .name {
    font-size: 23px;
    color: #000;
    font-weight: bold;
  }
  .search_contain {
    flex: 2;
    display: flex;
    padding: 10px 0;
    fontsize: 16px;
  }
  .add_contain {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
  .item {
    margin: 0 10px;
  }
  button {
    height: 39px;
    border-radius: 10px;
  }

  .btn_add {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #e61d23;
    color: #f1f1f1;
    font-size: 18px;
    font-weight: bold;
  }
  //
`;
