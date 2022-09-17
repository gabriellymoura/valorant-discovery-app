import styled from "styled-components";
import iniciatorImg from "../../../assets/iniciator.svg";
import fadeImg from "../../../assets/fadeicon.png";

const AgentCard = () => {
  return (
    <Wrapper>
      <AgentDisplay>
        <AgentImage src={fadeImg} />
        <AgentName>FADE</AgentName>
        <AgentTypeLogo>
          <img src={iniciatorImg} />
        </AgentTypeLogo>
        <AgentType>INICIATOR</AgentType>
      </AgentDisplay>
      <Description>
        <p>
          Turkish bounty hunter Fade unleashes the power of raw nightmare to
          seize enemy secrets. Attuned with terror itself, she hunts down
          targets and reveals their deepest fears - before crushing them in the
          dark
        </p>
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 300px;
  height: max-content;
  background-color: #bd3944;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 1rem;
`;

const AgentDisplay = styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows: 1fr auto auto auto 1fr;
  grid-template-columns: max-content auto;
  grid-template-areas:
    "image ."
    "image name"
    "image logo"
    "image type"
    "image .";
`;

const AgentImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 12px;
  grid-area: image;
`;
const AgentTypeLogo = styled.div`
  grid-area: logo;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 22px 0;

  > img {
    width: 23px;
    height: 23px;
  }
`;
const AgentType = styled.span`
  font-size: 20px;
  grid-area: type;
`;

const AgentName = styled.span`
  font-size: 32px;
  height: min-content;
  color: #fff;
  background: #000000;
  padding: 0.3rem;
  box-sizing: border-box;
  grid-area: name;
`;
const Description = styled.div`
  margin-top: 36px;
  background: #0f1923;
  padding: 1rem;

  > p {
    font-size: 15px;
    color: #fff;
    text-align: center;
  }
`;

export default AgentCard;
