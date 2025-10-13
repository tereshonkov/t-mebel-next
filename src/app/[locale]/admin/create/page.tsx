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
  Typography,
} from "@mui/material";
import HeaderAdmin from "@/components/HeaderAdmin/HeaderAdmin";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Admin() {
  const [tokenChecked, setTokenChecked] = useState(false);
  const router = useRouter();

  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

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
          sx={{ mb: 2, width: 100 }}
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
            borderRadius: 48,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 1,
            alignSelf: "center",
            gap: 2,
            width: 700,
          }}
        >
          <TextField
            label="Название товара"
            name="title"
            rows={4}
            required
            sx={{ width: "100%" }}
          />

          <TextField
            label="Описание"
            name="description"
            multiline
            rows={4}
            required
            sx={{ width: "100%" }}
          />

          <FormControl required sx={{ width: "100%" }}>
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
            sx={{ width: "100%" }}
          />

          <TextField
            label="Фурнитура"
            name="furnitures"
            multiline
            required
            sx={{ width: "100%" }}
          />

          <TextField
            label="Ширина"
            name="width"
            multiline
            required
            sx={{ width: "100%" }}
          />

          <TextField
            label="Высота"
            name="height"
            multiline
            required
            sx={{ width: "100%" }}
          />

          <TextField
            label="Рейтинг"
            name="rating"
            multiline
            required
            sx={{ width: "100%" }}
          />

          <Button type="submit" variant="contained" color="success">
            Добавить товар
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
