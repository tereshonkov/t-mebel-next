import { Grid, Paper, Typography } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import { useState, useEffect } from "react";

interface UsersMonthly {
  monthlyUsers: number;
}

export default function UsersMonthly() {
  const [users, setUsers] = useState<UsersMonthly | null>(null);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const getUsersDaily = async () => {
      const response = await fetch(
        "https://t-mebel.onrender.com/analitics/monthly-users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setUsers(data);
    };
    getUsersDaily();
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
        <Typography variant="h6">Пользователи за месяц</Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          {users?.monthlyUsers}
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
  );
}
