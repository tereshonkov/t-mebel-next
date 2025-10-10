import { useState } from "react";
import {
  IconButton,
  InputBase,
  Paper,
  Fade,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{ display: "flex", alignItems: "center", ml: "6vw" }}>
      {/* Иконка поиска */}
      <IconButton
        onClick={() => setOpen((prev) => !prev)}
        sx={{ color: "primary.main" }}
      >
        <SearchIcon />
      </IconButton>

      {/* Поле поиска, появится при клике */}
      <Fade in={open}>
        <Paper
          component="form"
          sx={{
            ml: 1,
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 500,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Поиск…"
            inputProps={{ "aria-label": "поиск" }}
          />
        </Paper>
      </Fade>
    </Box>
  );
}
