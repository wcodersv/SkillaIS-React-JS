import React from "react";
import { useSelector } from "react-redux";
import CallRow from "../CallRow";

export const Calls = () => {
  const callListData = useSelector((state) => state.calls.calls);
  console.log(callListData);

  return (
    <>
      {callListData &&
        callListData.map((item, index) => (
          <CallRow
            source={item.source}
            key={index}
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
