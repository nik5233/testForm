// import logo from './logo.svg';
// import Account from './pages/acc';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { 
  createTheme,
  ThemeProvider, 
  // styled 
} from '@mui/material/styles';

// import { orange } from '@mui/material/colors';

import './App.css';
import Header from './components/Header';
import VerticalHeader from './components/SideBar';
import SubHeader from './components/SubHeader';

const theme = createTheme({
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

function App() {
  return (
    <ThemeProvider theme={theme}>
        <div className="">
      {/* <Account /> */}
      <Header type={0} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-1 bg-dark py-4" style={{height: '100vh'}}>
            <VerticalHeader />
          </div>
          <div className="col-11 px-0" style={{backgroundColor: '#f7f7f7'}}>
            <Header type={1} />
            <SubHeader />
          </div>
        </div>
      </div>
    </div>
  </ThemeProvider>

  );
}

export default App;
