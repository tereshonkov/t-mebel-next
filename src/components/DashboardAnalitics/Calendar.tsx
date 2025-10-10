import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Grid, Paper, Typography } from "@mui/material";

export default function Calendar() {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
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
          ? "linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)"
          : "linear-gradient(135deg, #0F123B 0%, #090D2E 59%, #020515 100%)",
          color: (theme) =>
            theme.palette.mode === "light" ? "text.primary" : "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
          Сегодня
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "red" }}>
          {new Date().toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "short",
          })}
        </Typography>
        <CalendarMonthIcon
          sx={{
            position: "absolute",
            bottom: -10,
            right: -10,
            fontSize: 60,
            color: (theme) => theme.palette.primary.main,
            opacity: 0.15,
            transform: "rotate(15deg)",
          }}
        />
      </Paper>
    </Grid>
  );
}
