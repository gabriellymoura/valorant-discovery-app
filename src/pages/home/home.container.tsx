import styled from "styled-components";
import { Agent } from "./components/agent.component";
import { InfoInitial } from "./components/info-initial.component";

export const HomeContainer: React.FC<{ toggleTheme: () => void }> = ({
  toggleTheme,
}) => {
  return (
    <Wrapper>
      <ButtonTheme onClick={toggleTheme}>change theme? click me</ButtonTheme>
      <div>
        <InfoInitial />
        <Agent />
        {/* <img src="https://valorant.fandom.com/wiki/Sprays" /> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  width: 100%;
  height: 100vh;

  > div {
    padding: 50px 90px 0;
    display: flex;
    justify-content: space-between;
  }
`;

const ButtonTheme = styled.button`
  all: unset;
  height: 35px;
  padding: 5px;

  color: ${({ theme }) => theme.title.color};
  border: 1px solid ${({ theme }) => theme.title.color};
  cursor: pointer;
`;
