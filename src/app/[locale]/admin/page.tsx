"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useThemeContext } from "@/components/ThemeProviderClient/ThemeProviderClient";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FeedbackIcon from "@mui/icons-material/Feedback";
import BarChartIcon from "@mui/icons-material/BarChart";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

export default function Admin() {
  const [tokenChecked, setTokenChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/signin");
    } else {
      setTokenChecked(true);
    }
  }, [router]);

  const { mode, toggleMode } = useThemeContext();

  if (!tokenChecked) return null;

  return (
    <Box display="flex" minHeight="100vh">
      {/* Sidebar */}
      <Box width={240} p={2}>
        <Typography variant="h4" component="div" sx={{ color: "primary.main" }}>
          T-Mebel
        </Typography>
        <Box my={2}>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mb: 0.5, display: "block", letterSpacing: 1 }}
          >
            Аналитика
          </Typography>
          <Box
            sx={{
              height: "1px", // толщина линии
              bgcolor: "divider", // цвет из темы
              width: "100%", // линия на всю ширину
            }}
          />
        </Box>
        <ListItemButton>
          <ListItemIcon sx={{ color: "primary.main" }}>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Аналитика" />
        </ListItemButton>

        <Box my={2}>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mb: 0.5, display: "block", letterSpacing: 1 }}
          >
            Сообщения и отзывы
          </Typography>
          <Box
            sx={{
              height: "1px", // толщина линии
              bgcolor: "divider", // цвет из темы
              width: "100%", // линия на всю ширину
            }}
          />
        </Box>

        <List>
          <ListItemButton>
            <ListItemIcon sx={{ color: "primary.main" }}>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Сообщения" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon sx={{ color: "primary.main" }}>
              <FeedbackIcon /> {/* или CommentIcon / RateReviewIcon */}
            </ListItemIcon>
            <ListItemText primary="Отзывы" />
          </ListItemButton>
        </List>

        <Box my={2}>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mb: 0.5, display: "block", letterSpacing: 1 }}
          >
            Управление контентом
          </Typography>
          <Box
            sx={{
              height: "1px", // толщина линии
              bgcolor: "divider", // цвет из темы
              width: "100%", // линия на всю ширину
            }}
          />
        </Box>
        <List>
          <ListItemButton>
            <ListItemIcon sx={{ color: "primary.main" }}>
              <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Добавить товар" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon sx={{ color: "primary.main" }}>
              <Inventory2Icon />
            </ListItemIcon>
            <ListItemText primary="Все товары" />
          </ListItemButton>
        </List>

        <Box my={2}>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mb: 0.5, display: "block", letterSpacing: 1 }}
          >
            Управление пользователями
          </Typography>
          <Box
            sx={{
              height: "1px", // толщина линии
              bgcolor: "divider", // цвет из темы
              width: "100%", // линия на всю ширину
            }}
          />
        </Box>
        <List>
          <ListItemButton>
            <ListItemIcon sx={{ color: "primary.main" }}>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Добавить модератора" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon sx={{ color: "primary.main" }}>
              <PersonRemoveIcon />
            </ListItemIcon>
            <ListItemText primary="Удалить модератора" />
          </ListItemButton>
        </List>
      </Box>

      {/* Main content */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Container sx={{ flexGrow: 1 }}>
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

          <Typography>Здесь будет контент</Typography>
        </Container>
      </Box>
    </Box>
  );
}
