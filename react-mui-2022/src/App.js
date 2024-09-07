import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import DialogBox from './components/DialogBox'
import Box from "@mui/material/Box";
import './App.css';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Container maxWidth="sm">
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100vh',
        }}>
          <DialogBox/>
        </Box>
      </Container>
    </div>
  );
}

export default App;
