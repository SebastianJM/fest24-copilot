import React, { forwardRef, useImperativeHandle, useState, useEffect } from 'react';

const Timer = forwardRef((props, ref) => {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });
  const { stopTimer } = props;

  useImperativeHandle(ref, () => ({
    getValue() {
      return getTimeInSeconds();
    },
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      if(!stopTimer) {
        setTime(prevTime => {
          const updatedSeconds = prevTime.seconds + 1;
          const updatedMinutes = prevTime.minutes + (updatedSeconds === 60 ? 1 : 0);
          return {
            minutes: updatedMinutes % 60,
            seconds: updatedSeconds % 60,
          };
        });
      }  
    }, 1000);

    return () => clearInterval(interval);
  }, [stopTimer]);

  // Function to get the total time in seconds
  const getTimeInSeconds = () => {
    return time.minutes * 60 + time.seconds;
  };

  return (
    <div style={{position: "absolute", top: "9vh", left: "50vw"}}>
      <div style={{fontSize: "100px", fontWeight: "bold"}}>
        {String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')}
      </div>
    </div>
  );
});

export default Timer;
