import HeaderSearch from "../../../components/Header/HeaderAdmin";
import Marquee from "../../../components/Marquee/Marquee";
import React from "react";
import Flag from "../../../assets/vietnam.png";
import "./Lich.scss";
import Tabs from "../../../components/Tabs/Tabs";
import { Calendar, theme, Badge } from "antd";
import CalendarWithTime from "./CalendarWithTime";
function Lich(params) {
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  const today = new Date();
  const tomorrow = new Date(today);
  const mounth = new Date().getMonth();
  tomorrow.setDate(today.getDate() + 1);

  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const getListData = (value) => {
    let listData;
    switch (value.date()) {
      case 20:
        listData = [
          {
            type: "success",
            content: "Phòng kỹ thuật đăng bài 8:00.",
          },
        ];
        break;
      case 21:
        listData = [
          {
            type: "error",
            content: "Họp",
          },
          {
            type: "error",
            content: "Họp nội bộ.",
          },
        ];
        break;
      default:
    }
    return listData || [];
  };
  const getMonthData = (value) => {
    if (value.month() === 8) {
      return 1394;
    }
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };
  return (
    <div className="lich_contain">
      <Marquee img={Flag}>
        Trung thành, Dũng cảm - Mưu trí, Sáng tạo - Vì hạnh phúc nhân dân - Vì
        bình yên Thành phố
      </Marquee>
      <HeaderSearch name="Lịch" addName="Thêm Lịch Trực" onBtnAdd={{}} />
      {/* <Tabs>
        <div label="Lịch trực">
          <div className="calendar">
            <div className="calendar_item_left" style={wrapperStyle}>
              <Calendar
                headerRender={() => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 5,
                    }}
                  >
                    <span> Tháng {mounth}</span>
                  </div>
                )}
                fullscreen={false}
                onPanelChange={onPanelChange}
              />
              <div className="wrapper_content">
                <div>Hôm nay ({today.toLocaleDateString()})</div>
                <div>Ngày mai ({tomorrow.toLocaleDateString()})</div>
              </div>
            </div>
            <div className="calendar_item_right">
              <Calendar mode="week" cellRender={cellRender} />
              <CalendarWithTime />
            </div>
          </div>
        </div>

        <div label="Lịch công tác"></div>
      </Tabs> */}
    </div>
  );
}
export default Lich;
