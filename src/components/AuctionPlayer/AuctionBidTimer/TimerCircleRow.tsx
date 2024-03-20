import React, { memo, useEffect, useRef, useState } from "react";

const eachStep: number = 100 / 17;

const TimerCircleRow = ({ bidValue }: any) => {
  const [current, setCurrent] = useState<number>(1);
  const [timerRowCount, setTimerRowCount] = useState<number>(2);
  const bidValueRef = useRef(null);
  useEffect(() => {
    const idTimout = setInterval(() => {
        setTimerRowCount(eachStep * current);
        setCurrent(current + 1);
    }, 1000);

    if (bidValueRef.current && bidValueRef.current !== bidValue) {
      bidValueRef.current = bidValue
      setTimerRowCount(1);
      setCurrent(1);
    }
    if(current > 19){
      return clearInterval(idTimout);
    }

    bidValueRef.current = bidValue;
    return () => clearInterval(idTimout);
  }, [current, bidValue]);

  return (
    <>
      <circle
        cx="70"
        cy="70"
        r="73"
        strokeDashoffset={445 - (400 * timerRowCount) / 100}
      ></circle>
    </>
  );
};

export default memo(TimerCircleRow);
