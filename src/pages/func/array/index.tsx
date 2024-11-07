import React, { useEffect } from "react";
import testFunc from "./utils";

const TestArray = () => {
  useEffect(() => {
    testFunc();
  }, []);

  return <div>TestArray</div>;
};

export default TestArray;
