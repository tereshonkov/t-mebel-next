import {
    Grid,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";

export default function UsersLastReview() {
  return (
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
  )
}
