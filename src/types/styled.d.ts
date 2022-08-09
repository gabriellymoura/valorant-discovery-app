// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    title: {
      color: string;
      shadow: string;
    };
    valorant: string;
    button: {
      color: string;
      background: string;
      hover: string;
    };
  }
}
