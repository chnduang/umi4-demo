import React, { useEffect } from "react";

const MyWs = () => {
  useEffect(() => {
    const ws = new WebSocket("ws://127.0.0.1:9090");
    ws.onopen = () => {
      console.log("client open");
      ws.send("client open---");
    };
    ws.onmessage = (e) => {
      console.log("msg---", e.data.toString());
    };
  }, []);

  return <div>wseee</div>;
};

export default MyWs;
