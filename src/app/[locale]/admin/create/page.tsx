"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Box
} from "@mui/material";
import HeaderAdmin from "@/components/HeaderAdmin/HeaderAdmin";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FormAdmin from "@/components/FormAdmin/FormAdmin";

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
        <FormAdmin />
      </Box>
    </Box>
  );
}
