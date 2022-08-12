import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../../assets/valorant-logo-black.png";
import { ReactComponent as LogoVava } from "../../../assets/valorant.svg";

export const InfoInitial = () => {
  return (
    <Wrapper>
      <ValorantName>
        {/* <ValorantLogo src={Logo} /> */}
        <ValorantLogo />
        <span>VALORANT</span>
      </ValorantName>
      <Title>DISCOVERY</Title>
      <Link to={"/agents"}>
        <InitButton>INICIAR</InitButton>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  > a {
    all: unset;
  }
`;
const ValorantLogo = styled(LogoVava)`
  height: 3.4rem;
  fill: ${({ theme }) => theme.valorant};
  transition: fill 0.5s ease;
`;
const ValorantName = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.5rem;
  margin-bottom: 2.5rem;

  > span {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.valorant};
    transition: color 0.5s ease;
  }
`;
const Title = styled.span`
  font-size: 8rem;
  color: ${({ theme }) => theme.title.color};

  text-shadow: ${({ theme }) => theme.title.shadow};
  transition: text-shadow 0.5s ease;
`;

const InitButton = styled.button`
  all: unset;
  width: 442px;
  height: 147px;
  font-size: 4rem;
  margin-top: 9.5rem;

  background-color: ${({ theme }) => theme.button.background};
  color: ${({ theme }) => theme.button.color};

  transition: background-color 0.5s, ease color 0.5s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.button.hover};
  }
`;
