import { Grid, Paper, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import { useState, useEffect } from "react";
import { getCallClick } from "@/api/analitycs";

export default function UsersCall() {
      const [users, setUsers] = useState<string | null>(null);
      const token = localStorage.getItem("token");
      useEffect(() => {
        getCallClick().then((data) => setUsers(data));
      }, [token]);
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
          {users?.length}
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
