"use client";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import Upload from "@/components/Upload/Upload";
import { useForm } from "react-hook-form";
import { Data } from "@/types/data";
import { useState } from "react";
import { uploadImage } from "@/api/images";
import { createProduct } from "@/api/product";

export default function FormAdmin() {
  const [files, setFiles] = useState<File[]>([]);
  const { register, handleSubmit, formState } = useForm<Data>({
    mode: "onBlur",
  });

  const titleError = formState.errors.title?.message;
  const descriptionError = formState.errors.description?.message;
  const colorError = formState.errors.color?.message;
  const furnituresError = formState.errors.furnitures?.message;
  const widthError = formState.errors.width?.message;
  const heightError = formState.errors.height?.message;
  const categoryError = formState.errors.category?.message;
  const ratingError = formState.errors.rating?.message;

  const handleImageUpload = async () => {
    if (files.length === 0) return;
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });
    try {
      const response = await uploadImage(formData);
      console.log("Upload successful:", response);
      return response;
    } catch (error) {
      console.error("Upload failed:", error);
      return [];
    }
  };

  const onSubmit = async (data: Data) => {
    const filesUrls = await handleImageUpload();
    console.log("OnSubmit", filesUrls);
    const productData = { 
        ...data,
        width: Number(data.width),
        height: Number(data.height),
        rating: Number(data.rating), 
        images: filesUrls
     };
    try {
      const response = await createProduct(productData);
      console.log("Product creation successful:", response);
      alert("Товар успешно создан!");
    } catch (error) {
      console.error("Product creation failed:", error);
      alert("Ошибка при создании товара.");
    }
    };

  return (
    <>
      <Box
        onSubmit={handleSubmit(onSubmit)}
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
          {...register("title", {
            required: "Это поле обязательно для заполнения",
          })}
          label="Название товара"
          multiline
          rows={4}
          required
          sx={{ width: 800 }}
        />
        {titleError && <p style={{ color: "red" }}>{titleError}</p>}

        <TextField
          {...register("description", {
            required: "Это поле обязательно для заполнения",
          })}
          label="Описание"
          multiline
          rows={4}
          required
          sx={{ width: 800 }}
        />
        {descriptionError && <p style={{ color: "red" }}>{descriptionError}</p>}

        <FormControl required sx={{ width: 800 }}>
          <InputLabel>Категория</InputLabel>
          <Select
            label="Категория"
            {...register("category", {
              required: "Это поле обязательно для заполнения",
            })}
          >
            <MenuItem value="KITCHEN">Кухня</MenuItem>
            <MenuItem value="WARDROBE">Шкаф</MenuItem>
            <MenuItem value="STORE">Магазин</MenuItem>
            <MenuItem value="BEDROOM">Спальня</MenuItem>
          </Select>
          {categoryError && <p style={{ color: "red" }}>{categoryError}</p>}
        </FormControl>

        <TextField
          label="Цвет"
          {...register("color", {
            required: "Это поле обязательно для заполнения",
          })}
          multiline
          required
          sx={{ width: 800 }}
        />
        {colorError && <p style={{ color: "red" }}>{colorError}</p>}

        <TextField
          label="Фурнитура"
          {...register("furnitures", {
            required: "Это поле обязательно для заполнения",
          })}
          multiline
          required
          sx={{ width: 800 }}
        />
        {furnituresError && <p style={{ color: "red" }}>{furnituresError}</p>}

        <TextField
          label="Ширина"
          {...register("width", {
            required: "Это поле обязательно для заполнения",
          })}
          multiline
          required
          sx={{ width: 800 }}
        />
        {widthError && <p style={{ color: "red" }}>{widthError}</p>}

        <TextField
          label="Высота"
          {...register("height", {
            required: "Это поле обязательно для заполнения",
          })}
          multiline
          required
          sx={{ width: 800 }}
        />
        {heightError && <p style={{ color: "red" }}>{heightError}</p>}

        <FormControl required sx={{ width: 800 }}>
          <InputLabel>Рейтинг</InputLabel>
          <Select
            {...register("rating", {
              required: "Это поле обязательно для заполнения",
            })}
            label="Рейтинг"
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
          </Select>
          {ratingError && <p style={{ color: "red" }}>{ratingError}</p>}
        </FormControl>

        <Upload files={files} setFiles={setFiles} />

        <Button
          type="submit"
          variant="contained"
          color="success"
          sx={{ mt: "20px" }}
        >
          Добавить товар
        </Button>
      </Box>
    </>
  );
}
