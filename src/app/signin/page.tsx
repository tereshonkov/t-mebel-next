"use client";

import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface LoginFormProps {
  email: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();
  const [value, setValue] = useState<LoginFormProps>({
    email: "",
    password: "",
  });

  const onSubmit = async (): Promise<void> => {
    try {
     const token = await toast.promise(
        (async () => {
          const res = await fetch("https://t-mebel.onrender.com/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: value.email,
              password: value.password,
            }),
          });

          if (!res.ok) {
            // Можно показать сообщение от сервера
            const errorData = await res.json().catch(() => ({}));
            throw new Error(errorData.message || `Ошибка ${res.status}`);
          }

          return res.text();
        })(),
        {
          loading: "Идет соединение...",
          success: "Вход разрешен!",
          error: (err: unknown) =>
            `Ошибка при входе: ${(err as Error).message}`,
        }
      );
      localStorage.setItem("token", token);
      router.push("/admin");
    } catch (error: unknown) {
      console.error("Error:", error);
      toast.error((error as Error)?.message || "Ошибка входа");
    }
  };

  // const reg = async (): Promise<void> => {
  //   try {
  //     await toast.promise(
  //       (async () => {
  //         const res = await fetch("https://t-mebel.onrender.com/auth/register", {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             name: "Дмитрий",
  //             email: "tereshonkov.dima@gmail.com",
  //             password: "682747Ljv",
  //             role: "ADMIN",
  //           }),
  //         });

  //         if (!res.ok) {
  //           const errorData = await res.json().catch(() => ({}));
  //           throw new Error(errorData.message || `Ошибка ${res.status}`);
  //         }

  //         return res.json();
  //       })(),
  //       {
  //         loading: "Идет соединение...",
  //         success: "Регистрация прошла успешно!",
  //         error: (err: unknown) =>
  //           `Ошибка при регистрации: ${(err as Error).message}`,
  //       }
  //     );
  //   } catch (error: unknown) {
  //     console.error("Error:", error);
  //     toast.error((error as Error)?.message || "Ошибка регистрации");
  //   }
  // }

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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
            // reg();
          }}
        >
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            margin="normal"
            value={value.email}
            onChange={(e) => setValue({ ...value, email: e.target.value })}
            required
          />
          <TextField
            fullWidth
            label="Пароль"
            name="password"
            type="password"
            margin="normal"
            value={value.password}
            onChange={(e) => setValue({ ...value, password: e.target.value })}
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
