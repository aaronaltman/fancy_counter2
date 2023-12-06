import { useState } from "react";

const CountEl = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1
        onClick={() => {
          setCount(count + 1);
        }}
        className="count"
      >
        {count}
      </h1>
    </>
  );
};

export default CountEl;
