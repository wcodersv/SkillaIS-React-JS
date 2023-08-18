import React from "react";
import { useSelector } from "react-redux";
import CallRow from "../CallRow";

export const Calls = () => {
  const callListData = useSelector((state) => state.calls.calls);
  console.log(callListData.results);

  return (
    <>
      {callListData.results &&
        callListData.results.map((item, index) => (
          <CallRow
            key={index}
            avatar={item.person_avatar}
            time={item.date.slice(10, 16)}
            number={item.partner_data.phone}
            duration={Math.floor(item.time)}
          />
        ))}
    </>
  );
};
