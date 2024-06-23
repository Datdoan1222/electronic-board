import React from "react";
import { Image, Table } from "antd";
import imageacc from "../../../assets/acc.png";
function DSVideo({ images, imageList }) {
  if (!images && imageList) {
    return <p style={{ margin: "10vh" }}>Loading...</p>;
  }
  const data = [
    {
      id: 1,
      STT: 1,
      "Tiêu đề banner": "Chuyển đổi số trong công an thành phố",
      "Người đăng tài khoản": "Nguyễn Văn A",
      "Ngày đăng bài": "2024-06-01",
      "Ảnh tiêu đề": `data:image/jpeg;base64,${images[imageList[0]]}`,
      "Ảnh người đăng": imageacc,
    },
    {
      id: 2,
      STT: 2,
      "Tiêu đề banner":
        "Hội nghị giao ban công tác Công an Thành phố tháng 4/2024",
      "Người đăng tài khoản": "Trần Thị B",
      "Ngày đăng bài": "2024-06-05",
      "Ảnh tiêu đề": `data:image/jpeg;base64,${images[imageList[2]]}`,
      "Ảnh người đăng": imageacc,
    },
    {
      id: 3,
      STT: 3,
      "Tiêu đề banner": "Báo điện tử công an TP HCM",
      "Người đăng tài khoản": "Lê Văn C",
      "Ngày đăng bài": "2024-06-10",
      "Ảnh tiêu đề": `data:image/jpeg;base64,${images[imageList[3]]}`,
      "Ảnh người đăng": imageacc,
    },
  ];
  const columns = [
    {
      title: "STT",
      dataIndex: "STT",
      key: "STT",
    },
    {
      title: "Tiêu đề banner",
      dataIndex: "Tiêu đề banner",
      key: "Tiêu đề banner",
      render: (_, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={record["Ảnh tiêu đề"]}
            alt="User"
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              marginRight: 10,
            }}
          />
          <span>{record["Tiêu đề banner"]}</span>
        </div>
      ),
    },
    {
      title: "Người đăng tài khoản",
      dataIndex: "Người đăng tài khoản",
      key: "Người đăng tài khoản",
      render: (_, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={record["Ảnh người đăng"]}
            alt="User"
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              marginRight: 10,
            }}
          />
          <span>{record["Người đăng tài khoản"]}</span>
        </div>
      ),
    },
    {
      title: "Ngày đăng bài",
      dataIndex: "Ngày đăng bài",
      key: "Ngày đăng bài",
    },
  ];
  return (
    <div className="tabs_item">
      <Table dataSource={data} columns={columns} rowKey="id" />
    </div>
  );
}
export default DSVideo;
