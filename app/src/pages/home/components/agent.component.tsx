import styled, { css } from "styled-components";
import Sage from "../../../assets/sage-agent.png";
import Raze from "../../../assets/raze-agent.png";
import Yoru from "../../../assets/yoru-agent.png";
import { useThemeCustom } from "../../../hook/theme-context";

export const Agent = () => {
  const { isLightTheme } = useThemeCustom();

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
