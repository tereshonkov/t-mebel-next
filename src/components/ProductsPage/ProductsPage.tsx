import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useState, useEffect } from "react";
import type { Data } from "@/types/data";
import { getProducts } from "@/api/product";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState<Data[]>([]);
  const [filter, setFilter] = useState<string>("");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  const filteredProducts = filter
    ? products.filter((item: Data) => item?.category?.toString() === filter)
    : products;
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <FormControl size="small" sx={{ minWidth: 150 }}>
                <InputLabel>Фильтр</InputLabel>
                <Select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  label="Фильтр"
                >
                  <MenuItem value="">Все товары</MenuItem>
                  <MenuItem value="KITCHEN">Кухни</MenuItem>
                  <MenuItem value="WARDROBE">Шкафы</MenuItem>
                  <MenuItem value="STORE">Магазины</MenuItem>
                  <MenuItem value="BEDROOM">Спальни</MenuItem>
                </Select>
              </FormControl>
            </TableCell>
            <TableCell align="right">
              <Link href="/admin/create">
                <Button variant="contained" color="primary">
                  Добавить товар
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <Box
        sx={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        {filteredProducts.map((item, index) => (
          <Paper
            key={item.id || index}
            sx={{
              p: 3,
              position: "relative",
              overflow: "hidden",
              borderRadius: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: 290,
              height: 290,
              background: (theme) =>
                theme.palette.mode === "light"
                  ? "#f5f5f5"
                  : "linear-gradient(135deg, #0F123B 0%, #090D2E 59%, #020515 100%)",
              color: (theme) =>
                theme.palette.mode === "light" ? "text.primary" : "#fff",
              boxShadow: 3,
            }}
          >
            <Image
              src={
                item?.images?.find((image) => image.isCover)?.url ||
                ""
              }
              alt={item.title}
              width={1000}
              height={1000}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
          </Paper>
        ))}
      </Box>
    </TableContainer>
  );
}
