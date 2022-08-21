import logo from './logo.svg';
import './App.css';
import React from 'react';
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Button from "@material-ui/core/Button"
import SaveIcon from "@material-ui/icons/Save"
import DeleteIcon from "@material-ui/icons/Delete"
import CheckBox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import TextField from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import {green} from "@material-ui/core/colors"
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6888, #998)",
    border: 0,
    borderRadius: 15,
    marginBottom: 15,
    color: "white",
    padding: '5PX 30px'
    
  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 32,
    }
  },

  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: green[400]
    }
  }
})

function ButtonStyled () {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}


function CheckboxExample () {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel 
      control={
        <CheckBox 
        checked={checked}
        icon={<DeleteIcon/>}
        checkedIcon={<SaveIcon />}
        onChange={(e) => setChecked(e.target.checked)}
        inputProps={{
          "aria-label": "secondary checkbox"
        }}
      />
      }
      label= "Testing Checkbox"
    />
      
    
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            <Typography variant="h2" component='div'>
              Hello Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">
              This is sparta
            </Typography>
            <ButtonStyled />
            <TextField 
              variant='outlined'
              color='secondary'
            />
            <CheckboxExample />
            <ButtonGroup>
              <Button   
                startIcon={<SaveIcon />}
                variant='contained' 
                color='primary'>
                Save
              </Button>
              <Button   
                startIcon={<DeleteIcon />}
                variant='contained' 
                color='secondary'>
                Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
            
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
