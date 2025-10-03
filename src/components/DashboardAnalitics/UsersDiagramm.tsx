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
import { getToken } from "@/utils/refreshToken";

const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

export default function UsersDiagramm() {
  const [data, setData] = useState(weekDays.map((day) => ({ day, users: 0 })));
  const token = getToken();
  useEffect(() => {
    const fetchDaily = async () => {
      try {
        const res = await fetch(
          "https://t-mebel.onrender.com/analitics/daily-users",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const { dailyUsers } = await res.json();

        const todayIndex = new Date().getDay();
        // 0 = Вс, 1 = Пн, ... нужно сместить, чтобы Пн был 0
        const index = todayIndex === 0 ? 6 : todayIndex - 1;

        setData((prev) => {
          const updated = [...prev];
          updated[index] = { ...updated[index], users: dailyUsers };
          return updated;
        });
      } catch (error) {
        console.error("Ошибка загрузки статистики:", error);
      }
    };

    fetchDaily();
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
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#1976d2" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Paper>
    </Grid>
  );
}
