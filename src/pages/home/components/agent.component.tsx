import styled from "styled-components";
import Sage from "../../../assets/sage-agent.png";
// import OmenGif from "../../../assets/omen-gif.gif";
// import YoruGif from "../../../assets/yoru-gif.gif";

export const Agent = () => {
  // return <AgentImage src={OmenGif} />;
  // return <AgentImage src={YoruGif} />;
  return <AgentImage src={Sage} />;
};

const AgentImage = styled.img`
  height: 848px;
`;
