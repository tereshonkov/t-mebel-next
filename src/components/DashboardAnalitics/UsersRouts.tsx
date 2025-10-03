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
import { getToken } from "@/utils/refreshToken";

interface RoutesStats {
  url: string;
  views: number 
}

export default function UsersRouts() {
  const [routes, setRoutes] = useState<RoutesStats[]>();
  const token = getToken();
  useEffect(() => {
    const getUsersDaily = async () => {
      const response = await fetch(
        "https://t-mebel.onrender.com/pagevisit/stats",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setRoutes(data);
    };
    getUsersDaily();
  }, [token]);
  return (
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

        <TableContainer sx={{maxHeight: 300,}}>
          <Table size="small">
            <TableBody>
              {routes?.map((rout) => (
                <TableRow key={rout.url}>
                  <TableCell sx={{maxWidth: 500, overflow: "hidden"}}>{rout.url}</TableCell>
                  <TableCell align="right">{rout.views}</TableCell>
                </TableRow>
              ))}
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
  );
}
