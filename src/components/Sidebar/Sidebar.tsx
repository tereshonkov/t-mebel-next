import FeedbackIcon from "@mui/icons-material/Feedback";
import BarChartIcon from "@mui/icons-material/BarChart";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PeopleIcon from "@mui/icons-material/People";
import {
  Badge,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { useTabContext } from "@/context/TabContext";
import { getMessages } from "@/api/messages";
import type { MessagesTypes } from "@/types/messages";
import type { ReviewsTypes } from "@/types/reviews";
import { useEffect, useState } from "react";
import { getReviews } from "@/api/reviews";

export default function Sidebar() {
  const { setPage } = useTabContext();
  const [messages, setMessages] = useState<MessagesTypes[]>([]);
  const [reviews, setReviews] = useState<ReviewsTypes[]>([]);
  useEffect(() => {
    getMessages().then((data) => setMessages(data));
    getReviews().then((data) => setReviews(data));
  }, []);
  return (
    <>
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
        <ListItemButton
          onClick={() => {
            setPage((prev) => ({
              ...prev,
              analitycs: true,
              messages: false,
              reviews: false,
            }));
          }}
        >
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
          <ListItemButton
            onClick={() =>
              setPage((prev) => ({
                ...prev,
                analitycs: false,
                messages: true,
                reviews: false,
              }))
            }
          >
            <ListItemIcon sx={{ color: "primary.main" }}>
              <Badge badgeContent={messages?.length || 0} color="secondary">
                <MailIcon />
              </Badge>
            </ListItemIcon>
            <ListItemText primary="Сообщения" />
          </ListItemButton>

          <ListItemButton onClick={() => (
            setPage((prev) => ({
              ...prev,
              analitycs: false,
              messages: false,
              reviews: true,
            }))
          )}>
            <ListItemIcon sx={{ color: "primary.main" }}>
              <Badge badgeContent={reviews?.length || 0} color="secondary">
                <FeedbackIcon />
              </Badge>
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
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Все" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon sx={{ color: "primary.main" }}>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Добавить" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon sx={{ color: "primary.main" }}>
              <PersonRemoveIcon />
            </ListItemIcon>
            <ListItemText primary="Удалить" />
          </ListItemButton>
        </List>
      </Box>
    </>
  );
}
