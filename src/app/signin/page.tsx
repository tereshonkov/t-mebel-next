"use client";

import { Box, Paper, Typography, TextField, Button } from "@mui/material";

export default function LoginForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // обработка логина
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(270deg, #6a11cb, #2575fc, #6a11cb, #2575fc)",
        backgroundSize: "400% 400%",
        animation: "gradientAnim 15s ease infinite",
        "@keyframes gradientAnim": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: 400,
          borderRadius: 3,
          backgroundColor: "rgba(255,255,255,0.9)",
        }}
      >
        <Typography variant="h5" textAlign="center" mb={3}>
          Войти в аккаунт
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Пароль"
            name="password"
            type="password"
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Войти
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
