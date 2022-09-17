import styled from "styled-components";

import BackgroundImage from "../../assets/vava-background.png";
import AgentCard from "./components/agent-card.component";

export const SelectAgentContainer = () => {
  return (
    <Wrapper>
      <CardsContainer>
        <AgentCard />
        <AgentCard />
        <AgentCard />
      </CardsContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
`;
const CardsContainer = styled.div`
  height: 100%;
  padding: 50px 90px;
  display: flex;
  justify-content: space-between;
  backdrop-filter: brightness(0.5);
`;
