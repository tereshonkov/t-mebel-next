"use client";

import { ReactNode } from "react";
import { ThemeProviderWrapper } from "@/components/ThemeProviderClient/ThemeProviderClient";
import { TabProvider } from "@/context/TabContext";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return(
  <TabProvider>
    <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
  </TabProvider>
  );
}
