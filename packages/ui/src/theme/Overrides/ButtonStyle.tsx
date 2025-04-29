import type { LoadingButtonProps as ButtonProps } from '@mui/lab';
import { CircularProgress, type Theme } from '@mui/material';
import React from 'react';

import { Border } from '../GlobalToken/Border';
import { Shadow } from '../GlobalToken/Shadow';
import { Typography } from '../GlobalToken/Typography';

// ----------------------------------------------------------------------

export default function Button(theme: Theme) {
  const rootStyle = (ownerState: ButtonProps) => {
    const containedVariant = ownerState.variant === 'contained';

    const outlinedVariant = ownerState.variant === 'outlined';

    const textVariant = ownerState.variant === 'text';

    const smallSize = ownerState.size === 'small';

    const mediumSize = ownerState.size === 'medium';

    const largeSize = ownerState.size === 'large';

    const primaryColor = ownerState.color === 'primary';

    const secondaryColor = ownerState.color === 'secondary';

    const loading = ownerState.loading === true;

    const defaultStyle = {
      // CONTAINED
      ...(containedVariant && {
        borderRadius: Border.radius.full,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
          boxShadow: Shadow.lg.hover,
        },
      }),
      // OUTLINED
      ...(outlinedVariant && {
        borderRadius: Border.radius.full,
        color: theme.palette.primary.main,
        borderWidth: 2,
        borderColor: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderColor: theme.palette.primary.main,
        },
      }),
      // TEXT
      ...(textVariant && {
        borderRadius: Border.radius.full,
      }),
    };

    const colorStyle = {
      ...(textVariant && {
        ...(primaryColor && {
          color: theme.palette.text.highlight,
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&:focus': {
            backgroundColor: 'transparent',
          },
        }),
        ...(secondaryColor && {
          color: theme.palette.text.primary,
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&:focus': {
            backgroundColor: 'transparent',
          },
        }),
      }),
    };

    const sizeState = {
      // CONTAINED & OUTLINED
      ...((containedVariant || outlinedVariant) && {
        ...(smallSize && {
          fontSize: Typography.fontSize[16],
          fontWeight: Typography.fontWeight.semiBold,
          lineHeight: Typography.lineHeight[26],
          minWidth: 165,
          height: 42,
          paddingTop: 8,
          paddingRight: 16,
          paddingBottom: 8,
          paddingLeft: 16,
        }),
        ...(mediumSize && {
          fontSize: Typography.fontSize[18],
          fontWeight: Typography.fontWeight.semiBold,
          lineHeight: Typography.lineHeight[28],
          minWidth: 200,
          paddingTop: 12,
          paddingRight: 24,
          paddingBottom: 12,
          paddingLeft: 24,
        }),
        ...(largeSize && {
          fontSize: Typography.fontSize[20],
          fontWeight: Typography.fontWeight.semiBold,
          lineHeight: Typography.lineHeight[30],
          minWidth: 250,
          height: 68,
          paddingTop: 12,
          paddingRight: 28,
          paddingBottom: 12,
          paddingLeft: 28,
        }),
      }),
      // TEXT
      ...(textVariant && {
        ...(smallSize && {
          fontSize: Typography.fontSize[14],
          fontWeight: Typography.fontWeight.semiBold,
          lineHeight: Typography.lineHeight[24],
          minWidth: 71,
          height: 32,
          paddingTop: 4,
          paddingRight: 12,
          paddingBottom: 4,
          paddingLeft: 12,
        }),
        ...(mediumSize && {
          fontSize: Typography.fontSize[16],
          fontWeight: Typography.fontWeight.semiBold,
          lineHeight: Typography.lineHeight[24],
          minWidth: 86,
          height: 40,
          paddingTop: 8,
          paddingRight: 16,
          paddingBottom: 8,
          paddingLeft: 16,
        }),
        ...(largeSize && {
          fontSize: Typography.fontSize[18],
          fontWeight: Typography.fontWeight.semiBold,
          lineHeight: Typography.lineHeight[28],
          minWidth: 112,
          height: 52,
          paddingTop: 12,
          paddingRight: 26,
          paddingBottom: 12,
          paddingLeft: 26,
        }),
      }),
    };

    const disabledState = {
      '&.Mui-disabled': {
        // CONTAINED
        ...(containedVariant &&
          !loading && {
            color: theme.palette.text.disable,
            backgroundColor: theme.palette.fill.gray[3],
          }),
        // OUTLINED
        ...(outlinedVariant &&
          !loading && {
            color: theme.palette.text.disable,
            borderColor: theme.palette.fill.gray[6],
            borderWidth: 2,
          }),
        // TEXT
        ...(textVariant &&
          !loading && {
            color: theme.palette.text.disable,
          }),
      },
    };

    const loadingState = {
      '&.MuiLoadingButton-loading': {
        // CONTAINED
        ...(containedVariant && {
          backgroundColor: theme.palette.primary.main,
        }),
        // OUTLINED
        ...(outlinedVariant && {
          borderColor: theme.palette.primary.main,
          borderWidth: 2,
        }),
      },
      '& .MuiCircularProgress-root': {
        // CONTAINED
        ...(containedVariant && {
          color: theme.palette.fill.reverse.primary,
        }),
        // OUTLINED
        ...(outlinedVariant && {
          color: theme.palette.primary.main,
        }),
        // TEXT
        ...(textVariant && {
          color: theme.palette.primary.main,
        }),
      },
    };

    return [defaultStyle, sizeState, colorStyle, disabledState, loadingState];
  };

  return {
    MuiLoadingButton: {
      defaultProps: {
        variant: 'contained',
        size: 'medium',
        disableElevation: true,
        disableRipple: true,
        loadingIndicator: <CircularProgress size={20} thickness={4} />,
      },
      styleOverrides: {
        root: ({ ownerState }: { ownerState: ButtonProps }) =>
          rootStyle(ownerState),
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'medium',
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ ownerState }: { ownerState: ButtonProps }) =>
          rootStyle(ownerState),
      },
    },
  };
}
