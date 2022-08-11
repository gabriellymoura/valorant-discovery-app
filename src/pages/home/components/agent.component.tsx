import styled, { css } from "styled-components";
import Sage from "../../../assets/sage-agent.png";
import Raze from "../../../assets/raze-agent.png";
import Yoru from "../../../assets/yoru-agent.png";

export const Agent: React.FC<{
  isLightTheme: boolean;
}> = ({ isLightTheme }) => {
  // return <AgentImage src={OmenGif} />;
  // return <AgentImage src={YoruGif} />;
  return (
    <Images>
      {isLightTheme ? (
        <AgentImage isLightTheme={isLightTheme} src={Sage} />
      ) : (
        <AgentImage isLightTheme={isLightTheme} src={Yoru} />
      )}
    </Images>
  );
};

const Images = styled.div``;

const AgentImage = styled.img<{ isLightTheme: boolean }>`
  height: 848px;
`;
