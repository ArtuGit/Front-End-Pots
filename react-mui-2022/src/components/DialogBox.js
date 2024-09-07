import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const DialogBox = (props) => {
  return (
      <Box
        pt={2}
        component="form"
        sx={{
          bgcolor: 'background.paper',
          border: 1,
          borderRadius: '2px',
          boxShadow: 1,
          '& .MuiTextField-root': {m: 1, width: '25ch'},
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="first-name" label="First Name" variant="outlined"/>
        <TextField id="last-name" label="Last Name" variant="outlined"/>
        <Container sx={{my: 3}} maxWidth="sm">
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </Container>
      </Box>
  )
}

export default DialogBox