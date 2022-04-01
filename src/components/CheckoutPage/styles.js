import { makeStyles } from '@mui/styles';
export default makeStyles(theme => ({
  stepper: {
    padding: theme.spacing(3, 0, 5),
    backgroundColor: '#e3e3e3'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    margin: theme.spacing(3),  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative'
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  },
  // connector: {
  //   borderColor: 'red',
  // }
}));
