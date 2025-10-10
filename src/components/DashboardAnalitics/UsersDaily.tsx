"use client";
import { Grid, Paper, Typography, Box } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import { useEffect, useState } from "react";
import { getAnalitycsDay } from "@/api/analitycs";
import type { UserRequest } from "@/types/users";

export default function UsersDaily() {
  const [users, setUsers] = useState<UserRequest[]>();
  const token = localStorage.getItem("token");
  useEffect(() => {
    getAnalitycsDay()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching analytics data:", error);
      });
  }, [token]);
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
<Paper
  sx={{
    p: 3,
    position: "relative",
    overflow: "hidden",
    borderRadius: 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 150,
    background: (theme) =>
      theme.palette.mode === "light"
        ? "#f5f5f5"
        : "linear-gradient(135deg, #0F123B 0%, #090D2E 59%, #020515 100%)",
    color: (theme) => (theme.palette.mode === "light" ? "text.primary" : "#fff"),
    boxShadow: 3,
  }}
>
  <Box>
    <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
      Пользователи за день
    </Typography>
    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
      {users && users.length > 0 ? users[0].activeUsers : 0}
    </Typography>
  </Box>
  <PeopleIcon
    sx={{
      position: "absolute",
      bottom: -10,
      right: -10,
      fontSize: 80,
      color: (theme) => theme.palette.primary.main,
      opacity: 0.15,
      transform: "rotate(20deg)",
    }}
  />
</Paper>

    </Grid>
  );
}
