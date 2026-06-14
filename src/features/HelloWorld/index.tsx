import { useState } from "react";
import MyButton from "../../sharedComponents/MyButton";

function HelloWorld() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <div>Hello world!</div>
      <div className="text-lg">Test Tailwind</div>
      <MyButton
        className="outline p-2 rounded-sm cursor-pointer bg-green-300"
        count={count}
        onClick={handleClick}
      />
    </>
  );
}

export default HelloWorld;