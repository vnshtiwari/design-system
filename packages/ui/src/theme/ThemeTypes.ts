declare module "@mui/material/styles" {
  interface TypographyVariantsOptions {
    fontWeightSemiBold: number;
  }

  interface Palette {
    overlay: {
      black: string;
    };
    dividers: {
      primary: string;
      secondary: string;
    };
    decorative: {
      skyblue: string;
      blue: string;
      orange: string;
      green: string;
      tealgreen: string;
      red: string;
    };
    fill: {
      bluegray: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
      };
      gray: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
      };
      reverse: {
        primary: string;
      };
    };
  }

  interface PaletteOptions {
    overlay: {
      black: string;
    };
    dividers: {
      primary: string;
      secondary: string;
    };
    decorative: {
      skyblue: string;
      blue: string;
      orange: string;
      green: string;
      tealgreen: string;
      red: string;
    };
    fill: {
      bluegray: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
      };
      gray: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
      };
      reverse: {
        primary: string;
      };
    };
  }

  interface PaletteColor {
    xlight: string;
    lightest: string;
    lighter: string;
    light: string;
    main: string;
    dark: string;
    darker: string;
  }

  interface TypeText {
    tertiary: string;
    disable: string;
    highlight: string;
    reverse: {
      primary: string;
    };
  }

  interface TypeBackground {
    primary: string;
    neutral: string;
    footer: string;
  }
}

declare module "@mui/material" {
  interface Color {
    0: string;
    500_8: string;
    500_12: string;
    500_16: string;
    500_24: string;
    500_32: string;
    500_48: string;
    500_56: string;
    500_80: string;
  }
}

export type ColorSchema =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";
