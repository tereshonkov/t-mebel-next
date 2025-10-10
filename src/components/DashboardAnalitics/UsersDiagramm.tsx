"use client";
import { Box, Grid, Paper, Typography } from "@mui/material";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { useState, useEffect } from "react";
import { getAnalitycsWeek } from "@/api/analitycs";
import { UserRequest } from "@/types/users";

export default function UsersDiagramm() {
  const [data, setData] = useState<UserRequest[]>();
  const token = localStorage.getItem("token");
  useEffect(() => {
    getAnalitycsWeek().then((res) => {
      const sortedData = res?.sort((a: UserRequest, b: UserRequest) => a.date.localeCompare(b.date));
      setData(sortedData);
    });
  }, [token]);
  return (
    <Grid size={{ xs: 12, sm: 6, md: 8 }}>
<Paper
  sx={{
    p: 3,
    height: 300,
    position: "relative",
    overflow: "hidden",
    borderRadius: 3,
    boxShadow: 3,
    background: (theme) =>
      theme.palette.mode === "light"
        ? "#f5f5f5"
        : "linear-gradient(135deg, #0F123B 0%, #090D2E 59%, #020515 100%)",
    color: (theme) => (theme.palette.mode === "light" ? "text.primary" : "#fff"),
  }}
>
  <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 500 }}>
    Пользователи за день
  </Typography>
  <Box
    sx={{
      height: "calc(100% - 32px)", // оставляем место под заголовок
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: (theme) => theme.palette.text.disabled,
    }}
  >
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="activeUsers" fill="#2E335B" />
      </BarChart>
    </ResponsiveContainer>
  </Box>
</Paper>

    </Grid>
  );
}
