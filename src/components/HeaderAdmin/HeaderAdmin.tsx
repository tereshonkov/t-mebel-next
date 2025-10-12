"use client";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";
import SearchBar from "../SearchAdmin/Search";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import { logout } from "@/api/auth";
import { useRouter } from "next/navigation";
import { Menu, MenuItem, ListItemIcon } from "@mui/material";
import { FiGlobe } from "react-icons/fi";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import Image from "next/image";
import styles from "../Header/Header.module.css";
import Link from "next/link";

const languages = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
  { code: "uk", label: "Українська" },
];

export default function HeaderAdmin() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logout();
      router.push("/signin");
    } catch (error) {
      console.error("Ошибка при выходе:", error);
    }
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentLang, setCurrentLang] = useState("ru");

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang?: string) => {
    if (lang) setCurrentLang(lang);
    setAnchorEl(null);
  };
  return (
    <AppBar
      position="static"
      color="default"
      sx={{
        background: "transparent",
        boxShadow: "none",
        border: "none",
        width: "100%",
        mb: 2,
        pb: 2,
        pl: 3,
      }}
    >
      <Toolbar disableGutters>
      <div className={styles.logoWrapper}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="Logo" width={150} height={50} />
        </Link>
      </div>
        <SearchBar />

        {/* Spacer для выравнивания */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Переключение темы */}
        {/* <IconButton onClick={toggleMode} sx={{ color: "primary.main" }}>
          {mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton> */}
        <div>
        <IconButton onClick={handleOpen} sx={{ color: "primary.main" }}>
        <FiGlobe size={24} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose()}
      >
        {languages.map((lang) => (
          <MenuItem key={lang.code} onClick={() => handleClose(lang.code)}>
            {lang.label}
            {currentLang === lang.code && (
              <ListItemIcon>
                <CheckIcon fontSize="small" />
              </ListItemIcon>
            )}
          </MenuItem>
        ))}
      </Menu>
        </div>

        <Button onClick={handleLogout} variant="contained" sx={{ ml: 2 }}>
          Выход
        </Button>
      </Toolbar>
    </AppBar>
  );
}
