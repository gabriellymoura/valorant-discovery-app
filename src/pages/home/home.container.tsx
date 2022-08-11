import styled from "styled-components";
import { Agent } from "./components/agent.component";
import { InfoInitial } from "./components/info-initial.component";
import { ToggleTheme } from "./components/toggle-theme.component";

export const HomeContainer: React.FC<{
  isLightTheme: boolean;
  changeTheme: () => void;
}> = ({ changeTheme, isLightTheme }) => {
  return (
    <Wrapper>
      <ToggleTheme isLightTheme={isLightTheme} changeTheme={changeTheme} />
      <div>
        <InfoInitial />
        <Agent isLightTheme={isLightTheme} />
        {/* <img src="https://valorant.fandom.com/wiki/Sprays" /> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.background};

  transition: background-color 0.5s ease;
  display: flex;
  flex-direction: column;

  > div {
    padding: 50px 90px 0;
    display: flex;
    justify-content: space-between;
  }
`;
