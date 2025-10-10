"use client";
import {
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import PageviewIcon from "@mui/icons-material/Pageview";
import { useState, useEffect } from "react";
import { getPageVisits } from "@/api/analitycs";

interface RoutesStats {
  page: string;
  views: number;
}

export default function UsersRouts() {
  const [routes, setRoutes] = useState<RoutesStats[]>();
  const token = localStorage.getItem("token");
  useEffect(() => {
    getPageVisits().then((data) => setRoutes(data));
  }, [token]);
  return (
    <Grid size={{ xs: 12, sm: 6, md: 8 }}>
      <Paper
        sx={{
          p: 3,
          position: "relative",
          overflow: "hidden",
          height: "100%",
          borderRadius: 3,
          boxShadow: 3,
          background: (theme) =>
            theme.palette.mode === "light"
              ? "#f5f5f5"
              : "linear-gradient(135deg, #0F123B 0%, #090D2E 59%, #020515 100%)",
          color: (theme) =>
            theme.palette.mode === "light" ? "text.primary" : "#fff",
        }}
      >
        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 500 }}>
          Наиболее посещаемые страницы
        </Typography>

        <TableContainer sx={{ maxHeight: 300 }}>
          <Table size="small">
            <TableBody>
              {routes
                ?.filter(
                  (rout) => rout.page !== "/admin" && rout.page !== "/signin"
                )
                .map((rout) => (
                  <TableRow key={rout.page} hover>
                    <TableCell sx={{ maxWidth: 500, overflow: "hidden" }}>
                      {rout.page}
                    </TableCell>
                    <TableCell align="right">{rout.views}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <PageviewIcon
          sx={{
            position: "absolute",
            bottom: -10,
            right: -10,
            fontSize: 80,
            color: (theme) => theme.palette.primary.main,
            opacity: 0.15,
            transform: "rotate(15deg)",
          }}
        />
      </Paper>
    </Grid>
  );
}
