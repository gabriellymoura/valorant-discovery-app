import styled from "styled-components";
import { Agent } from "./components/agent.component";
import { InfoInitial } from "./components/info-initial.component";
import { ToggleTheme } from "../../components/toggle-theme.component";

export const HomeContainer = () => {
  return (
    <Wrapper>
      <ToggleTheme />
      <div>
        <InfoInitial />
        <Agent />
        {/* <img src="https://valorant.fandom.com/wiki/Sprays" /> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    padding: 50px 90px 0;
    display: flex;
    justify-content: space-between;
  }
`;
