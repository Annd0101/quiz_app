import React, { useState, useEffect } from "react";
const QuizTimer = ({ updateTime }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    let timerId = setTimeout(() => {
      // Increment the counter every second
      let newSeconds = seconds + 1;
      let newMinutes = minutes;

      if (newSeconds === 60) {
        newMinutes++;
        newSeconds = 0;
      }

      setSeconds(newSeconds);
      setMinutes(newMinutes);
      // Call the function passed as prop to update parent's state
      updateTime(newMinutes, newSeconds);
    }, 1000);

    // Cleanup the timeout if the component is unmounted
    return () => clearTimeout(timerId);
  }, [seconds, minutes, updateTime]);

  return (
    <div className='text-light'>
      Time: {minutes} minutes {seconds} seconds
    </div>
  );
};
export default React.memo(QuizTimer);
