import { useState } from "react";
import AgoraUIKit from "agora-react-uikit";

const App = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: "78d78ebf9a714677993b2207099d6b67",
    channel: "test",
    token: "",
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
  );
};

export default App;
