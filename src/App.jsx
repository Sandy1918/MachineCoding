import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(75);
  let arr = [];
  for (let i = 1; i <= count; i++) {
    arr.push(i);
  }
  useEffect(() => {
    const onScroll = function () {
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight - 30
      ) {
        setCount(count + 50);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [count]);

  return (
    <div>
      {arr.map((value) => {
        return <h5 key={value}>{value}</h5>;
      })}
    </div>
  );
}

export default App;
