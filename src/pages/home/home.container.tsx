import styled from "styled-components";
import { Agent } from "./components/agent.component";
import { InfoInitial } from "./components/info-initial.component";

export const HomeContainer = () => {
  return (
    <Wrapper>
      <InfoInitial />
      <Agent />
      {/* <img src="https://valorant.fandom.com/wiki/Sprays" /> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #ede8e2;
  width: 100%;
  height: 100vh;
  padding: 150px 300px;
  display: flex;
  justify-content: space-between;
`;
