import React, { useEffect, useState } from "react";

const Counter: React.FC = () => {
  const [num, setNum] = useState<number>(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setNum((num) => num + 1);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>{num}</div>;
};

export default Counter;
