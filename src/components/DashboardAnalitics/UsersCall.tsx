"use client";
import { Grid, Paper, Typography, Box } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import { useState, useEffect } from "react";
import { getCallClick } from "@/api/analitycs";

export default function UsersCall() {
  const [users, setUsers] = useState<string | null>(null);
  const token = localStorage.getItem("token");
  useEffect(() => {
    getCallClick().then((data) => setUsers(data));
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
          color: (theme) =>
            theme.palette.mode === "light" ? "text.primary" : "#fff",
          boxShadow: 3,
        }}
      >
        <Box>
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
            Конверсий на звонок
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {users?.length || 0}
          </Typography>
        </Box>
        <CallIcon
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
