import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Box, Container } from "@mui/system";

function App() {
  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          margionTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <h2>
          Sing in
        </h2>
        <TextField
          margin="normal"
          label="Email Address"
          required
          fullWidth
          name="email"
          autoComplete="emails"
          autoFocus
        />
        <TextField
          margin="normal"
          label="Password"
          type="password"
          required
          fullWidth
          name="email"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me!"
        />

        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb:2}}>
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link>Forgot password?</Link>
          </Grid>
          <Grid item>
            <Link> Sign Up</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
