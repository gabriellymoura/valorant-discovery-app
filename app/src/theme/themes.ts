import { DefaultTheme } from "styled-components";

export const LightTheme: DefaultTheme = {
  background: "#ede8e2",
  title: {
    color: "#BD3944",
    shadow: "12px 7px 4px rgba(0, 0, 0, 0.25)",
  },
  valorant: "#000",
  button: {
    color: "#fff",
    background: "#BD3944",
    hover: "#71242b",
  },
  toggle: {
    background: "#BD3944",
    icon: "#ede8e2",
  },
};

export const DarkTheme: DefaultTheme = {
  background: "#110E24",
  title: {
    color: "#EAFDF9",
    shadow: "5px 12px 4px rgba(238, 218, 218, 0.31);",
  },
  valorant: "#F94555",
  button: {
    color: "#fff",
    background: "#BD3944",
    hover: "#71242b",
  },
  toggle: {
    background: "#EAFDF9",
    icon: "#110E24",
  },
};
