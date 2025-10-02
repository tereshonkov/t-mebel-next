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

export default function UsersRouts() {
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
  );
}
