import React from "react";
import { useSelector } from "react-redux";
import CallRow from "../CallRow";

export const Calls = ({ value }) => {
  const callListData = useSelector((state) => state.calls.calls);
  const date = new Date();
  const year = date.getFullYear();
  const hour = date.getHours();
  const min = date.getMinutes();
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  const day = date.getDate();
  const now = `${year}-${month}-${day} ${hour}:${min}`;

  const resultData = [
    ...callListData,
    {
      avatar:
        "https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      id: "93af7aae-4f4d-444a-aa77-65186a93243",
      time: now,
      name: "Evans",
      lastname: "Spears",
      source: "Banana Company",
      duration: "2:56",
      rate: "good",
      phone: "+7(980)723-132-277",
      calldirect: "incoming",
      profession: "operator",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      id: "93af7aae-4f4d-444a-aa77-65186a986597",
      time: now,
      name: "Pitter",
      lastname: "Parker",
      source: "Yota",
      duration: "3:23",
      rate: "good",
      phone: "+7(980)788-132-297",
      calldirect: "incoming",
      profession: "operator",
    },
  ];

  const resarr = resultData.filter((item) => item.time === now);

  console.log(resarr);
  console.log(resultData[0].time.slice(0, 10));

  const total = resultData.filter((item) => item.time != now);

  return (
    <>
      {resultData &&
        resultData
          .filter(
            (item) =>
              item.name.toLowerCase().trim().includes(value.trim()) ||
              item.source.toLowerCase().trim().includes(value.trim()) ||
              item.phone.toLowerCase().trim().includes(value.trim()),
          )
          .filter((item) => item.time === now)
          .map((item) => (
            <CallRow
              source={item.source}
              key={item.id}
              avatar={item.avatar}
              number={item.phone}
              time={item.time.slice(11, 16)}
              duration={item.duration}
              status={item.rate}
              direction={item.calldirect}
            />
          ))}
      <div style={{ margin: 10 }}>
        yesterday <sup style={{ color: "#899CB1" }}>{total.length}</sup>
      </div>
      {resultData &&
        resultData
          .filter(
            (item) =>
              item.name.toLowerCase().trim().includes(value.trim()) ||
              item.source.toLowerCase().trim().includes(value.trim()) ||
              item.phone.toLowerCase().trim().includes(value.trim()),
          )
          .filter((item) => item.time != now)
          .map((item) => (
            <CallRow
              source={item.source}
              key={item.id}
              avatar={item.avatar}
              number={item.phone}
              time={item.time.slice(11, 16)}
              duration={item.duration}
              status={item.rate}
              direction={item.calldirect}
            />
          ))}
    </>
  );
};
