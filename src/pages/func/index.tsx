import { useEffect } from "react";

const TestFunc = () => {
  useEffect(() => {
    const timers = setTimeout(() => {
      console.log("timer");
    });

    window.requestIdleCallback(() => {
      console.log("idle");
    });

    window.requestAnimationFrame(() => {
      console.log("animation");
    });

    const promiseFunc = new Promise((resolve) => {
      resolve("done");
    });
    promiseFunc.then((res) => {
      console.log("rs", res);
    });

    return () => {
      clearTimeout(timers);
    };
  }, []);

  return <div>tsfuncReact</div>;
};

export default TestFunc;
