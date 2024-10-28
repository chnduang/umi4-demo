import React, { useDeferredValue, useState, useEffect } from "react";
import { Button } from "antd";
import "./index.less";

const TestReactDef = (props: any) => {
  const { val } = props;
  return <div className="use-def">def:{val}</div>;
};

export default TestReactDef;
