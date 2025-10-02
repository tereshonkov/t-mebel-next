import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
} from "@mui/material";

export default function HeaderAdmin({ mode, toggleMode }: { mode: string; toggleMode: () => void }) {
  return (
              <AppBar
            position="static"
            color="default"
            sx={{
              background: "transparent",
              boxShadow: "none",
              border: "none",
              width: "100%",
            }}
          >
            <Toolbar disableGutters>
              <IconButton sx={{ color: "primary.main", mr: 1 }}>
                <MailIcon />
              </IconButton>
              <IconButton sx={{ color: "primary.main", mr: 1 }}>
                <NotificationsIcon />
              </IconButton>

              {/* Переключение темы */}
              <IconButton onClick={toggleMode} sx={{ color: "primary.main" }}>
                {mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>

              {/* Spacer для выравнивания */}
              <Box sx={{ flexGrow: 1 }} />

              <Button variant="contained" sx={{ ml: 2 }}>
                Выход
              </Button>
            </Toolbar>
          </AppBar>
  )
}
