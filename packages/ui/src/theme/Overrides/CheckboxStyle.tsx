import type { CheckboxProps, Theme } from '@mui/material';
import * as React from 'react';

import { Border } from '../GlobalToken/Border';
import { Shadow } from '../GlobalToken/Shadow';

export const CheckboxIcon = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <rect
      x="1"
      y="1"
      width="22"
      height="22"
      rx="3"
      stroke="#CCD4DD"
      strokeWidth="2"
    />
  </svg>
);

export const CheckboxCheckedIcon = (): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1"
      y="1"
      width="22"
      height="22"
      rx="3"
      stroke="#CCD4DD"
      strokeWidth="2"
    />
    <path
      d="M12.4557 16.7314C12.37 16.8759 12.2286 16.9817 12.0642 17.026C11.8998 17.0703 11.7248 17.0497 11.5786 16.9677L7.16945 14.5094C6.71189 14.2544 6.55935 13.682 6.82894 13.2318L7.15397 12.6876C7.42349 12.2367 8.01223 12.0781 8.46978 12.3331L11.2225 13.8677L15.602 6.53782C15.8715 6.08689 16.4608 5.92814 16.9178 6.18335L17.4699 6.4912C17.9274 6.74626 18.08 7.31852 17.8104 7.76886L12.4557 16.7314Z"
      fill="currentColor"
    />
  </svg>
);

export default function Checkbox(theme: Theme) {
  const rootStyle = (ownerState: CheckboxProps) => {
    const smallSize = ownerState.size === 'small';
    const mediumSize = ownerState.size === 'medium';
    const colorOptions = [
      'primary',
      'secondary',
      'error',
      'info',
      'success',
      'warning',
      'default',
    ];
    const colorVariants = colorOptions.includes(ownerState.color || 'default');

    const defaultStyle = {
      // default checkbox
      borderRadius: Border.radius[4],

      '&.Mui-disabled': {
        backgroundColor: theme.palette.fill.bluegray[1],
      },

      ...((smallSize || mediumSize) && {
        // currently only have one design
        padding: 0,
        margin: 10,
        boxShadow: Shadow.sm.default,
      }),

      ...(colorVariants && {
        // currently only have one design
        backgroundColor: theme.palette.background.primary,

        '&.Mui-checked': {
          color: theme.palette.primary.main, // set the color for checkbox icon
          '&.Mui-disabled': { color: theme.palette.fill.bluegray[3] },
        },

        '&:hover': {
          boxShadow: Shadow.sm.hover,
          backgroundColor: theme.palette.background.primary, // when disableRipple is false, overrides the background color for checkbox
          '&.Mui-disabled': { backgroundColor: theme.palette.fill.bluegray[1] },
        },
      }),
    };
    return [defaultStyle];
  };

  return {
    // Name of the component
    MuiCheckbox: {
      defaultProps: {
        disableRipple: true,
        icon: <CheckboxIcon />,
        checkedIcon: <CheckboxCheckedIcon />,
        indeterminateIcon: <CheckboxCheckedIcon />,
      },

      styleOverrides: {
        // Name of the slot
        root: ({ ownerState }: { ownerState: CheckboxProps }) =>
          rootStyle(ownerState),
      },
    },
  };
}
