"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import Sidebar from "@/components/Sidebar/Sidebar";
import HeaderAdmin from "@/components/HeaderAdmin/HeaderAdmin";
import AnaliticsPage from "@/components/AnaliticsPage/AnaliticsPage";
import MessagesPage from "@/components/MessagesPage/MessagePage";
import ReviewsPage from "@/components/ReviewsPage/ReviewsPage";
import ProductsPage from "@/components/ProductsPage/ProductsPage";
import UsersPage from "@/components/UsersPage/UsersPage";
import { useTabContext } from "@/context/TabContext";

export default function Admin() {
  const [tokenChecked, setTokenChecked] = useState(false);
  const { page } = useTabContext();
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
        <Box sx={{ mb: 2, borderRadius: 48, display: "flex", flexDirection: "row" }}>
        <Sidebar />
          <Box
            sx={(theme) => ({
              backgroundColor:
                theme.palette.mode === "light"
                  ? "#fff"
                  : "linear-gradient(180deg, #0F123B 0%, #090D2E 59%, #020515 100%)",
              height: "100%",
              borderRadius: 2,
              p: 5,
              width: "100%",
              ml: 5,
            })}
          >
            {page.analitycs && <AnaliticsPage />}
            {page.messages && <MessagesPage />}
            {page.reviews && <ReviewsPage />}
            {page.products && <ProductsPage />}
            {page.users && <UsersPage />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
