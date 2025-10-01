"use client";

import { ReactNode } from "react";
import { ThemeProviderWrapper } from "@/components/ThemeProviderClient/ThemeProviderClient";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return <ThemeProviderWrapper>{children}</ThemeProviderWrapper>;
}

