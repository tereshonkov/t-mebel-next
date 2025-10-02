"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useThemeContext } from "@/components/ThemeProviderClient/ThemeProviderClient";
import { Box, Container, Typography } from "@mui/material";
import Sidebar from "@/components/Sidebar/Sidebar";
import HeaderAdmin from "@/components/HeaderAdmin/HeaderAdmin";

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
      <Sidebar />
      {/* Main content */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Container sx={{ flexGrow: 1 }}>
          <HeaderAdmin mode={mode} toggleMode={toggleMode} />
          <Typography>Здесь будет контент</Typography>
        </Container>
      </Box>
    </Box>
  );
}
