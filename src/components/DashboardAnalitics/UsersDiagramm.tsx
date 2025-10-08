"use client";
import { Box, Grid, Paper } from "@mui/material";
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
    <Grid size={{ xs: 12, sm: 6, md: 12 }} sx={{ mb: 2 }}>
      <Paper
        sx={{
          p: 2,
          height: 300,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Место для графика */}
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "text.disabled",
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="activeUsers" fill="#1976d2" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Paper>
    </Grid>
  );
}
