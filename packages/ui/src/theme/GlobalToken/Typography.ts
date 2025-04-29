export const Typography = {
  fontSize: {
    11: "0.688rem",
    12: "0.75rem",
    14: "0.875rem",
    15: "0.938rem",
    16: "1rem",
    18: "1.125rem",
    20: "1.25rem",
    22: "1.375rem",
    24: "1.5rem",
    28: "1.75rem",
    30: "1.875rem",
    32: "2rem",
    36: "2.25rem",
    38: "2.375rem",
    48: "3rem",
  } as const,
  lineHeight: {
    auto: "normal",
    15: "0.95rem",
    16: "1rem",
    18: "1.125rem",
    20: "1.25rem",
    24: "1.5rem",
    26: "1.625rem",
    28: "1.75rem",
    30: "1.875rem",
    32: "2rem",
    34: "2.125rem",
    35: "2.188rem",
    36: "2.25rem",
    38: "2.375rem",
    40: "2.5rem",
    44: "2.75rem",
    48: "3rem",
    60: "3.75rem",
  } as const,
  fontWeight: {
    light: 300,
    regular: 400,
    semiBold: 600,
    bold: 700,
  } as const,

  fontStyle: {
    normal: "normal",
    italic: "italic",
  } as const,
};

export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({
  sm,
  md,
  lg,
}: {
  sm: number;
  md: number;
  lg: number;
}) {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}
