import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchBar from "../SearchAdmin/Search";
import { AppBar, Badge, Box, Button, IconButton, Toolbar } from "@mui/material";

export default function HeaderAdmin({
  mode,
  toggleMode,
}: {
  mode: string;
  toggleMode: () => void;
}) {
  return (
    <AppBar
      position="static"
      color="default"
      sx={{
        background: "transparent",
        boxShadow: "none",
        border: "none",
        width: "100%",
        mb: 2,
        pb: 2,
      }}
    >
      <Toolbar disableGutters>
        <SearchBar />

        {/* Spacer для выравнивания */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Переключение темы */}
        <IconButton onClick={toggleMode} sx={{ color: "primary.main" }}>
          {mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <IconButton sx={{ color: "primary.main", mr: 1 }}>
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <Button variant="contained" sx={{ ml: 2 }}>
          Выход
        </Button>
      </Toolbar>
    </AppBar>
  );
}
