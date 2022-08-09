import styled from "styled-components";
import Logo from "../../../assets/valorant-logo-black.png";

export const InfoInitial = () => {
  return (
    <Wrapper>
      <ValorantName>
        <ValorantLogo src={Logo} />
        <span>VALORANT</span>
      </ValorantName>
      <Title>DISCOVERY</Title>
      <InitButton>INICIAR</InitButton>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const ValorantLogo = styled.img`
  height: 58px;
`;
const ValorantName = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.5rem;
  margin-bottom: 40px;

  > span {
    font-size: 40px;
    color: ${({ theme }) => theme.valorant};
  }
`;
const Title = styled.span`
  font-size: 128px;
  color: ${({ theme }) => theme.title};
`;

const InitButton = styled.button`
  all: unset;
  width: 442px;
  height: 147px;
  font-size: 70px;
  margin-top: 155px;

  background-color: ${({ theme }) => theme.button.background};
  color: ${({ theme }) => theme.button.color};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.button.hover};
  }
`;
