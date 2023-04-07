import styled from "styled-components";
import { ToggleTheme } from "../../components/toggle-theme.component";
import BackgroundImage from "../../assets/vava-background.png";
import AgentCard from "./components/agent-card.component";
import agentsJson from "../../agent.json";

export const SelectAgentContainer = () => {
  return (
    <Wrapper>
      <ToggleTheme />
      <CardsContainer>
        {agentsJson.agents.map((agent) => (
          <AgentCard
            agentImage={agent.agentImage}
            description={agent.description}
            name={agent.name}
            role={agent.role}
          />
        ))}
      </CardsContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${BackgroundImage});
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: soft-light;
  background-size: cover;
  padding: 0 100px 100px 100px;

  display: flex;
  flex-direction: column;
`;
const CardsContainer = styled.div`
  background: ${({ theme }) => theme.background};
  border-radius: 41px;
  height: 100%;
  padding: 50px 70px;
  display: flex;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  column-gap: 70px;
  row-gap: 50px;
`;
