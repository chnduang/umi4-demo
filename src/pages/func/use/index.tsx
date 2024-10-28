import React, {
  useDeferredValue,
  useState,
  useEffect,
  Suspense,
  InputHTMLAttributes,
} from "react";
import { Button, Input } from "antd";
import TestReactDef from "./components/deferVal";
import "./index.less";
import { PageLoading } from "@ant-design/pro-components";

export type ValueType = InputHTMLAttributes<HTMLInputElement>;

const TestReactHook = (props: any) => {
  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState<any>();
  const countDeferVal = useDeferredValue(inputVal);

  useEffect(() => {
    console.log(process.env);
  }, []);

  const handleBtnClick = () => {
    console.log("btn-click");
    setCount(count + 1);
  };
  const handleOnChange = (e: { target: { value: any } }) => {
    console.log("e", e.target.value);
    setInputVal(e.target.value);
  };

  const isStale = inputVal !== countDeferVal;

  return (
    <>
      <div className="use-wrapper">
        <span>点击了：{count}</span>
        <div className="use-container">
          <Button onClick={handleBtnClick}>test</Button>
          <Input value={inputVal} onChange={handleOnChange} />
        </div>
      </div>
      {/* <Suspense fallback={<h2>Loading...</h2>}> */}
      <div
        style={{
          color: "#f11",
        }}
      >
        <TestReactDef val={inputVal} />
      </div>
      {/* </Suspense> */}
    </>
  );
};

export default TestReactHook;
