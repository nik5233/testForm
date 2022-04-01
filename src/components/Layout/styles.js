import {
  // createMuiTheme,
  // responsiveFontSizes,
  makeStyles
} from '@mui/styles';
import { createTheme } from '@mui/material/styles'
import { cyan } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    type: 'light',
    primarytest: {
      light: '#bfc3cc',
      main: '#293655',
      dark: '#19223b',
      contrastText: '#fff',
    },
    primary: {
      light: '#2d92f7',
      main: '#2d92f7',
      dark: '#1c75f3',
      contrastText: '#fff',
    },
    secondary: {
      main: '#df7576',
      light: '#f5d6d6',
      dark: '#d25859',
      contrastText: '#fff',
    },
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#689f38',
        color: '#fff',
      },
    },
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8,
      },
      switchBase: {
        padding: 1,
        '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
          transform: 'translateX(16px)',
          color: '#fff',
          '& + $track': {
            opacity: 1,
            border: 'none',
          },
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 13,
        border: '1px solid #bdbdbd',
        backgroundColor: '#fafafa',
        opacity: 1,
        transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      },
    },
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
    },
    MuiTooltip: {
      arrow: true,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
});

// theme = responsiveFontSizes(theme);

const useStyle = makeStyles(() => ({
  root: {
    width: 'auto',
    // marginLeft: theme.spacing(2),
    // marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    // padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  }
}));

export { theme, useStyle };
