// app/utils/PageVisit.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation"; // хук для текущего пути

export default function PageVisit() {
  const pathname = usePathname(); // получаем текущий маршрут

  useEffect(() => {
    console.log("PageVisit mounted!");
  }, []);

  useEffect(() => {
    const sendPageVisit = async () => {
      try {
        const res = await fetch("https://t-mebel.onrender.com/analitics/page-visit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url: window.location.href,
            userAgent: navigator.userAgent,
          }),
        });

        if (!res.ok) {
          console.error("Failed to send page visit:", res.statusText);
        } else {
          console.log(`Page visit sent for URL: ${window.location.href}`);
        }
      } catch (err) {
        console.error("Error sending page visit:", err);
      }
    };

    sendPageVisit();
  }, [pathname]);

  return null;
}
