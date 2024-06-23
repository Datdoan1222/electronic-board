import React, { useState, useEffect } from "react";
import "./ThuVien.scss";
import Marquee from "../../../components/Marquee/Marquee";
import Flag from "../../../assets/vietnam.png";
import acc from "../../../assets/acc.png";
import headlineImage from "../../../assets/banner_test.png";
import HeaderSearch from "../../../components/Header/HeaderAdmin";
import Tabs from "../../../components/Tabs/Tabs";
import { Image, Table } from "antd";
import axios from "axios";
import { getInfor } from "../../../services/inforServices";
import AxiosClient from "../../../services/axiosClient";

const ThuVien = ({ columnTitles }) => {

  const bannerColumns = [
    { title: columnTitles.stt, dataIndex: "key" },
    {
      title: "Tiêu đề banner",
      dataIndex: "headline",
      render: (text, record) => (
        <div className="headline">
          <Image
            width={150}
            src={record.headline_image}
            alt="headline"
            className="headline-image"
          />
          <span style={{ marginLeft: 10, width: 130 }}>
            {record.headline_content}
          </span>
        </div>
      ),
      sorter: (a, b) => a.headline_content.localeCompare(b.headline_content),
    },
    {
      title: columnTitles.accPost,
      dataIndex: "acc_post",
      render: (text, record) => (
        <div className="acc-post">
          <Image
            width={40}
            src={record.acc_image}
            alt="account"
            className="acc-image"
          />
          <span style={{ marginLeft: 10 }}>{record.acc_name}</span>
        </div>
      ),
      sorter: (a, b) => a.acc_name.localeCompare(b.acc_name),
    },
    { title: columnTitles.time_up, dataIndex: "time_up" },
  ];

  const baiVietColumns = [
    { title: columnTitles.stt, dataIndex: "key" },
    {
      title: "Tiêu đề bài viết",
      dataIndex: "article",
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    { title: "Mô tả bài viết", dataIndex: "article_description" },
    {
      title: columnTitles.accPost,
      dataIndex: "acc_post",
      render: (text, record) => (
        <div className="acc-post">
          <Image
            width={40}
            src={record.acc_image}
            alt="account"
            className="acc-image"
          />
          <span style={{ marginLeft: 10 }}>{record.acc_name}</span>
        </div>
      ),
      sorter: (a, b) => a.acc_name.localeCompare(b.acc_name),
    },
    { title: columnTitles.time_up, dataIndex: "time_up" },
  ];

  const videoColumns = [
    { title: columnTitles.stt, dataIndex: "key" },
    {
      title: "Tiêu đề Video",
      dataIndex: "video",
      render: (text, record) => (
        <div className="headline">
          <Image
            width={150}
            src={record.headline_image}
            alt="headline"
            className="headline-image"
          />
          <span style={{ marginLeft: 10, width: 130 }}>
            {record.headline_content}
          </span>
        </div>
      ),
      sorter: (a, b) => a.headline_content.localeCompare(b.headline_content),
    },
    { title: "Thời lượng", dataIndex: "duration" },
    {
      title: columnTitles.accPost,
      dataIndex: "acc_post",
      render: (text, record) => (
        <div className="acc-post">
          <Image
            width={40}
            src={record.acc_image}
            alt="account"
            className="acc-image"
          />
          <span style={{ marginLeft: 10 }}>{record.acc_name}</span>
        </div>
      ),
      sorter: (a, b) => a.acc_name.localeCompare(b.acc_name),
    },
    { title: columnTitles.time_up, dataIndex: "time_up" },
  ];

  const hinhAnhColumns = [
    { title: columnTitles.stt, dataIndex: "key" },
    {
      title: "Tiêu đề Hình ảnh",
      dataIndex: "headline_content",
      render: (text, record) => (
        <div className="headline">
          <Image
            width={150}
            src={record.headline_image}
            alt="headline"
            className="headline-image"
          />
          <span style={{ marginLeft: 10, width: 130 }}>
            {record.headline_content}
          </span>
        </div>
      ),
      sorter: (a, b) => a.headline_content.localeCompare(b.headline_content),
    },
    {
      title: columnTitles.accPost,
      dataIndex: "acc_post",
      render: (text, record) => (
        <div className="acc-post">
          <Image
            width={40}
            src={record.acc_image}
            alt="account"
            className="acc-image"
          />
          <span style={{ marginLeft: 10 }}>{record.acc_name}</span>
        </div>
      ),
      sorter: (a, b) => a.acc_name.localeCompare(b.acc_name),
    },
    { title: columnTitles.time_up, dataIndex: "time_up" },
  ];

  const datafake = [
    {
      key: "1",
      acc_name: "Anh Dat",
      acc_image: acc,
      headline_image: headlineImage,
      headline_content: "Chuyển đổi số trong công an thành phố",
      article: "Chuyển đổi số trong công an thành phố",
      article_description: "Mô tả bài viết 1",
      video: headlineImage,
      video_content: "Chuyển đổi số trong công an thành phố",
      duration: "3:45",
      time_up: "17-6-2024",
    },
    {
      key: "2",
      acc_name: "Duc Chung",
      acc_image: acc,
      headline_image: headlineImage,
      headline_content:
        "Hội nghị giao ban công tác Công an Thành phố tháng 4/2024",
      article: "Chuyển đổi số trong công an thành phố",
      article_description: "Mô tả bài viết 1",
      video: headlineImage,
      video_content: "Chuyển đổi số trong công an thành phố",
      duration: "4:30",
      time_up: "17-6-2024",
    },
    {
      key: "3",
      acc_name: "Quynh Duc",
      acc_image: acc,
      headline_image: headlineImage,
      headline_content: "Báo điện tử công an TP HCM",
      article: "Chuyển đổi số trong công an thành phố",
      article_description: "Mô tả bài viết 1",
      video: headlineImage,
      video_content: "Chuyển đổi số trong công an thành phố",
      duration: "2:15",
      time_up: "17-6-2024",
    },
    {
      key: "4",
      acc_name: "Thi Lien",
      acc_image: acc,
      headline_image: headlineImage,
      headline_content: "Chuyển đổi số trong công an thành phố",
      article: "Chuyển đổi số trong công an thành phố",
      article_description: "Mô tả bài viết 1",
      video: headlineImage,
      video_content: "Chuyển đổi số trong công an thành phố",
      duration: "5:00",
      time_up: "17-6-2024",
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const renderTabContent = (columns, title) => (
    <div className="item_thuvien">
      <div className="title_thuvien">
        <span className="title_thuvien">{title}</span>
      </div>
      <Table columns={columns} dataSource={datafake} onChange={onChange} />
    </div>
  );

  return (
    <div className="thuvien_contain">
      <Marquee img={Flag}>
        Trung thành, Dũng cảm - Mưu trí, Sáng tạo - Vì hạnh phúc nhân dân - Vì
        bình yên Thành phố
      </Marquee>
      <HeaderSearch name="Thư Viện" addName="Thêm Thư Viện" onBtnAdd={{}} />
      <Tabs>
        <div label="Banner">
          {renderTabContent(bannerColumns, "Danh sách Banner")}
        </div>
        <div label="Bài viết">
          {renderTabContent(baiVietColumns, "Danh sách Bài viết")}
        </div>
        <div label="Video">
          {renderTabContent(videoColumns, "Danh sách Video")}
        </div>
        <div label="Hình ảnh">
          {renderTabContent(hinhAnhColumns, "Danh sách Hình ảnh")}
        </div>
      </Tabs>
    </div>
  );
};

ThuVien.defaultProps = {
  columnTitles: {
    stt: "STT",
    headline: "Tiêu đề",
    accPost: "Tài khoản đăng bài",
    time_up: "Ngày đăng bài",
    title: "Tiêu đề",
    description: "Mô tả bài viết",
    duration: "Thời lượng",
  },
};

export default ThuVien;
