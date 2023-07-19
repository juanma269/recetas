import { Visibility, VisibilityOff } from "@mui/icons-material";
import DinnerDiningTwoToneIcon from "@mui/icons-material/DinnerDiningTwoTone";

import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            bgcolor: "primary.main",
            m: 2,
            width: 80,
            height: 80,
          }}
        >
          <DinnerDiningTwoToneIcon
            sx={{
              fontSize: 45,
            }}
          />
        </Avatar>
        <Typography variant="h5">Iniciar Sesión</Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            name="user"
            label="Usuario"
            variant="outlined"
            fullWidth
            autoComplete="email"
            margin="normal"
          />
          <FormControl variant="outlined" margin="normal" fullWidth>
            <InputLabel htmlFor="password">Contraseña</InputLabel>
            <OutlinedInput
              id="password"
              name="password"
              autoComplete="password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Contraseña"
            />
          </FormControl>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            color="secondary"
            sx={{
              marginTop: 3,
              marginBottom: 2,
              bgcolor: "secondary.light",
            }}
          >
            Entrar
          </Button>
          <Typography color="text.secondary">
            <Link href="#" color="inherit">
              Olvidé mi contraseña
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
