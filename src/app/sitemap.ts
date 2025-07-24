import type { MetadataRoute } from "next";

const locales = ["uk", "ru", "en"];

const pages: {
  slug: string;
  changeFrequency: "yearly" | "monthly" | "always" | "hourly" | "daily" | "weekly" | "never";
  priority: number;
}[] = [
  { slug: "", changeFrequency: "yearly", priority: 1 },
  { slug: "service", changeFrequency: "monthly", priority: 0.9 },
  { slug: "about", changeFrequency: "yearly", priority: 0.8 },
  { slug: "contacts", changeFrequency: "yearly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://t-mebel.com.ua";

  const result: MetadataRoute.Sitemap = [];

  // Для каждой страницы и каждого языка
  for (const page of pages) {
    for (const locale of locales) {
      // Полный путь с языком
      const url =
        page.slug === ""
          ? `${baseUrl}/${locale}`
          : `${baseUrl}/${locale}/${page.slug}`;
      result.push({
        url,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        // Добавляем hreflang-альтернативы:
        alternates: {
          languages: Object.fromEntries(
            locales.map((hreflang) => [
              hreflang,
              page.slug === ""
                ? `${baseUrl}/${hreflang}`
                : `${baseUrl}/${hreflang}/${page.slug}`,
            ])
          ),
        },
      });
    }
  }

  return result;
}
