"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import HeaderAdmin from "@/components/HeaderAdmin/HeaderAdmin";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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

  if (!tokenChecked) return null;

  return (
    <Box display="flex" minHeight="100vh" px={5}>
      {/* Main content */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <HeaderAdmin />
        <Button
          sx={{ mb: 2, width: 100, ml: 3 }}
          variant="outlined"
          color="primary"
          startIcon={<ArrowBackIcon />}
          onClick={() => router.back()}
        >
          Назад
        </Button>
        <Box
          component="form"
          sx={{
            mb: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 1,
            alignSelf: "center",
            gap: 2,
            width: "100%",
          }}
        >
          <TextField
            label="Название товара"
            name="title"
            multiline
            rows={4}
            required
            sx={{ width: 800 }}
          />

          <TextField
            label="Описание"
            name="description"
            multiline
            rows={4}
            required
            sx={{ width: 800 }}
          />

          <FormControl required sx={{ width: 800 }}>
            <InputLabel>Категория</InputLabel>
            <Select name="category" label="Категория">
              <MenuItem value="KITCHEN">Кухня</MenuItem>
              <MenuItem value="WARDROBE">Шкаф</MenuItem>
              <MenuItem value="STORE">Магазин</MenuItem>
              <MenuItem value="BEDROOM">Спальня</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Цвет"
            name="color"
            multiline
            required
            sx={{ width: 800}}
          />

          <TextField
            label="Фурнитура"
            name="furnitures"
            multiline
            required
            sx={{ width: 800 }}
          />

          <TextField
            label="Ширина"
            name="width"
            multiline
            required
            sx={{ width: 800}}
          />

          <TextField
            label="Высота"
            name="height"
            multiline
            required
            sx={{ width: 800}}
          />

          <FormControl required sx={{ width: 800}}>
            <InputLabel>Рейтинг</InputLabel>
            <Select name="category" label="Категория">
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="contained" color="success" sx={{mt: "20px"}}>
            Добавить товар
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
