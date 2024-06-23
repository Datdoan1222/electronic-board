import React, { useState } from "react";
import { Table, TimePicker, Input } from "antd";
import moment from "moment";
import "antd/dist/reset.css";

const CalendarWithActivities = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [activities, setActivities] = useState({});
  const startOfWeek = currentDate.clone().startOf("week");

  const daysOfWeek = [];
  for (let i = 0; i < 7; i++) {
    daysOfWeek.push(startOfWeek.clone().add(i, "days"));
  }

  const hoursInDay = Array.from({ length: 24 }, (_, i) => i);

  const columns = [
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      fixed: "left",
      width: 100,
    },
    ...daysOfWeek.map((day) => ({
      title: `${day.format("dddd")} ${day.format("DD/MM")}`,
      dataIndex: day.format("YYYY-MM-DD"),
      key: day.format("YYYY-MM-DD"),
      render: (text, record) => (
        <Input
          value={
            activities[record.time]
              ? activities[record.time][day.format("YYYY-MM-DD")]
              : ""
          }
          onChange={(e) =>
            handleActivityChange(
              record.time,
              day.format("YYYY-MM-DD"),
              e.target.value
            )
          }
          placeholder="Add activity"
        />
      ),
    })),
  ];

  const data = hoursInDay.map((hour) => ({
    key: hour,
    time: `${hour}:00`,
  }));

  const handleActivityChange = (time, date, activity) => {
    setActivities((prevActivities) => ({
      ...prevActivities,
      [time]: {
        ...prevActivities[time],
        [date]: activity,
      },
    }));
  };

  return (
    <div>
      <div className="custom-calendar-header">
        <button
          onClick={() =>
            setCurrentDate(currentDate.clone().subtract(1, "week"))
          }
        >
          Previous
        </button>
        <span>{`${startOfWeek.format("MMM DD")} - ${startOfWeek
          .clone()
          .add(6, "days")
          .format("MMM DD, YYYY")}`}</span>
        <button
          onClick={() => setCurrentDate(currentDate.clone().add(1, "week"))}
        >
          Next
        </button>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ x: "max-content", y: 600 }}
      />
    </div>
  );
};

export default CalendarWithActivities;
