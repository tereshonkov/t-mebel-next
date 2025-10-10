import FeedbackIcon from "@mui/icons-material/Feedback";
import BarChartIcon from "@mui/icons-material/BarChart";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PeopleIcon from "@mui/icons-material/People";
import {
  Badge,
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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
      <Box width={300} p={2}>
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
          <ListItemText primary="Аналитика" sx={{fontSize: "14px"}} />
        </ListItemButton>


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
            <ListItemText primary="Сообщения" sx={{fontSize: "14px"}} />
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
            <ListItemText primary="Отзывы" sx={{fontSize: "14px"}} />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon sx={{ color: "primary.main" }}>
              <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Добавить товар" sx={{fontSize: "14px"}} />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon sx={{ color: "primary.main" }}>
              <Inventory2Icon />
            </ListItemIcon>
            <ListItemText primary="Все товары" sx={{fontSize: "14px"}} />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon sx={{ color: "primary.main" }}>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Пользователи" sx={{fontSize: "14px"}} />
          </ListItemButton>
      </Box>
    </>
  );
}
