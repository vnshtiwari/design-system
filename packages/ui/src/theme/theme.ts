

import {
  createTheme,
  type Theme,
} from '@mui/material';

import { Breakpoint } from './GlobalToken/Breakpoint';
import { Palette } from './GlobalToken/Palette';
import { Typography } from './GlobalToken/Typography';
import componentsOverride from './Overrides';
import shadows, { customShadows } from './shadows';

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

const GRADIENTS = {
  primary: createGradient(Palette.red[4], Palette.red[5]),
  info: createGradient(Palette.blue[4], Palette.blue[5]),
  success: createGradient(Palette.blue[4], Palette.blue[5]),
  warning: createGradient(Palette.blue[4], Palette.blue[5]),
  error: createGradient(Palette.blue[4], Palette.blue[5]),
};

const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};
export const Colors = {
  text: {
    primary: Palette.common.black,
    secondary: Palette.blueGray[7],
    tertiary: Palette.blueGray[6],
    disable: Palette.gray[6],
    highlight: Palette.red[5],
    reverse: {
      primary: Palette.common.white,
    },
  },
  background: {
    primary: Palette.common.white,
    neutral: Palette.common.white,
    footer: Palette.common.white,
  },
  overlay: {
    black: Palette.common.black,
  },
  dividers: {
    primary: Palette.gray[2],
    secondary: Palette.gray[3],
  },
  decorative: {
    skyblue: Palette.skyBlue[5],
    blue: Palette.blue[5],
    orange: Palette.orange[5],
    green: Palette.green[5],
    tealgreen: Palette.tealGreen[5],
    red: Palette.red[4],
  },
  primary: {
    xlight: Palette.red[1],
    lightest: Palette.red[2],
    lighter: Palette.red[3],
    light: Palette.red[4],
    main: Palette.red[5],
    dark: Palette.red[6],
    darker: Palette.red[7],
    darkest: Palette.red[8],
  },
  secondary: {
    xlight: Palette.darkBlue[1],
    lightest: Palette.darkBlue[2],
    lighter: Palette.darkBlue[3],
    light: Palette.darkBlue[4],
    main: Palette.darkBlue[5],
    dark: Palette.darkBlue[6],
    darker: Palette.darkBlue[7],
    darkest: Palette.darkBlue[8],
  },
  error: {
    xlight: Palette.red[1],
    lightest: Palette.red[2],
    lighter: Palette.red[3],
    light: Palette.red[4],
    main: Palette.red[5],
    dark: Palette.red[6],
    darker: Palette.red[7],
    darkest: Palette.red[8],
  },
  warning: {
    xlight: Palette.orange[1],
    lightest: Palette.orange[2],
    lighter: Palette.orange[3],
    light: Palette.orange[4],
    main: Palette.orange[5],
    dark: Palette.orange[6],
    darker: Palette.orange[7],
    darkest: Palette.orange[8],
  },
  info: {
    xlight: Palette.blue[1],
    lightest: Palette.blue[2],
    lighter: Palette.blue[3],
    light: Palette.blue[4],
    main: Palette.blue[5],
    dark: Palette.blue[6],
    darker: Palette.blue[7],
    darkest: Palette.blue[8],
  },
  success: {
    xlight: Palette.green[1],
    lightest: Palette.green[2],
    lighter: Palette.green[3],
    light: Palette.green[4],
    main: Palette.green[5],
    dark: Palette.green[6],
    darker: Palette.green[7],
    darkest: Palette.green[8],
  },
  fill: {
    bluegray: {
      1: Palette.blueGray[1],
      2: Palette.blueGray[2],
      3: Palette.blueGray[3],
      4: Palette.blueGray[4],
      5: Palette.blueGray[5],
      6: Palette.blueGray[6],
      7: Palette.blueGray[7],
      8: Palette.blueGray[8],
      9: Palette.blueGray[9],
    },
    gray: {
      1: Palette.gray[1],
      2: Palette.gray[2],
      3: Palette.gray[3],
      4: Palette.gray[4],
      5: Palette.gray[5],
      6: Palette.gray[6],
      7: Palette.gray[7],
      8: Palette.gray[8],
      9: Palette.gray[9],
    },
    reverse: {
      primary: Palette.common.white,
    },
  },
  gradients: GRADIENTS,
  chart: CHART_COLORS,
};


export const ThemeTypography = {

  fontWeightLight: Typography.fontWeight.light,
  fontWeightRegular: Typography.fontWeight.regular,
  fontWeightSemiBold: Typography.fontWeight.semiBold,
  fontWeightBold: Typography.fontWeight.bold,
};

const theme: Theme = createTheme({
  breakpoints: {
    values: Breakpoint,
  },
  palette: {
    mode: 'light',
    ...Colors,
  },
  typography: {
    ...ThemeTypography,
    fontSize: 16,
    button: {
      textTransform: 'none',
    },
  },
  shadows:  shadows.light,
  customShadows: customShadows.light,
  components: {
    MuiCssBaseline: {
    },
  },
});

theme.components = { ...theme.components, ...componentsOverride(theme) };

export const lightTheme = theme;