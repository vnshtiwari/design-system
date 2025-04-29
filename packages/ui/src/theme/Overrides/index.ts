import type { Theme } from '@mui/material/styles';


import Button from './ButtonStyle';
import Checkbox from './CheckboxStyle';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    Button(theme),
    Checkbox(theme)
  );
}