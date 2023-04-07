import styled, { css } from "styled-components";
import { ReactComponent as MoonIcon } from "../assets/moon.svg";
import { ReactComponent as SunIcon } from "../assets/sun.svg";
import { useThemeCustom } from "../hook/theme-context";

export const ToggleTheme = () => {
  const { changeTheme, isLightTheme } = useThemeCustom();

  return (
    <ToggleWrapper>
      <Toggle isLightTheme={isLightTheme}>
        <HiddenSpan>
          {isLightTheme ? "Enable Light Mode" : "Enable Dark Mode"}
        </HiddenSpan>
        <ToggleIcons>
          <SunIcon />
          <MoonIcon />
        </ToggleIcons>
        <ToggleInput
          type="checkbox"
          checked={isLightTheme}
          onClick={changeTheme}
        />
      </Toggle>
    </ToggleWrapper>
  );
};

const ToggleWrapper = styled.label`
  width: 130px;
  display: block;

  align-self: flex-end;
  margin: 1rem 0;
`;

const HiddenSpan = styled.span`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Toggle = styled.div<{ isLightTheme: boolean }>`
  height: 65px;
  width: 130px;
  background-color: ${({ theme }) => theme.toggle.background};

  border-radius: 40px;
  padding: 12px;
  position: relative;
  margin: auto; // Optional to center the toggle
  cursor: pointer;
  transition: background-color 0.5s ease;

  :before {
    content: "";
    display: block;
    height: 41px;
    width: 41px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.toggle.icon};
    position: absolute;
    z-index: 2;
    transform: translate(0);
    transition: transform 0.5s ease;
  }

  ${({ isLightTheme }) =>
    isLightTheme &&
    css`
      :before {
        transform: translateX(65px);
      }
    `}
`;

const ToggleIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 5px;

  > svg {
    fill: ${({ theme }) => theme.toggle.icon};
    height: 30px;
    width: 30px;
    z-index: 0;
  }
`;

const ToggleInput = styled.input`
  position: absolute;
  top: 0;
  opacity: 0;
`;
