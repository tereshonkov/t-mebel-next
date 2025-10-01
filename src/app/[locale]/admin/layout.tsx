import ThemeProviderClient from "@/components/ThemeProviderClient/ThemeProviderClient";
import TopBar from "@/components/TopBar/TopBar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProviderClient>
      <TopBar />
      <main>{children}</main>
    </ThemeProviderClient>
  );
}
