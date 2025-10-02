"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useThemeContext } from "@/components/ThemeProviderClient/ThemeProviderClient";
import {
  Box,
  Container,
  Paper,
  Typography,
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import CallIcon from "@mui/icons-material/Call";
import PageviewIcon from "@mui/icons-material/Pageview";
import CommentIcon from "@mui/icons-material/Comment";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

import Sidebar from "@/components/Sidebar/Sidebar";
import HeaderAdmin from "@/components/HeaderAdmin/HeaderAdmin";

const data = [
  { day: "Пн", users: 120 },
  { day: "Вт", users: 150 },
  { day: "Ср", users: 90 },
  { day: "Чт", users: 200 },
  { day: "Пт", users: 170 },
  { day: "Сб", users: 80 },
  { day: "Вс", users: 50 },
];

export default function Admin() {
  const [tokenChecked, setTokenChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/signin");
    } else {
      setTokenChecked(true);
    }
  }, [router]);

  const { mode, toggleMode } = useThemeContext();

  if (!tokenChecked) return null;

  return (
    <Box display="flex" minHeight="100vh">
      <Sidebar />
      {/* Main content */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Container sx={{ flexGrow: 1 }}>
          <HeaderAdmin mode={mode} toggleMode={toggleMode} />

          <Grid container spacing={2}>
            {/* Пользователи */}
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
                  20
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
                <Typography variant="h6">Пользователи за месяц</Typography>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  520
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
                <Typography variant="h6">Конверсий на звонок</Typography>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  75
                </Typography>
                <CallIcon
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

            <Grid size={{ xs: 12, sm: 6, md: 8 }}>
              <Paper
                sx={{
                  p: 2,
                  position: "relative",
                  overflow: "hidden",
                  height: "auto",
                }}
              >
                <Typography variant="h6" sx={{ mb: 15 }}>
                  Наиболее посещаемые страницы
                </Typography>

                <TableContainer>
                  <Table size="small">
                    <TableBody>
                      <TableRow>
                        <TableCell>/home</TableCell>
                        <TableCell align="right">1500 просмотров</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>/about</TableCell>
                        <TableCell align="right">900 просмотров</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>/contacts</TableCell>
                        <TableCell align="right">700 просмотров</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>

                <PageviewIcon
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    fontSize: 80,
                    color: "primary.main",
                    opacity: 0.1,
                  }}
                />
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper
                sx={{
                  p: 2,
                  position: "relative",
                  overflow: "hidden",
                  height: "100%",
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Последние отзыв
                </Typography>

                <List>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemText
                      primary="Имя"
                      secondary="Комментарий"
                      primaryTypographyProps={{ fontWeight: "bold" }}
                    />
                  </ListItem>
                </List>

                <CommentIcon
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    fontSize: 60,
                    color: "primary.main",
                    opacity: 0.1,
                  }}
                />
              </Paper>
            </Grid>

            {/* Нижняя широкая колонка на всю строку */}
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
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
