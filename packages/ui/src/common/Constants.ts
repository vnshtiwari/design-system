import type { TransformPropsConfigMappingsType } from '../theme/ThemeTypes';

export const COLOR_OPTIONS = ['primary', 'secondary'] as const;

export const SHAPE_RADIUS_OPTIONS = [
  'border-radius-0',
  'border-radius-1',
  'border-radius-2',
  'border-radius-3',
  'border-radius-4',
  'border-radius-5',
  'border-radius-6',
  'border-radius-7',
] as const;

export const FONT_WEIGHT_OPTIONS = [
  'fontWeightLight',
  'fontWeightRegular',
  'fontWeightSemiBold',
  'fontWeightBold',
] as const;

export const FONT_STYLE_OPTIONS = [
  'font-style-normal',
  'font-style-italic',
] as const;

export const LINE_HEIGHT_OPTIONS = [
  'line-height-0',
  'line-height-1',
  'line-height-2',
  'line-height-3',
  'line-height-4',
  'line-height-5',
  'line-height-6',
  'line-height-7',
  'line-height-8',
  'line-height-9',
  'line-height-10',
  'line-height-11',
  'line-height-12',
  'line-height-13',
  'line-height-14',
  'line-height-15',
  'line-height-16',
  'line-height-17',
] as const;

export const BORDER_WIDTH_OPTIONS = [
  'border-width-1',
  'border-width-2',
  'border-width-3',
  'border-width-4',
  'border-width-5',
] as const;

export const SPACE_OPTIONS = [
  'space-1',
  'space-2',
  'space-3',
  'space-4',
  'space-5',
  'space-6',
  'space-7',
  'space-8',
] as const;

export const SIZE_OPTIONS = [
  'size-0',
  'size-1',
  'size-2',
  'size-3',
  'size-4',
  'size-5',
  'size-6',
  'size-7',
  'size-8',
  'size-9',
  'square-1',
  'square-2',
  'square-3',
  'square-4',
  'square-5',
  'square-6',
  'square-7',
] as const;

export const OPACITY_OPTIONS = [
  'opacity-5',
  'opacity-8',
  'opacity-13',
  'opacity-15',
  'opacity-20',
] as const;

export const SHADOW_OPTIONS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export const ICON_SIZE_OPTIONS = ['icon-sm', 'icon-md', 'icon-lg'] as const;

export const ICON_VARIANT_OPTIONS = [
  'Arrow Down',
  'Arrow Filled',
  'Arrow Outline',
  'Arrow Up',
  'Arrow',
  'Badge',
  'Burger',
  'Calculator',
  'Call Filled',
  'Call Outline',
  'Cart',
  'Cash Value',
  'Checked',
  'Children Education',
  'Closed',
  'Collapse Filled',
  'Collapse Outline',
  'Contact',
  'Cookies',
  'Download',
  'Error',
  'Expand Filled',
  'Expand Outline',
  'Female',
  'Flexible Payment',
  'Guide',
  'Home Active',
  'Home Normal',
  'Investment',
  'Male',
  'Married',
  'Mortgage',
  'Multiple Coverage',
  'Op1 Low',
  'Op1 Medium',
  'Op2 Low',
  'Op3 High',
  'Op1 High',
  'PDF',
  'Phone',
  'Play',
  'Profile Active',
  'Profile Normal',
  'Protection Investment',
  'Protection',
  'Saving',
  'Social Facebook',
  'Search',
  'Share',
  'Single',
  'Social Linkedin',
  'Social Youtube',
  'Star',
  'Stories',
  'Talk',
  'Time',
  'WWW',
];

export const COLOR_OPTION_KEY = 'main';

export const COMPONENT_NAME_ENUM = {
  Avatar: 'avatar',
  Button: 'button',
  Badge: 'badge',
  Icon: 'icon',
  Typography: 'typography',
  Alert: 'alert',
  Link: 'link',
  Box: 'box',
  CircularProgress: 'circularProgress',
  LinearProgress: 'linearProgress',
  AppBar: 'appBar',
  Card: 'card',
  Pagination: 'pagination',
  ButtonGroup: 'buttonGroup',
  Checkbox: 'checkbox',
  FormControl: 'formControl',
  IconButton: 'iconButton',
  Radio: 'Radio',
  InputLabel: 'inputLabel',
  Select: 'select',
  Slider: 'slider',
  Switch: 'switch',
  Textfield: 'textfield',
  ToggleButton: 'toggleButton',
  ToggleButtonGroup: 'toggleButtonGroup',
};

export const PROPS_FOR_COLOR_OPTION_KEY = ['color', 'borderColor'];

export const TransformPropsConfigMappings: TransformPropsConfigMappingsType[] =
  [
    {
      prop: 'fontWeight',
      config: 'isFontWeightTransformationRequired',
      isTypography: true,
    },
    {
      prop: 'fontStyle',
      config: 'isfontStyleTransformationRequired',
      isTypography: true,
    },
    {
      prop: 'lineHeight',
      config: 'isLineHeightTransformationRequired',
      isTypography: true,
    },
    {
      prop: 'color',
      config: 'isColorTransformationRequired',
      isTypography: true,
    },
    {
      prop: 'borderRadius',
      config: 'isBorderRadiusTransformationRequired',
    },
    {
      prop: 'borderColor',
      config: 'isBorderColorTransformationRequired',
    },
    {
      prop: 'size',
      config: 'isSizeTransformationRequired',
    },
    {
      prop: 'iconSize',
      config: 'isIconSizeTransformationRequired',
    },
    {
      prop: 'iconColor',
      config: 'isIconColorTransformationRequired',
      isPalette: true,
    },
    {
      prop: 'iconBackgroundColor',
      config: 'isIconBackgroundColorTransformationRequired',
      isPalette: true,
    },
  ];