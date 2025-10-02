import { Grid, Paper, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";

export default function UsersCall() {
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
        <Typography variant="h6">Конверсий на звонок</Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          5
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
  );
}
