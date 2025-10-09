"use client";
export const getToken = async (): Promise<string | null> => {
  let token = localStorage.getItem("token");

  if (!token) return null;

  try {
    const refreshRes = await fetch("https://t-mebel.onrender.com/auth/refresh", {
      method: "GET",
      credentials: "include", // чтобы кука с refresh токеном ушла
    });

    if (refreshRes.ok) {
      const newToken = await refreshRes.text();
      localStorage.setItem("token", newToken);
      token = newToken;
    }

    return token;
  } catch (error) {
    console.error("Ошибка обновления токена:", error);
    return null;
  }
};
