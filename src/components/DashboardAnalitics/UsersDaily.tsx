"use client";
import { Grid, Paper, Typography } from "@mui/material";
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
          p: 2,
          position: "relative",
          overflow: "hidden",
          height: 150,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          justifyContent: "center",
        }}
      >
        <Typography variant="h6">Пользователи за день</Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          {users && users?.length > 0 ? users[0]?.activeUsers : 0}
        </Typography>
        <PeopleIcon
          sx={{
            position: "absolute",
            top: "50%",
            right: 10,
            fontSize: 80,
            color: "primary.main",
            opacity: 0.1,
          }}
        />
      </Paper>
    </Grid>
  );
}
