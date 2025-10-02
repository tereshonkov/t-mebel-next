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

const data = [
  { day: "Пн", users: 120 },
  { day: "Вт", users: 150 },
  { day: "Ср", users: 90 },
  { day: "Чт", users: 200 },
  { day: "Пт", users: 170 },
  { day: "Сб", users: 80 },
  { day: "Вс", users: 50 },
];

export default function UsersDiagramm() {
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
