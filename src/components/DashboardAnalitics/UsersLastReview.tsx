"use client";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import { useEffect, useState } from "react";

interface Review {
  id: string;
  isApproved: boolean;
  name: string;
  productId: string;
  text: string;
}

export default function UsersLastReview() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const getUsersDaily = async () => {
      const response = await fetch("https://t-mebel.onrender.com/reviews", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setReviews(data);
    };
    getUsersDaily();
  }, [token]);
  const lastIndex = reviews.length - 1;
  const review = reviews.length > 0 ? reviews[lastIndex] : null;
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ mb: 2 }}>
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
              primary={review?.name}
              secondary={review?.text}
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
  );
}
